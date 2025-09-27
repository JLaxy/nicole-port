import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Socials() {
  const iconsSize = "clamp(1.5rem,6vw,2.5rem)";
  return (
    <>
      <article className=" mx-auto max-w-[80%] md:hidden">
        <div className="hero-socials-div">
          <section className="hero-socials-item">
            <FaFacebookSquare size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              facebook
            </p>
          </section>
          <section className="hero-socials-item">
            <AiFillTikTok size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              @maivlltr
            </p>
          </section>
          <section className="hero-socials-item">
            <PiInstagramLogoFill size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              @maivlltr
            </p>
          </section>
          <section className="hero-socials-item">
            <MdEmail size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              you@example.com
            </p>
          </section>
        </div>
      </article>
      <article className="flex-row hidden md:flex">
        <div className="flex-col w-full items-end flex">
          <section className="hero-socials-item">
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              facebook
            </p>
            <FaFacebookSquare size={iconsSize} />
          </section>
          <section className="hero-socials-item">
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              @maivlltr
            </p>
            <AiFillTikTok size={iconsSize} />
          </section>
        </div>
        <div className="flex flex-col w-full">
          <section className="hero-socials-item">
            <PiInstagramLogoFill size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              @maivlltr
            </p>
          </section>
          <section className="hero-socials-item">
            <MdEmail size={iconsSize} />
            <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
              you@example.com
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
