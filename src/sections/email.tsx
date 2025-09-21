"use client";

import { emailerService } from "@/services/emailer";
import "@/styles/email.css";
import { Email } from "@/types/email";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EmailSection() {
  const emptyEmail = {
    name: "",
    email: "",
    message: "",
    subject: "",
  } as Email;

  const [email, setEmail] = useState<Email>(emptyEmail);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await emailerService.sendEmail(email); // Send email
    console.log("Email submitted:", email);

    if (res.status !== 200) {
      console.log("Failed to send email: ", res);
      toast.error("Failed to send email! Please try again.");
      return;
    }

    toast.success(`Thank you ${email.name}, we got your message!`);
    setEmail(emptyEmail);
  };

  return (
    <div className="email-section">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={email.name}
            onChange={handleChange}
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email.email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={email.subject}
            onChange={handleChange}
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={email.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <button type="submit" className="styled-button w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
