"use client";

import Animator from "@/components/animator";
import SocialItem from "@/components/social-item";
import "@/styles/contact.css";
import { email, facebook, instagram, tiktok } from "@/types/constants/socials";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Contact() {
  const iconsSize = "clamp(1.5rem,6vw,2.5rem)";
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Animator animation="slide-up">
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
      </Animator>
      <Animator animation="fade">
        <section className=" flex flex-col lg:flex-row w-[40%] lg:w-[70%] justify-around mx-auto">
          <SocialItem
            icon={<FaFacebookSquare size={iconsSize} />}
            text={facebook.handle}
            link={facebook.link}
          />
          <SocialItem
            icon={<AiFillTikTok size={iconsSize} />}
            text={tiktok.handle}
            link={tiktok.link}
          />
          <SocialItem
            icon={<PiInstagramLogoFill size={iconsSize} />}
            text={instagram.handle}
            link={instagram.link}
          />
          <SocialItem
            icon={<MdEmail size={iconsSize} />}
            text={email.handle}
            link={email.link}
          />
        </section>
      </Animator>
    </div>
  );
}
