"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles once per project
import "swiper/css/pagination";

// Import required Swiper modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MImage } from "../../form";
import { Typography } from "../../common";
import { icons } from "../../../../../public/icons";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function HomeHeroSlider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation // Enable navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full lg:w-[80%] md:h-[344px]"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className="mt-2 md:mt-4 lg:mt-9 border-2 border-black"
          >
            <div className="flex gap-x-8 bg-[#000000] p-4">
              <div className="w-full flex justify-end items-end">
                <MImage
                  src={"/images/hero_silder_img.png"}
                  w={496}
                  h={352}
                  alt="slider"
                  className=""
                />
                <div>
                  <div className="absolute left-4 bottom-8 md:bottom-28 lg:bottom-20  gap-y-1 md:gap-y-3 lg:left-10 xl:left-14 flex flex-col justify-center lg:gap-y-6">
                    <Typography className="flex items-center gap-x-2 sm:gap-x-6 text-white">
                      <MImage
                        src={icons.appleLogo}
                        w={40}
                        h={49}
                        alt="apple"
                        className="w-[30px] h-[39px] sm:w-[40px] sm:h-[49px]"
                      />
                      iPhone 14 Series
                    </Typography>
                    <Typography
                      variant="h1"
                      className="hidden lg:block text-white tracking-widest"
                    >
                      Up to 10% <br /> off Voucher
                    </Typography>
                    <Typography
                      variant="h1"
                      className="block lg:hidden text-white tracking-widest"
                    >
                      Up to 10% off Voucher
                    </Typography>
                    <Link href={"#"}>
                      <Typography className="flex items-center gap-x-2 underline underline-offset-8 text-white">
                        Shop now <GoArrowRight />
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
