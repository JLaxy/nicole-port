"use client";

import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import "@/styles/hero.css";
import SocialItem from "@/components/social-item";
import { email, facebook, instagram, tiktok } from "@/types/constants/socials";

export default function Hero() {
  const iconsSize = "clamp(1.5rem,6vw,2.5rem)";
  const desktopIconSize = "40px";

  return (
    <div className="min-h-screen">
      {/*Mobile*/}
      <div className="hero-mobile-div lg:hidden">
        <div className="hero-mobile-title-div">
          <p className="text-[clamp(6rem,20vw,10rem)] hero-title-text">MAI</p>
          <p className="text-[clamp(3rem,10vw,5rem)] hero-sub-text">
            VILLATURA
          </p>
          <p className="text-[clamp(0.84375rem,2.8vw,1.5rem)] font-bold">
            UGC PORTFOLIO
          </p>
        </div>
        {/* SOCIALS DIV*/}
        <div className="hero-socials-gridbox">
          <div className="hero-socials-div">
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
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hero-desktop-div hidden lg:grid">
        <div className="hero-desktop-title-div">
          <p className="hero-title-text text-[200px]">MAI</p>
          <p className="hero-sub-text text-[100px]">VILLATURA</p>
          <p className="font-bold">UGC PORTFOLIO</p>
        </div>
        <div className="hero-desktop-socials-div">
          <SocialItem
            icon={<FaFacebookSquare size={desktopIconSize} />}
            text={facebook.handle}
            link={facebook.link}
          />
          <SocialItem
            icon={<AiFillTikTok size={desktopIconSize} />}
            text={tiktok.handle}
            link={tiktok.link}
          />
          <SocialItem
            icon={<PiInstagramLogoFill size={desktopIconSize} />}
            text={instagram.handle}
            link={instagram.link}
          />
          <SocialItem
            icon={<MdEmail size={desktopIconSize} />}
            text={email.handle}
            link={email.link}
          />
        </div>
      </div>
    </div>
  );
}
