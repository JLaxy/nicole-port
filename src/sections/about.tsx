"use client";

import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full h-screen p-10">

            {/* Left Side Content */}
            <div className="flex-1 flex-col flex items-center justify-center space-y-4">
                {/* Tiktok Handle */}
                <div className="flex-col flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">mai</h1>
                    <h1 className="font-light text-white">@gorgmai</h1>
                </div>

                {/* Profile Image */}
                <Image 
                    src="/images/tiktok-profile.png"
                    alt="Tiktok Profile"
                    width={350}
                    height={350}
                    className="rounded-3xl"
                />

                {/* Stats */}
                <div className="flex-row flex items-center justify-center space-x-5">
                    <div className="flex-col flex items-center justify-center">
                        <h1 className="text-3xl font-bold">74</h1>
                        <h1 className="font-light">Following</h1>
                    </div>
                    <div className="flex-col flex items-center justify-center">
                        <h1 className="text-3xl font-bold">20.6k</h1>
                        <h1 className="font-light">Followers</h1>
                    </div>
                    <div className="flex-col flex items-center justify-center">
                        <h1 className="text-3xl font-bold">529.5k</h1>
                        <h1 className="font-light">Likes</h1>
                    </div>
                </div>
            </div>

            {/* Right Side Content */}
            <div className="flex-1 flex-col flex items-center justify-center">
                <div className="space-y-4">
                    <h1 className="text-9xl font-bold">HI, I'M MAI</h1>
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