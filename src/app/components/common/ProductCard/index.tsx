"use client";
import React from "react";
import { MImage } from "../../form";
import { Typography } from "../Typography";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { routes } from "@/app/utils/const";

import { addToCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "@/lib/features/whishLIstSlice";

interface ICard {
  item: {
    id?: number;
    image: string | StaticImageData;
    title: string;
    oldPrice?: number | string;
    newPrice: number | string;
    rating: number | string;
    discount?: string;
    condition?: string;
    color?: string;
  };
}

export const ProductCard = ({ item }: ICard): React.ReactElement => {
  const dispatch = useDispatch();

  const productAddToCart = (item: { item: ICard }) => {
    const newItem = {
      ...item,
      id: Date.now(),
    };
    dispatch(addToCart(newItem));
  };

  const productAddToWhisList = (item: ICard["item"]) => {
    dispatch(addToList(item));
  };

  return (
    <div className="py-1 sm:py-3">
      <div className="bg-lightBg h-[200px] md:h-[250px] p-12 flex justify-center relative rounded-md group">
        <Link href={routes.productdetails}>
          <MImage
            src={item.image}
            w={170}
            h={129}
            alt="product"
            className="!w-full !h-full object-contain"
          />
          {item.discount ? (
            <div
              className={` w-[40px] h-[18px] sm:w-[55px] sm:h-[26px] bg-primary text-white flex items-center justify-center rounded-md absolute top-2 left-2`}
            >
              <Typography variant="ExtraSmallRegular">
                {item.discount}
              </Typography>
            </div>
          ) : (
            ""
          )}
          {item.condition ? (
            <div
              className={` w-[40px] h-[18px] sm:w-[55px] sm:h-[26px] bg-button text-white flex items-center justify-center rounded-md absolute top-2 left-2`}
            >
              <Typography variant="ExtraSmallRegular">
                {item?.condition}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-y-3">
          <div
            className=" w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-white transition-all duration-500 hover:bg-primary hover:text-white flex items-center justify-center"
            onClick={() => productAddToWhisList(item)}
          >
            <IoMdHeartEmpty className="w-4 cursor-pointer" />
          </div>
          <div className=" w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-white transition-all duration-500 hover:bg-primary hover:text-white flex items-center justify-center">
            <IoEyeOutline className="w-4 cursor-pointer" />
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 p-2 w-full rounded-b-md bg-secondary text-white text-center  hidden group-hover:block cursor-pointer"
          onClick={() => productAddToCart(item)}
        >
          <Typography variant="bodyMedium">Add To Cart</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 sm:gap-y-3 pt-3 ">
        <Typography variant="bodyBold">{item.title}</Typography>
        <Typography variant="bodyBold" className="text-primary">
          {item.newPrice}{" "}
          <span className="text-tertiary pl-4 line-through">
            {item.oldPrice}
          </span>
        </Typography>
        <div className="flex gap-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
          <Typography variant="bodyBold" className="text-tertiary">
            {item.rating}
          </Typography>
        </div>
      </div>
      <div>
        {item.color ? (
          <div className="flex flex-row gap-2">
            <span className="w-[20px] h-[20px] rounded-full bg-primary group relative flex justify-center items-center">
              <span className="w-[16px] h-[16px] rounded-full group-hover:border-2 group-hover:border-white group-hover:transition-all group-hover:duration-100 absolute"></span>
            </span>
            <span className="w-[20px] h-[20px] rounded-full bg-black group relative flex justify-center items-center">
              <span className="w-[16px] h-[16px] rounded-full group-hover:border-2 group-hover:border-white  group-hover:transition-all group-hover:duration-100 absolute"></span>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
