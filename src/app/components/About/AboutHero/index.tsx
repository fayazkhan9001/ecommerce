import React from "react";
import { BreadCrumb, Typography } from "../../common";
import { MImage } from "../../form";
import { mImage } from "../../../../../public/images";
import { aboutBreadCrums } from "@/app/utils/data";

export const AboutHero = (): React.ReactElement => {
  return (
    <>
      <section className="resContainer2 md:py-6 lg:py-20">
        <div className="pt-3">
          <BreadCrumb links={aboutBreadCrums} />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center ">
            <div className=" w-full lg:pr-6">
              <Typography
                variant="h1"
                className="font-semibold tracking-wider py-3 md:py-5"
              >
                Our Story
              </Typography>
              <Typography>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </Typography>
              <Typography className="py-3">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </Typography>
            </div>
          </div>
          <div className="py-3  md:mt-6">
            <MImage src={mImage.aboutBg} w={830} h={609} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};
