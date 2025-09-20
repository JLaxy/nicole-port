"use client";

import "@/styles/showcase.css";
import { useState, useEffect, useRef } from "react";

export default function Showcase() {
    const [videos, setVideos] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch("/api/videos")
        .then((res) => res.json())
        .then((data) => setVideos(data));
    }, []);

    // Detect active video on scroll
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
        const { scrollLeft, offsetWidth } = container;
        const index = Math.round(scrollLeft / offsetWidth);
        setActiveIndex(index);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="showcase-section">
            <h1 className="title-other">VIDEO <span className="title-other title-highlight">REVIEWS</span></h1>
            <div ref={containerRef} className="video-container w-full">
                {videos.map((src, idx) => (
                <video key={idx} controls className="w-full md:w-96">
                    <source src={src} type="video/mp4" />
                </video>
                ))}
            </div>

            {/* Mobile View Pagination */}
            <div className="flex md:hidden justify-center mt-4 space-x-2">
                {videos.map((_, idx) => (
                <span
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-all ${
                    idx === activeIndex ? "bg-black scale-110" : "bg-gray-400"
                    }`}
                />
                ))}
            </div>
        </div>
    );
}
