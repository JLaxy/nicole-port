"use client";

import Image from "next/image";
import "@/styles/about.css";
import "@/styles/animations.css";
import Animator from "@/components/animator";

export default function About() {
  return (
    <div className="about-section">
      {/* Left Side Content */}
      <div className="left-side-content justify-start md:justify-center">
        {/* Tiktok Handle */}
        <Animator animation="slide-down">
          <div className="flex-col flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">mai</h2>
            <h2 className="font-light text-white">@gorgmai</h2>
          </div>
        </Animator>

        {/* Profile Image */}
        <Animator animation="fade">
          <div className="rounded-3xl mt-2">
            <a
              href="https://www.tiktok.com/@gorgmai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/tiktok-profile.png"
                alt="Tiktok Profile"
                width={350}
                height={350}
                className="rounded-3xl transition duration-300 
                                    border border-white/20 backdrop-blur-md bg-white/10 
                                    hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                                    w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]"
              />
            </a>
          </div>
        </Animator>

        {/* Stats */}
        <Animator animation="slide-up">
          <div className="flex-row flex items-center justify-center space-x-5 mt-2">
            <div className="flex-col flex items-center justify-center">
              <h2 className="text-3xl font-bold">74</h2>
              <h2 className="font-light">Following</h2>
            </div>
            <div className="flex-col flex items-center justify-center">
              <h2 className="text-3xl font-bold">20.6k</h2>
              <h2 className="font-light">Followers</h2>
            </div>
            <div className="flex-col flex items-center justify-center">
              <h2 className="text-3xl font-bold">529.5k</h2>
              <h2 className="font-light">Likes</h2>
            </div>
          </div>
        </Animator>
        <a
          href="https://www.tiktok.com/@gorgmai"
          target="_blank"
          rel="noopener noreferrer"
          className="styled-button mt-4"
        >
          Visit My Profile
        </a>
      </div>

      {/* Right Side Content */}
      <Animator animation="slide-left">
        <div className="right-side-content justify-center">
          <h1 className="title">
            {"HI, I'M "}
            <span className="title title-highlight">MAI</span>
          </h1>
          <p>
            {
              "I create engaging and authentic content for restaurants to help them gain visibility—especially on TikTok. While I'm new to the UGC, I come with knowledge in marketing as I'm currently studying Marketing Management."
            }
            <br />
            <br />
            {
              "I'm passionate about discovering and sharing restaurants that are truly worth trying. I believe that great food deserves great exposure, and my goal is to help restaurants connect with the right audience through creative and relatable content."
            }
            <br />
            <br />
            {
              "I'm flexible, chronically online, and have a strong understanding of social media. This helps me stay up-to-date and quickly adapt to trends—so your content stays fresh, relevant, and engaging."
            }
            <br />
            <br />
            {
              "Right now, I'm focused on food and restaurant content, but I'm also looking forward to exploring product-based content in the future."
            }
          </p>
        </div>
      </Animator>
    </div>
  );
}
