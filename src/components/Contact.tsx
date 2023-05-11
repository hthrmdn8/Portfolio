import React, { useRef, FormEvent, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const ContactComponent: React.FC = () => {

    // initializes the state variable message and its corresponding updater
    // function setMessage using the useState hook. The initial value of message
    // is the default message to be displayed in the component.
    const [message, setMessage] = useState<string>('Thank you for visiting my portfolio. If you have any questions you can contact me below!');

    // declares four useRef variables which are used to reference the input fields in the form
    const postIdRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);
    
    // declares a submit handler function for the form. It prevents the default form submission behavior, 
    // extracts the values of the form fields and generates a unique post ID using the uuidv4 function. 
    // It then logs the form data to the console and clears the form fields by resetting their values to an empty string. 
    // Finally, it sets the message state variable to a personalized message thanking the user for submitting 
    // their form and providing their name, message, and email.
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Process the form data here
        const postId = uuidv4();
        const name = nameRef.current?.value || '';
        const email = emailRef.current?.value || '';
        const message = messageRef.current?.value || '';

        // Validate form fields hits an early return to prevent form submission
        if (!name || !email || !message) {
        setMessage('Please fill out all fields.');
        return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log("Post ID:", postId)

        // Clear the form fields
        if (nameRef.current) {
            nameRef.current.value = '';
      }

        if (emailRef.current) {
            emailRef.current.value = '';
      }
        if (messageRef.current) {
            messageRef.current.value = '';
      }

        if (postIdRef.current) {
            postIdRef.current.value = '';
      }

        setMessage(`Thank you, ${name}! We have received your message: ${message}. We'll get back to you at ${email} shortly.`);

    };

    // the JSX code that renders the component
    return (
      <div id="contact">
      {message && <p>{message}</p>}
      <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br/>
            <input type="text" id="name" name="name" ref={nameRef} />
            <br />
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" id="email" name="email" ref={emailRef} />
            <br />
            <label htmlFor="name">Message:</label>
            <br/>
            <input type="text" id="message" name="message" ref={messageRef} />
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
};
// Export the Contact component as the default export
export default ContactComponent;
