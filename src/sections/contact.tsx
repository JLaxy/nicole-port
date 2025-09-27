"use client";

import Socials from "@/components/socials";
import "@/styles/contact.css";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <article className="contact-section mb-8">
        <section className="title-text">
          LETS <span className="work-text">WORK</span> TOGETHER
        </section>
        <section className="sub-text">
          {
            "Ready to turn your brand's story into content people connect with? - I'd love to help you make that happen."
          }
        </section>
        <a href="#email">
          <button className="btn">Send me an Email</button>
        </a>
      </article>
      <Socials />
    </div>
  );
}
