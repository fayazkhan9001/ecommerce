"use client";
import React, { useRef } from "react";

import { SectionDiv } from "../../common/SectionDiv";
import { ProductCard, Typography } from "../../common";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { useSwiper } from "swiper/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

import { ExploreProductsData } from "@/app/utils/data";
import { PrimaryButton } from "../../form";

export const ExploreOurProducts = (): React.ReactElement => {
  const ref = useRef() as any;

  return (
    <>
      <section className="sm:py-5 lg:py-10">
        <div className="resContainer">
          <SectionDiv label="Our Products" />
          <div className="flex justify-between items-center py-2">
            <Typography variant="h1" className="font-semibold">
              Explore Our Products
            </Typography>
            <div className="flex items-center gap-x-1 sm:gap-x-3">
              <button
                className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] bg-lightBg rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-500"
                onClick={() => {
                  ref?.current?.slidePrev();
                }}
              >
                <GoArrowLeft className="text-lg" />
              </button>
              <button
                className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] bg-lightBg rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-500"
                onClick={() => {
                  ref.current.slideNext();
                }}
              >
                <GoArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Explore our Product slider  */}
        <div className="resContainer">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                  rows: 2,
                },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                  rows: 2,
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                  rows: 2,
                },
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
                grid: {
                  rows: 2,
                },
              },
            }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            ref={ref}
            onSwiper={(swiper) => {
              ref.current = swiper;
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Grid]}
            className="mySwiper"
          >
            {ExploreProductsData.map((card, index) => (
              <SwiperSlide key={index}>
                <ProductCard item={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="resContainer flex justify-center items-center pt-10">
          <PrimaryButton
            title="View All Products"
            className="w-full sm:w-[234px] h-[42px] sm:h-[56px]"
          />
        </div>
      </section>
    </>
  );
};
