"use client";

import Socials from "@/components/socials";
import "@/styles/contact.css";

export default function Contact() {
  return (
    <>
      <article className="contact-section mb-8">
        <section className="title-text">
          LETS <span className="work-text">WORK</span> TOGETHER
        </section>
        <section className="sub-text">
          {
            "Ready to turn your brand's story into content people connect with? - I'd love to help you make that happen."
          }
        </section>
        <div className="flex gap-5">
          <button className="btn">{"Send me an Email"}</button>
          <button className="btn">{"Let's Talk!"}</button>
        </div>
      </article>
      <Socials />
    </>
  );
}
