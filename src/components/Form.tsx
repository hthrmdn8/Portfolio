import React, { useRef, FormEvent } from 'react';

const FormComponent: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Process the form data here
        const name = nameRef.current?.value || '';
        const email = emailRef.current?.value || '';

        console.log('Name:', name);
        console.log('Email:', email);

        // Clear the form fields
        if (nameRef.current) {
            nameRef.current.value = '';
        }

        if (emailRef.current) {
            emailRef.current.value = '';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" ref={nameRef} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" ref={emailRef} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
