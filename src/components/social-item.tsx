import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
  link: string;
};

export default function SocialItem({ icon, text, link }: Props) {
  return (
    <section>
      <a className="hero-socials-item" href={link} target="_blank">
        {icon}
        <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">{text}</p>
      </a>
    </section>
  );
}
