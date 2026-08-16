"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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

interface FooterProps {
  onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
  return (
    <footer className="w-full overflow-hidden bg-black py-14 text-white sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8">

        {/* Top section */}
        <div className="grid gap-8 border-b border-white/10 pb-12 sm:gap-10 sm:pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:pb-20">

          {/* Heading */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450] sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
              ONE LINK PROPERTIES
            </h2>

            <h3 className="max-w-3xl font-serif text-3xl leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Connecting you to
              <br />
              <span className="italic text-[#D2B450]">
                exceptional real estate.
              </span>
            </h3>
          </div>

          {/* CTA */}
          <div className="flex items-start lg:items-end lg:justify-end">
            <button
              type="button"
              onClick={onOpenModal}
              className="
                group
                inline-flex
                w-full
                max-w-[220px]
                items-center
                justify-between
                gap-3
                rounded-full
                bg-[#D2B450]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#F5F5DC]
                sm:px-7
                sm:py-4
              "
            >
              Enquire Now

              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-[#D2B450]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-b
            border-white/10
            py-10
            sm:grid-cols-2
            sm:gap-12
            sm:py-12
            lg:grid-cols-4
            lg:py-14
          "
        >

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              OneLink Properties
            </h3>

            <p className="max-w-xs text-sm leading-7 text-white/50">
              Connecting homeowners and investors with exceptional real estate
              opportunities across Dubai.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
              Explore
            </h3>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
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
                className="flex min-w-0 gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D2B450]"
                  strokeWidth={1.5}
                />

                <span className="break-all">
                  +971 50 123 4567
                </span>
              </a>

              <a
                href="mailto:info@onelinkproperties.ae"
                className="flex min-w-0 gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D2B450]"
                  strokeWidth={1.5}
                />

                <span className="break-all">
                  info@onelinkproperties.ae
                </span>
              </a>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#D2B450]
                  hover:bg-[#D2B450]
                  hover:text-black
                "
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#D2B450]
                  hover:bg-[#D2B450]
                  hover:text-black
                "
              >
                <LinkedInIcon />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#D2B450]
                  hover:bg-[#D2B450]
                  hover:text-black
                "
              >
                <FacebookIcon />
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-xs text-white/40">
            © 2026 OneLink Properties. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;