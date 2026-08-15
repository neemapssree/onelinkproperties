"use client";

import { useState } from "react";
import TypewriterText from "../../utils/TypewriterText";
import {
    ChevronRight,
  LucideAreaChart,
  LucideCircleDollarSign,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";

const tabData = [
  {
    id: "tab1",
    label: "1 Bedroom",
    image: "/images/bedrooms/onelink-properties-1-bed.webp",
    price: "1.25M",
    area: "750 sq ft",
    content:
      "A sophisticated residence designed for modern city living, with an open-plan layout and generous natural light.",
  },
  {
    id: "tab2",
    label: "2 Bedroom",
    price: "2.25M",
    area: "850 sq ft",
    image: "/images/bedrooms/onelink-properties-2-bed.webp",
    content:
      "Spacious interiors designed for comfortable family living, combining contemporary finishes with beautiful surroundings.",
  },
  {
    id: "tab3",
    label: "3 Bedroom",
    price: "3.25M",
    area: "1150 sq ft",
    image: "/images/bedrooms/onelink-properties-3-bed.webp",
    content:
      "An expansive residence offering generous living spaces, premium finishes, and a refined lifestyle for modern families.",
  },
];

const CTA = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const activeContent =
    tabData.find((tab) => tab.id === activeTab) ?? tabData[0];

  return (
    <section className="my-10 py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">

        <div className="text-center">
          <h2 className="mb-4 text-2xl tracking-widest">
            YOUR NEXT ADDRESS
          </h2>

          <p className="text-4xl">
            Find your place in Dubai.
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-lg">
            Discover a residence designed around the way you want to live.
          </p>

          <div className='flex gap-7 mt-7 items-center justify-center'>
                <button className='flex gap-3 bg-[#D2B450] hover:bg-[#000] hover:text-white text-md px-5 py-3 rounded-3xl cursor-pointer'>
                    Enquire Now <ChevronRight />
                </button>
                <Link href="https://wa.me/9544637350?text=Hello%2C%20I%20have%20a%20question." target="_blank" className='flex gap-3 bg-[#000] text-white hover:bg-[#D2B450] text-md px-5 py-3 rounded-3xl cursor-pointer'>
                    Whatsapp <MessageCircleIcon />
                </Link>                    
            </div> 
        </div>
      </div>
    </section>
  );
};

export default CTA;