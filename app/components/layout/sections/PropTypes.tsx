"use client";

import { useState } from "react";
import TypewriterText from "../../utils/TypewriterText";
import {
  LucideAreaChart,
  LucideCircleDollarSign,
} from "lucide-react";

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

const PropTypes = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const activeContent =
    tabData.find((tab) => tab.id === activeTab) ?? tabData[0];

  return (
    <section className="my-10 py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">

        <div className="text-center">
          <h2 className="mb-4 text-2xl tracking-widest">
            THE RESIDENCES
          </h2>

          <p className="text-4xl">
            Find your perfect space
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-lg">
            Thoughtfully designed residences ranging from elegant
            one-bedroom apartments to expansive signature penthouses.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 md:flex-row">

          <div className="flex w-full gap-4 overflow-x-auto md:w-1/4 md:flex-col">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative h-[130px] min-w-[200px] overflow-hidden rounded-xl bg-cover bg-center text-left transition-all duration-300 md:h-[150px] md:min-w-0 ${
                  activeTab === tab.id
                    ? "ring-4 ring-[#D2B450]"
                    : "opacity-75 hover:opacity-100"
                }`}
                style={{
                  backgroundImage: `url(${tab.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

                {/* Label */}
                <span className="absolute left-4 top-4 text-xl font-medium text-white">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div
            key={activeContent.id}
            className="group relative flex min-h-[450px] w-full items-end overflow-hidden rounded-xl shadow-lg md:w-3/4"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${activeContent.image})`,
              }}
            />

            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />

            <div className="relative z-10 w-full p-6 text-white md:p-8">

              <h3 className="mb-3 text-3xl font-bold">
                {activeContent.label}
              </h3>

              <div className="mb-6 min-h-[60px] max-w-xl text-base text-gray-200">
                <TypewriterText
                  key={activeContent.id}
                  text={activeContent.content}
                  speed={30}
                />
              </div>

              <div className="flex flex-wrap gap-4">

                <div
                  key={`price-${activeContent.id}`}
                  className="flex w-full origin-left items-center gap-3 rounded-xl bg-[#F5F5DC] px-4 py-3 sm:w-[200px] animate-[slideRight_0.9s_ease-out_forwards]"
                >
                  <div className="flex items-center gap-3 opacity-0 animate-[fadeIn_0.6s_ease-out_0.7s_forwards]">
                    <LucideCircleDollarSign className="h-8 w-8 flex-shrink-0 rounded-full bg-[#D2B450] p-1 text-white" />

                    <span className="text-lg font-semibold text-gray-800">
                      {activeContent.price}
                    </span>
                  </div>
                </div>

                <div
                  key={`area-${activeContent.id}`}
                  className="flex w-full origin-left items-center gap-3 rounded-xl bg-[#F5F5DC] px-4 py-3 sm:w-[200px] animate-[slideRight_0.9s_ease-out_forwards]"
                >
                  <div className="flex items-center gap-3 opacity-0 animate-[fadeIn_0.6s_ease-out_0.7s_forwards]">
                    <LucideAreaChart className="h-8 w-8 flex-shrink-0 rounded-full bg-[#D2B450] p-1 text-white" />

                    <span className="text-lg font-semibold text-gray-800">
                      {activeContent.area}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropTypes;