"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowUpIcon } from "lucide-react";

interface AmenityItem {
  id: number;
  label: string;
  image?: string;
  content?: string;
}

type AmenitiesSliderProps = {
  sliderData: AmenityItem[];
  onOpenModal: () => void;
};

const AmenitiesSlider = ({
  sliderData,
  onOpenModal,
}: AmenitiesSliderProps) => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0">
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        navigation={{
          prevEl: ".amenities-swiper-prev",
          nextEl: ".amenities-swiper-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.4,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className=""
      >
        {sliderData.map((item) => {
          const isSecond = item.id % 2 === 0;

          return (
            <SwiperSlide key={item.id} className={isSecond ? "pt-6 sm:pt-10" : "pt-0"}>
              <div
                className="group relative h-[380px] w-full cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.02] sm:h-[420px] lg:h-[400px]"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm transition-all duration-300 group-hover:opacity-0 sm:right-5 sm:top-5">
                  <ArrowUpIcon size={19} className="rotate-45" />
                </span>

                <span className="absolute bottom-5 left-4 z-20 max-w-[calc(100%-2rem)] rounded-full bg-white/75 px-4 py-2 backdrop-blur-sm transition-all duration-300 group-hover:opacity-0 sm:left-5 sm:px-5">
                  <p className="text-sm font-semibold sm:text-lg">
                    {item.label}
                  </p>
                </span>

                <div className="absolute bottom-0 right-0 z-10 h-0 w-0 rounded-tl-[100%] bg-[#F5F5DC] transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:rounded-3xl" />

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-base leading-relaxed sm:text-xl">
                    {item.content}
                  </p>

                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="self-end rounded-xl bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-[#D2B450] sm:px-5 sm:text-base"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation */}
      <div className="absolute -bottom-2 right-4 bottom-[-60] z-30 flex gap-3 sm:right-6 lg:right-0">
        <button
          type="button"
          className="amenities-swiper-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#D2B450] text-lg font-bold text-white shadow-md transition hover:bg-white hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ←
        </button>

        <button
          type="button"
          className="amenities-swiper-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#D2B450] text-lg font-bold text-white shadow-md transition hover:bg-white hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AmenitiesSlider;