"use client";

import { VideoItem } from "@/data/video-data";
import "@/styles/showcase.css";
import { useState, useEffect, useRef } from "react";

export default function Showcase() {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showSwipeOverlay, setShowSwipeOverlay] = useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const hasSwipedRef = useRef(false);

    // Fetch videos from API
    useEffect(() => {
        fetch("/api/videos")
        .then((res) => res.json())
        .then((data) => setVideos(data));
    }, []);

    // Track activeIndex on scroll (mobile only)
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollLeft, offsetWidth } = container;
            const index = Math.round(scrollLeft / offsetWidth);
            setActiveIndex(index);
            
            // Hide swipe overlay after first swipe
            if (!hasSwipedRef.current && index > 0) {
                hasSwipedRef.current = true;
                setShowSwipeOverlay(false);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    // Autoplay when section is visible
    useEffect(() => {
        const section = document.getElementById("showcase");
        if (!section) return;

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            const videoEls = section.querySelectorAll<HTMLVideoElement>("video");
            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            if (entry.isIntersecting) {
                if (isMobile) {
                // Play only the active video
                videoEls.forEach((v, idx) => {
                    if (idx === activeIndex) {
                    playWithOverlay(v);
                    } else {
                    v.pause();
                    }
                });
                } else {
                // Desktop: play all
                videoEls.forEach((v) => playWithOverlay(v));
                }
            } else {
                // Section not visible → pause all
                videoEls.forEach((v) => v.pause());
            }
            });
        },
        { threshold: 0.4 } // at least 40% of section visible
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [activeIndex, videos]);

    function playWithOverlay(video: HTMLVideoElement) {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        video.playsInline = true;

        if (isMobile) {
            video.muted = false;   // allow sound
            video.play().catch(() => console.log("Autoplay blocked (mobile)"));
        } else {
            video.muted = true;    // mute on desktop
            video.play().catch(() => console.log("Autoplay blocked (desktop)"));

            // show overlay only on desktop
            if (!video.parentElement?.querySelector(".muted-overlay")) {
                const overlay = document.createElement("div");
                overlay.className =
                    "muted-overlay absolute inset-0 bg-black/80 flex items-center justify-center text-white text-sm z-10 pointer-events-none";
                overlay.textContent = "🔇 Muted";
                video.parentElement?.appendChild(overlay);
                setTimeout(() => overlay.remove(), 1000);
            }
        }
    }

    // Auto-hide swipe overlay
    useEffect(() => {
        if (showSwipeOverlay) {
            const timer = setTimeout(() => {
                setShowSwipeOverlay(false);
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [showSwipeOverlay]);

    return (
        <div className="showcase-section" id="showcase">
            <h1 className="title-other">
                VIDEO <span className="title-other title-highlight">REVIEWS</span>
            </h1>

            <div ref={containerRef} className="video-container w-full">
                {videos.map((video, idx) => (
                <div key={idx} className="video-card">
                    <div className="video-wrapper relative">
                        <video
                        controls
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        poster={video.url + "#t=0.1"}
                        >
                        <source src={video.url} type="video/mp4" />
                        </video>
                        
                        {/* Swipe Overlay - Mobile Only */}
                        {idx === 0 && showSwipeOverlay && (
                            <div className="swipe-overlay md:hidden absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                <div className="text-white text-center">
                                    <div className="swipe-icon animate-bounce-right text-2xl">
                                        👉
                                    </div>
                                    <p className="text-sm font-medium">Swipe right to see more videos</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <h1 className="title-highlight text-2xl lg:text-3xl text-center font-bold pt-6">{video.title}</h1>
                    <p className="text-center">{video.description}</p>
                </div>
                ))}
            </div>

            {/* Pagination only mobile */}
            <div className="flex md:hidden justify-center space-x-2">
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