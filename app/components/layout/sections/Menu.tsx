"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
    {"title" : "Home", "url" : "#"},
    {"title" : "Overview", "url" : "#overview"},
    {"title" : "Investment", "url" : "#investment"},
    {"title" : "Amenities", "url" : "#amenities"},
    {"title" : "Contact", "url" : "#contact"}
];

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll" , handleScroll);
        };
    }, []);

  return (
    <div className={`w-full h-[80px] fixed inset-0 z-99  ${scrolled ? "bg-black" : "bg-transparent"}`}>
        <div className="max-w-7xl md:flex md:justify-between md:gap-7 h-[80px] mx-auto pt-5 pb-0">
            <div>
                <span className="uppercase text-white text-4xl" >onelink</span>
            </div>

            {/* navigation */}
            <div className="">
                <ul className="w-full flex gap-10">
                    {navItems.map((item, index) => {
                        return(
                            <Link href={item.url} key={index}>
                                <li className="text-white text-lg">{item.title}</li>
                            </Link>
                        )                    
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu