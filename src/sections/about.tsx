"use client";

import Image from "next/image";
import "@/styles/about.css";

export default function About() {
    return (
        <div className="about-section">

            {/* Left Side Content */}
            <div className="flex-1 flex-col flex items-center justify-center space-y-4">
                {/* Tiktok Handle */}
                <div className="flex-col flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">mai</h2>
                    <h2 className="font-light text-white">@gorgmai</h2>
                </div>

                {/* Profile Image */}
                <div className="rounded-3xl">
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
                                    hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        />
                    </a>
                </div>
            
                {/* Stats */}
                <div className="flex-row flex items-center justify-center space-x-5">
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
                <a
                    href="https://www.tiktok.com/@gorgmai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="styled-button"
                >
                    Visit My Profile
                </a>
            </div>

            {/* Right Side Content */}
            <div className="flex-1 flex-col flex items-center justify-center">
                <div className="space-y-4">
                    <h1 className="text-9xl">HI, I'M <span className="about-title text-9xl">MAI</span>
                    </h1>
                    <p className="mt-4 text-lg max-w-xl">
                    I create engaging and authentic content for restaurants to help them gain visibility—especially on TikTok. While I’m new to the UGC, I come with knowledge in marketing as I’m currently studying Marketing Management.
                    <br/><br/>
                    I’m passionate about discovering and sharing restaurants that are truly worth trying. I believe that great food deserves great exposure, and my goal is to help restaurants connect with the right audience through creative and relatable content.
                    <br/><br/>
                    I’m flexible, chronically online, and have a strong understanding of social media. This helps me stay up-to-date and quickly adapt to trends—so your content stays fresh, relevant, and engaging.
                    <br/><br/>
                    Right now, I’m focused on food and restaurant content, but I’m also looking forward to exploring product-based content in the future.
                    </p>
                </div>
            </div>
        </div>
    );
}