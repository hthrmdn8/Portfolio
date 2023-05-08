import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

type ContactProps = {
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
};

const Contact: React.FC<ContactProps> = (props) => {
    const [formData, setFormData] = useState({
        postId: '',
        name: '',
        email: '',
        message: '',
    });

    const [thankYou, setThankYou] = useState('Thank you!!');

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const { name, email, message } = formData;

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setThankYou(
            `Thank you, ${name}. I will be contacting you at ${email} very soon. Thank you for your message! ${message}`,
        );

        props.handleClick(event, uuidv4());
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                    />
                </label>
                <label>
                    Message:
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                    />
                </label>

                <input type="text" value={formData.postId} hidden />

                <button type="submit" onClick={handleSubmit}>
                    Send
                </button>
                <h4>{thankYou}</h4>
            </form>
        </section>
    );
};

export default Contact;
