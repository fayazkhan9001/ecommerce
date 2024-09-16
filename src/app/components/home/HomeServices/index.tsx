"use client";
import React, { useEffect, useState } from "react";
import { MImage } from "../../form";
import { Typography } from "../../common";
import { icons } from "../../../../../public/icons";
import { MdOutlineArrowUpward } from "react-icons/md";
import { homeServicesData } from "@/app/utils/data";

export const HomeServices = (): React.ReactElement => {
  const [show, setShow] = useState<boolean>(true);

  const ControllButton = () => {
    if (window.scrollY > 500) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ControllButton);
    return () => {
      window.removeEventListener("scroll", ControllButton);
    };
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="resContainer">
          <div className="flex flex-wrap justify-center items-center gap-x-14 pb-6 sm:pb-10 lg:pb-20 gap-y-5 sm:gap-y-10">
            {homeServicesData.map((service, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <div className="w-[80px] h-[80px] bg-secondary rounded-full border-8 border-[#c1c0c1] flex items-center justify-center">
                    <MImage src={service.icon} w={40} h={40} alt="delivery" />
                  </div>
                  <Typography variant="h5" className="font-semibold pt-4">
                    {service.title}
                  </Typography>
                  <Typography variant="bodyRegular" className="!leading-5">
                    {service.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${show && "hidden"} flex justify-end items-center py-5 fixed bottom-3 right-3 md:right-6 lg:right-8 xl:right-20 sm:top-60 sm:right-20 z-50`}
          >
            <button
              className="w-[38px] sm:w-[46px] h-[38px] sm:h-[46px] rounded-full bg-lightBg flex justify-center items-center"
              onClick={() => {
                document.documentElement.style.scrollBehavior = "smooth";
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              <MdOutlineArrowUpward className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
