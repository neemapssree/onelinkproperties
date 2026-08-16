"use client";

import { ChevronRight, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  onOpenModal: () => void;
}

const CTA = ({ onOpenModal }: CTAProps) => {
  return (
    <section className="my-6 w-full py-14 sm:my-10 sm:py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8">

        {/* Heading */}
        <div className="text-center">

          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] sm:mb-5 sm:text-sm md:text-base md:tracking-[0.25em]">
            YOUR NEXT ADDRESS
          </h2>

          <h3 className="font-serif text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">
            Find your place{" "}
            <span className="italic text-[#D2B450]">
              in Dubai.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-gray-600 sm:mt-7 sm:text-lg">
            Discover a residence designed around the way you want to live.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-5">

            {/* Enquire */}
            <button
              type="button"
              onClick={onOpenModal}
              className="
                flex
                w-full
                max-w-[280px]
                items-center
                justify-center
                gap-3
                rounded-3xl
                bg-[#D2B450]
                px-6
                py-3
                text-sm
                font-medium
                transition-colors
                hover:bg-black
                hover:text-white
                sm:w-auto
                sm:max-w-none
                sm:text-base
              "
            >
              Enquire Now
              <ChevronRight size={20} />
            </button>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/9544637350?text=Hello%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-full
                max-w-[280px]
                items-center
                justify-center
                gap-3
                rounded-3xl
                bg-black
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-[#D2B450]
                sm:w-auto
                sm:max-w-none
                sm:text-base
              "
            >
              WhatsApp
              <MessageCircleIcon size={20} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;