"use client";
import React, { useState } from "react";
import { MImage } from "../../form";
import { productDetailsData } from "@/app/utils/data";
import { mImage } from "../../../../../public/images";
import { StaticImageData } from "next/image";

export const ProductImageSlider = (): React.ReactElement => {
  const [isShow, setIsShow] = useState<string | StaticImageData>();
  return (
    <div className="py-2 lg:py-0">
      <div className="flex flex-col lg:flex-col xl:flex-row gap-y-3 md:gap-y-6 gap-x-6">
        <div className="flex flex-row lg:flex-row xl:flex-col gap-x-2 gap-y-4 order-2 lg:order-2 xl:order-1">
          {productDetailsData.map((img, index) => (
            <div
              key={index}
              className="w-full h-[80px] md:h-[140px] lg:w-[120px] lg:h-[138px] xl:w-[170px] xl:h-[138px] p-4 bg-lightBg flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setIsShow(img.image)}
            >
              <MImage
                src={img.image}
                w={120}
                h={100}
                alt="product"
                className="w-[40px] md:w-[120px] md:h-[100px] object-scale-down"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-lightBg px-5 cursor-pointer order-1 lg:order-1 xl:order-2">
          <MImage
            src={isShow ?? mImage.productDetailHome}
            w={446}
            h={315}
            alt="productHome"
            className="object-contain w-full h-[300px] lg:w-[400px] lg:h-[450px] xl:w-[446px] xl:h-[315px] 
            "
          />
        </div>
      </div>
    </div>
  );
};
