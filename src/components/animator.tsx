"use client";
import { useEffect, useRef, useState } from "react";

export default function Animator({
  children,
  animation,
  className = "",
}: {
  children: React.ReactNode;
  animation: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // remove if you want it to trigger only once
        }
      },
      { threshold: 0.2 } // trigger when 20% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${animation} ${isVisible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}
