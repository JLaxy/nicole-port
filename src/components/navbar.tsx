"use client";

import { navbarData } from "@/data/navbar-data";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed mt-3 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 md:w-1/2 bg-white shadow-md z-50 rounded-2xl overflow-hidden text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold hover:text-amber-400">
            MAI UGC
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navbarData.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:text-amber-400"
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
              className="block hover:text-amber-400"
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
