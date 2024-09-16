"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles once per project
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import only necessary Swiper modules
import { FreeMode, Pagination } from "swiper/modules";
import { MImage } from "../../form";
import { Typography } from "../../common";
import { browseCategoryData } from "@/app/utils/data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function BrowseByCategSlider() {
  const ref = useRef() as any;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center sm:pt-4">
        <Typography variant="h1" className="font-semibold">
          Browse By Category
        </Typography>
        <div className="flex justify-between items-center gap-x-1 sm:gap-x-3 py-1 sm:py-4 md:py-0">
          <button
            className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full bg-lightBg flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-500"
            onClick={() => {
              ref.current?.slidePrev();
            }}
          >
            <GoArrowLeft className="text-lg" />
          </button>
          <button
            className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full bg-lightBg flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-500"
            onClick={() => {
              ref.current?.slideNext();
            }}
          >
            <GoArrowRight className="text-lg" />
          </button>
        </div>
      </div>
      <div className="browseByCategoriesSlider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          ref={ref}
          onSwiper={(swiper) => {
            ref.current = swiper;
          }}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            200: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            460: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {browseCategoryData.map((item, index) => (
            <SwiperSlide key={index} className="py-3 md:py-8 lg:py-16">
              <div
                className={`hover:bg-primary group flex flex-col justify-center items-center border-[1px] border-tertiary w-full sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[160px]  lg:h-[135px] xl:w-[175px] xl:h-[145px] transition-all duration-500`}
                onMouseOver={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <MImage
                  src={hovered === index ? item.icon2 : item.icon}
                  w={56}
                  h={56}
                  alt="icon"
                  className="shrink-0"
                />
                <Typography className="group-hover:text-white">
                  {item.title}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="pb-2 sm:pb-10" />
    </div>
  );
}
