"use client";

import "@/styles/email.css";
import { useState } from 'react';

export default function Email() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        alert(`Thank you ${form.name}, we got your message!`);
        setForm({ name: "", subject: "", email: "", message: "" });
    };

    return (
        <div className="email-section">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="styled-button w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
        
    );
}