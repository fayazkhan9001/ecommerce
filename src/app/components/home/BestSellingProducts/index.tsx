"use client";
import React from "react";
import { SectionDiv } from "../../common/SectionDiv";
import { Typography } from "../../common";
import { MImage, PrimaryButton } from "../../form";
import { bestSellingProductsData } from "@/app/utils/data";
import { ProductCard } from "../../common/ProductCard";
import { mImage } from "../../../../../public/images";
import { useTimer } from "react-timer-hook";

export const BestSellingProducts = (): React.ReactElement => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 200000);
  return (
    <>
      <section className="py-4 md:py-6 lg:py-10">
        <div className="resContainer">
          <div className="pb-3 lg:pb-6">
            <SectionDiv label="This Month" />
            <div className="sm:flex justify-between items-center py-2 md:py-3 lg:py-5">
              <Typography variant="h1" className="font-semibold">
                Best Selling Products
              </Typography>
              <PrimaryButton
                title="View All"
                className="w-full sm:w-[159px] h-[42px] sm:h-[56px] mt-3 sm:mt-0"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 lg:gap-x-16 xl:gap-x-6">
            {bestSellingProductsData.map((item, index) => (
              <div key={index}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Categories:  Enhance Your Music Experience */}
        <div className="pt-5 sm:pt-10 md:pt-12 lg:pt-20 pb-5">
          <div className="resContainer bg-secondary p-4 xl:p-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col gap-3 sm:gap-6 lg:gap-y-10">
              <Typography className="font-semibold text-button pt-5 sm:pt-0">
                Categories
              </Typography>
              <Typography variant="h1" className="font-semibold text-white">
                Enhance Your <br /> Music Experience
              </Typography>
              <div>
                <MyTimer expiryTimestamp={time} />
              </div>
              <div>
                <PrimaryButton
                  title="Buy Now!"
                  className="w-[171px] h-[56px] !bg-button hover:!bg-primary shrink-0 my-2 sm:mt-0"
                />
              </div>
            </div>
            <div className="flex justify-end items-center pt-8 lg:pt-0 shrink-0 ">
              <MImage
                src={mImage.speaker}
                w={568}
                h={330}
                alt="speaker"
                className="w-[400px] h-[240px] xl:w-[568px] xl:h-[330px] shrink-0 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//timer

function MyTimer({ expiryTimestamp }: any) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex flex-wrap gap-x-4  gap-y-4 lg:gap-y-0">
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center p-2">
        <Typography variant="bodyBold">{hours}</Typography>
        <Typography variant="ExtraSmallMedium" className="!leading-none">
          Hours
        </Typography>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center p-2">
        <Typography variant="bodyBold">{days}</Typography>
        <Typography variant="ExtraSmallMedium" className="!leading-none">
          Days
        </Typography>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center p-2">
        <Typography variant="bodyBold">{minutes}</Typography>
        <Typography variant="ExtraSmallMedium" className="!leading-none">
          Minutes
        </Typography>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center p-2">
        <Typography variant="bodyBold">{seconds}</Typography>
        <Typography variant="ExtraSmallMedium" className="!leading-none">
          Seconds
        </Typography>
      </div>
    </div>
  );
}
