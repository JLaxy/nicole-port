"use client";

import { FaFacebookSquare } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* TITLE DIV*/}
      <div
        className="front-div text-right"
        style={{ backgroundImage: `url('/images/mobile-background.jpg')` }}
      >
        <div className="mr-5">
          <p className="text-[clamp(6rem,20vw,15rem)] title-text">MAI</p>
          <p className="text-[clamp(3rem,10vw,7.5rem)] sub-text">VILLATURA</p>
          <p className="text-[clamp(0.84375rem,2.8vw,2.125rem)] font-bold">
            UGC PORTFOLIO
          </p>
        </div>
        {/* SOCIALS DIV*/}
        <div>
          <div>
            <FaFacebookSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
