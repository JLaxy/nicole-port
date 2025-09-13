"use client";

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export function CSection({ id, children, className = "", fullScreen = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`${fullScreen ? "h-screen" : "py-20"} flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
