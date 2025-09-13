"use client";

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string; // optional to allow overrides
}

export function CSection({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`h-screen flex items-center justify-center bg-gray-100 ${className}`}
    >
      {children}
    </section>
  );
}
