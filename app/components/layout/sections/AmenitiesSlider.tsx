"use client" 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpIcon } from "lucide-react";
import { useRef } from "react";

interface AmenityItem {
  id: number;
  label: string;
  image?: string;
  content?: string;
}
type AmenitiesSliderProps = {
  sliderData: AmenityItem[];
};

const AmenitiesSlider = ({sliderData} : AmenitiesSliderProps) => {
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      <Swiper 
      modules={[Navigation]}
      slidesPerView={4}
      spaceBetween={20}
      navigation={{
        prevEl: ".custom-swiper-prev",
        nextEl: ".custom-swiper-next",
      }}
      onBeforeInit={(swiper: SwiperType) => {
      // 2. Overriding with actual element references during initialization is safe
      if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
      }}
      breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper !pb-12"
      >
        {sliderData?.map((item) => {
          const isSecond = item.id % 2 === 0;
          return(
            <SwiperSlide key={item.id} className="mt-20">
              <div className={`relative rounded-3xl h-100 ${isSecond ? 'mt-[40]' : ''}`} style={{backgroundImage: `url(${item.image})`}}>
                  <span className="flex items-center align-center justify-center absolute w-13 h-13 right-5 top-5 bg-[#ffffff90] px-0 py-0 rounded-full">
                      <ArrowUpIcon size={20} className='transform rotate-45'/>
                  </span>
                  <span className="absolute left-5 bottom-5 bg-[#ffffff90] px-5 py-2 rounded-full">
                      <p className='font-semibold text-lg'>{item.label}</p>
                  </span>
              </div>              
            </SwiperSlide>
          );
        })}

        {/* {navigation} */}
        <div className="absolute top-0 right-0 flex justify-between gap-5 px-2 z-10 pointer-events-none">
            <button
              ref={prevRef}
              className="cursor-pointer w-10 h-10 flex items-center custom-swiper-prev pointer-events-auto bg-[#D2B450] hover:bg-white text-white hover:text-gray-800 font-bold p-3 rounded-full shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="cursor-pointer w-10 h-10 flex items-center custom-swiper-next pointer-events-auto bg-[#D2B450] hover:bg-white text-white hover:text-gray-800  font-bold p-3 rounded-full shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
      </Swiper>
    </div>
  )
}

export default AmenitiesSlider