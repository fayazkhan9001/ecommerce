"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { FlashSalesCardData } from "@/app/utils/data";
import { ProductCard } from "../../common/ProductCard";
import HomeTimer from "../HomeTimer";
import { Typography } from "../../common/Typography";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { PrimaryButton } from "../../form";

export default function FlashSalesSlider() {
  const ref = useRef() as any;
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300000); // 10 minutes timer
  return (
    <>
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between items-center py-3 sm:py-5">
          <div className="flex flex-wrap md:gap-x-[11rem] lg:gap-x-[5rem] xl:gap-x-[6rem]">
            <Typography
              variant="h1"
              className=" pb-3 md:pb-0 mr-4 md:mr-0 font-semibold"
            >
              Flash Sales
            </Typography>
            <HomeTimer expiryTimestamp={time} />
          </div>
          <div className="flex items-center gap-x-3 pt-3  sm:py-8 md:py-4 lg:py-0">
            <button
              className={`w-[38px] sm:w-[46px] h-[38px] sm:h-[46px] bg-lightBg rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-500`}
              onClick={() => {
                ref?.current?.slidePrev();
              }}
            >
              <LuArrowLeft />
            </button>
            <button
              className={`w-[38px] sm:w-[46px] h-[38px] sm:h-[46px] bg-lightBg rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-500`}
              onClick={() => {
                ref?.current?.slideNext();
              }}
            >
              <LuArrowRight />
            </button>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            ref={ref}
            onSwiper={(swiper) => {
              ref.current = swiper;
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <div className="flex flex-col gap-x-12">
              {FlashSalesCardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="py-5 md:py-8 lg:py-14 flex justify-center items-center">
          <PrimaryButton
            title="View All Products"
            className="w-full sm:w-[234px] h-[42px] sm:h-[56px]"
          />
        </div>
        <hr />
      </div>
    </>
  );
}
