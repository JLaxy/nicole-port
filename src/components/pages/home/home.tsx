"use client";

import Image from "next/image";

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">HI! I&apos;M MAI</h1>
      <Image
        src={"/images/background.jpg"}
        width={500}
        height={500}
        alt="mai photo"
      />
    </div>
  );
}
