"use client";

import { navbarData } from "@/data/navbar-data";
import { useState } from "react";

import "@/styles/nav.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-div nav-style">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#home" className="nav-title">
            MAI UGC
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navbarData.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:text-white"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-2 px-4 pb-4 space-y-2">
          {navbarData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
