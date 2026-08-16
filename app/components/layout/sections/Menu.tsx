"use client";

import { NAV_ITEMS } from "@/app/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "../../MobileMenu";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[1000] h-[80px] w-full transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full md:max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="relative z-[9999]">
          <span className="text-4xl uppercase text-white">
            onelink
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.url}>
                <Link
                  href={item.url}
                  className="text-lg text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <MobileMenu />

      </div>
    </header>
  );
};

export default Menu;