'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Replace with your EmailJS user ID
            );
            setStatus('Email sent successfully!');
            console.log(result.text);
        } catch (error) {
            setStatus('Failed to send email. Please try again later.');
            console.error(error.text);
        }

        // Optionally reset the form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="py-[50px]">
            <h2 className="text-center text-[32px] font-bold">Contact Us</h2>
            {status && <p>{status}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}
