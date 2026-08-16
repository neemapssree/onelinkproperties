"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "../utils/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 top-4 z-[9999] flex h-12 w-12 items-center justify-center text-3xl text-white lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[9998] bg-black transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-[80px]">
          <nav className="flex flex-col px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/20 py-5 text-lg text-white"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}