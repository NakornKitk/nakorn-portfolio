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
        <div className="py-16 bg-[#F4EDD3] px-6 md:px-[20%]">
            <h2 className="text-center text-[26px] md:text-[32px] font-bold">Contact Me</h2>
            {status && <p className="text-center text-green-600">{status}</p>}
            <form onSubmit={handleSubmit} className="py-6 w-full mx-auto max-w-[600px] space-y-6">
                <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-400 px-4 py-3 rounded-md text-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-400 px-4 py-3 rounded-md text-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border border-gray-400 px-4 py-3 rounded-md text-lg h-40 resize-none"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-4 py-3 w-40 border border-[#4C585B] rounded-full bg-[#4C585B] text-white text-lg hover:bg-[#3A4648] transition duration-300"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
