"use client";

import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import "@/styles/hero.css";

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
            <div className="hero-socials-item">
              <FaFacebookSquare size={iconsSize} />
              <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
                facebook
              </p>
            </div>
            <div className="hero-socials-item">
              <AiFillTikTok size={iconsSize} />
              <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
                @maivlltr
              </p>
            </div>
            <div className="hero-socials-item">
              <PiInstagramLogoFill size={iconsSize} />
              <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
                @maivlltr
              </p>
            </div>
            <div className="hero-socials-item">
              <MdEmail size={iconsSize} />
              <p className="sub-text text-[clamp(0.84375rem,2.8vw,1.3rem)]">
                you@example.com
              </p>
            </div>
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
          <div className="hero-socials-item">
            <FaFacebookSquare size={desktopIconSize} />
            <p className="sub-text text-lg">facebook</p>
          </div>
          <div className="hero-socials-item">
            <AiFillTikTok size={desktopIconSize} />
            <p className="sub-text text-lg">@maivlltr</p>
          </div>
          <div className="hero-socials-item">
            <PiInstagramLogoFill size={desktopIconSize} />
            <p className="sub-text text-lg">@maivlltr</p>
          </div>
          <div className="hero-socials-item">
            <MdEmail size={desktopIconSize} />
            <p className="sub-text text-lg">you@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
