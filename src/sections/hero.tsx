"use client";

import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import "@/styles/hero.css";
import "@/styles/animations.css";
import SocialItem from "@/components/social-item";
import { email, facebook, instagram, tiktok } from "@/types/constants/socials";
import Animator from "@/components/animator";

export default function Hero() {
  const iconsSize = "clamp(1.5rem,6vw,2.5rem)";
  const desktopIconSize = "40px";

  return (
    <div className="min-h-screen">
      {/*Mobile*/}
      <div className="hero-mobile-div lg:hidden">
        <div className="hero-mobile-title-div">
          <Animator animation="slide-left">
            <p className="text-[clamp(6rem,20vw,10rem)] hero-title-text">MAI</p>
          </Animator>
          <Animator animation="slide-left">
            <p className="text-[clamp(3rem,10vw,5rem)] hero-sub-text">
              VILLATURA
            </p>
          </Animator>
          <Animator animation="slide-left">
            <p className="text-[clamp(0.84375rem,2.8vw,1.5rem)] font-bold">
              UGC PORTFOLIO
            </p>
          </Animator>
        </div>
        {/* SOCIALS DIV*/}
        <div className="hero-socials-gridbox">
          <div className="hero-socials-div">
            <Animator animation="slide-left">
              <SocialItem
                icon={<FaFacebookSquare size={iconsSize} />}
                text={facebook.handle}
                link={facebook.link}
              />
            </Animator>
            <Animator animation="slide-left">
              <SocialItem
                icon={<AiFillTikTok size={iconsSize} />}
                text={tiktok.handle}
                link={tiktok.link}
              />
            </Animator>
            <Animator animation="slide-left">
              <SocialItem
                icon={<PiInstagramLogoFill size={iconsSize} />}
                text={instagram.handle}
                link={instagram.link}
              />
            </Animator>
            <Animator animation="slide-left">
              <SocialItem
                icon={<MdEmail size={iconsSize} />}
                text={email.handle}
                link={email.link}
              />
            </Animator>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hero-desktop-div hidden lg:grid">
        <div className="hero-desktop-title-div">
          <Animator animation="slide-right">
            <p className="hero-title-text text-[200px]">MAI</p>
          </Animator>
          <Animator animation="slide-right">
            <p className="hero-sub-text text-[100px]">VILLATURA</p>
          </Animator>
          <Animator animation="slide-right">
            <p className="font-bold">UGC PORTFOLIO</p>
          </Animator>
        </div>
        <Animator animation="slide-right">
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
        </Animator>
      </div>
    </div>
  );
}
