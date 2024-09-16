"use client";
import React, { useState } from "react";
import { Typography } from "../../common";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { MImage, PrimaryButton } from "../../form";
import { FiHeart } from "react-icons/fi";
import { icons } from "../../../../../public/icons";

export const SingleProductDetail = (): React.ReactElement => {
  let [counter, setCounter] = useState<number>(0);

  const decrementCounter = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="py-4 md:py-8 lg:py-0 xl:pr-10">
        <Typography variant="h3" className="tracking-wider pb-3">
          Havic HV G-92 Gamepad
        </Typography>
        <div className="flex gap-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-xl " />
          ))}

          <Typography variant="smallRegular" className="text-tertiary">
            (150 Reviews)
          </Typography>
          <span className="border-2 border-l"></span>
          <Typography variant="smallRegular" className="text-button">
            In Stock
          </Typography>
        </div>
        <div className="py-1 sm:pt-3 flex flex-col gap-y-4">
          <Typography variant="h3" className="font-light pt-1">
            $192.00
          </Typography>
          <Typography variant="smallRegular" className="!leading-150">
            PlayStation 5 Controller Skin High quality vinyl with air <br />{" "}
            channel adhesive for easy bubble free install & mess <br /> free
            removal Pressure sensitive.
          </Typography>
          <hr className="border-[1.5px]" />

          {/* ------------------------------------------------- */}

          {/* // radio button  */}

          <div className="flex gap-x-3">
            <Typography variant="h5" className="font-normal">
              Colours:
            </Typography>
            <div className=" flex items-center gap-x-2">
              <div className="w-5 h-5 bg-secondary  rounded-full flex justify-center items-center cursor-pointer">
                <span className="w-[15px] h-[15px] rounded-full border-2 border-white bg-productColor flex justify-center items-center"></span>
              </div>
              <div className="w-5 h-5 bg-hoverButton  rounded-full flex justify-center items-center cursor-pointer">
                <span className="w-[15px] h-[15px] rounded-full  bg-hoverButton flex justify-center items-center"></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <Typography variant="h5" className="font-normal">
              Size:
            </Typography>
            <div className="flex gap-x-4">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <div
                  key={index}
                  className="w-8 h-8 border-2 rounded-md hover:border-error hover:bg-error hover:text-white transition-all duration-500 cursor-pointer flex justify-center items-center"
                >
                  <Typography>{size}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------- */}

          {/*  countre section  */}

          <div className="flex flex-row  items-center gap-x-2 sm:gap-x-4 py-3">
            <div className="inline-flex items-center border-2 rounded-md border-tertiary">
              <button
                className="w-10 h-11 flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => decrementCounter()}
              >
                <FaMinus />
              </button>
              <div className="flex justify-center border-l-2 border-r-2 border-tertiary items-center w-12 sm:w-20 h-11">
                <Typography variant="h5" className="font-medium">
                  {counter}
                </Typography>
              </div>
              <button
                className="w-10 h-11  flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => setCounter(++counter)}
              >
                <FaPlus />
              </button>
            </div>

            {/* ----------------------------------------------------------------- */}

            {/* // Buy now and Heart button  */}
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <PrimaryButton
                title="Buy Now"
                className=" w-[100px] sm:w-[165px] !h-11"
              />
              <div className="w-10 h-10 rounded-md flex justify-center items-center border-2 cursor-pointer">
                <FiHeart className="text-xl" />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}

          {/* // Delievery Section  */}
          <div>
            <div className="border-2 rounded-md">
              <div className="flex gap-x-4 py-4 border-b-2 px-4">
                <MImage
                  src={icons.freeDelivery}
                  w={40}
                  h={40}
                  alt="delivery"
                  className="object-scale-down"
                />
                <div>
                  <Typography variant="bodyRegular">Free Delivery</Typography>
                  <Typography variant="smallRegular" className="underline py-2">
                    Enter your postal code for Delivery Availability
                  </Typography>
                </div>
              </div>
              <div className="flex gap-x-4 px-4 py-6">
                <MImage
                  src={icons.returnDelivery}
                  w={40}
                  h={40}
                  alt="delivery"
                  className="object-scale-down"
                />
                <div>
                  <Typography variant="bodyRegular">Return Delivery</Typography>
                  <Typography variant="smallRegular" className="py-2">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline pl-1 cursor-pointer">
                      Details
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
