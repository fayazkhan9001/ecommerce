"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles/styles.css";
// import required modules

import { innovatorHubData } from "@/app/utils/data";
import { InnovatorHubCard } from "../InnovatorHubCard";
import { FreeMode, Pagination } from "swiper/modules";

export const InnovatorHubSlider = () => {
  return (
    <>
      <div className="resContainer py-16">
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1400: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {innovatorHubData.map((item, index) => (
            <SwiperSlide key={index} className="pb-10 lg:pb-20">
              <InnovatorHubCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
