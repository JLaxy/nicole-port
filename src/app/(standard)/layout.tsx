"use client";

import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
