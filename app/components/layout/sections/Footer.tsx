'use client'

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link";
import { InstagramIcon } from "./Socials/InstagramIcon";
import { LinkedInIcon } from "./Socials/LinkedinIcon";
import { FacebookIcon } from "./Socials/FacebookIcon";

const footerLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-16">
        <div className="w-full mx-auto max-w-7xl">
            <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:pb-20">
                <div className="">
                    <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B450]">
                        ONE LINK PROPERTIES
                    </h2>
                    <h2 className="max-w-3xl font-serif text-2xl leading-[1.05] text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        Connecting you to
                        <br />
                        <span className="italic text-[#D2B450]">
                            exceptional real estate.
                        </span>
                    </h2>
                </div>
                <div className="flex items-end lg:justify-end">
                    <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#D2B450] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F5F5DC]"
                    >
                    Enquire Now

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#D2B450] transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight size={15} />
                    </span>
                    </a>
                </div> 
          </div> 

          <div className="grid gap-12 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
            <div className="lg:col-span-1">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                OneLink Properties
                </h3>

                <p className="max-w-xs text-sm leading-7 text-white/50">
                Connecting homeowners and investors with exceptional real estate
                opportunities across Dubai.
                </p>
            </div>

            <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
                Explore
                </h3>

                <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                    {link.label}

                    <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                    </a>
                ))}
                </nav>
            </div>

            <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
                Contact
                </h3>

                <div className="space-y-4">

                <div className="flex gap-3">
                    <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-[#D2B450]"
                    strokeWidth={1.5}
                    />

                    <p className="text-sm leading-6 text-white/60">
                    Dubai, United Arab Emirates
                    </p>
                </div>

                <a
                    href="tel:+971501234567"
                    className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <Phone
                    size={17}
                    className="shrink-0 text-[#D2B450]"
                    strokeWidth={1.5}
                    />

                    <span>+971 50 123 4567</span>
                </a>

                <a
                    href="mailto:info@onelinkproperties.ae"
                    className="flex gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <Mail
                    size={17}
                    className="shrink-0 text-[#D2B450]"
                    strokeWidth={1.5}
                    />

                    <span>info@onelinkproperties.ae</span>
                </a>

                </div>
            </div>

            <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
                Follow Us
                </h3>

                <div className="flex gap-3">
                <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#D2B450] hover:bg-[#D2B450] hover:text-black"
                >
                    <InstagramIcon />
                </a>

                <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#D2B450] hover:bg-[#D2B450] hover:text-black"
                >
                    <LinkedInIcon />
                </a>

                <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#D2B450] hover:bg-[#D2B450] hover:text-black"
                >
                    <FacebookIcon />
                </a>

                </div>
            </div>            
            </div>
            <div className="pt-7 text-xs text-white/40 text-center w-full">
                <p className="text-center">
                    © 2026 OneLink Properties. All rights reserved.
                </p>
            </div>
          </div>          
        </div>
  )
}

export default Footer