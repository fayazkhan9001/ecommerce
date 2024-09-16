"use client";
import React from "react";

import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { StaticImageData } from "next/image";
import { MImage } from "@/app/components/form";
import { Typography } from "@/app/components/common";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToList, removeFromList } from "@/lib/features/whishLIstSlice";
import { addToCart } from "@/lib/features/cartSlice";

interface ICard {
  item: {
    id?: number;
    image: string | StaticImageData;
    title: string;
    oldPrice?: number | string;
    newPrice?: number | string;
    rating?: number | string;
    discount?: string;
    condition?: string;
    color?: string;
    trash?: boolean;
    stars?: string;
  };
}

export const WhishListCard = ({ item }: any): React.ReactElement => {
  const disptach = useDispatch();

  const handleAddToCard = (item: ICard["item"]) => {
    disptach(addToCart(item));
  };

  const handleRemoveCard = (title: string) => {
    disptach(removeFromList(title));
  };

  return (
    <div className=" py-2 sm:py-3">
      <div className="bg-lightBg h-[250px] lg:h-[220px] xl:h-[250px] p-12 flex relative rounded-md group">
        <MImage
          src={item.image}
          w={170}
          h={129}
          alt="product"
          className="!w-full !h-full object-contain"
        />
        {item.discount ? (
          <div
            className={`w-[55px] h-[26px] bg-primary text-white flex items-center justify-center rounded-md absolute top-2 left-2`}
          >
            <Typography variant="ExtraSmallRegular">{item.discount}</Typography>
          </div>
        ) : (
          ""
        )}
        {item.condition ? (
          <div
            className={`w-[55px] h-[26px] bg-button text-white flex items-center justify-center rounded-md absolute top-2 left-2`}
          >
            <Typography variant="ExtraSmallRegular">
              {item?.condition}
            </Typography>
          </div>
        ) : (
          ""
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-y-3">
          <div
            className="w-[34px] h-[34px] rounded-full bg-white transition-all duration-500 hover:bg-primary hover:text-white flex items-center justify-center"
            onClick={() => handleRemoveCard(item?.title)}
          >
            <BsTrash3 className="w-4 cursor-pointer" />
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 p-2 w-full rounded-b-md bg-secondary text-white text-center  hidden group-hover:flex justify-center items-center cursor-pointer"
          onClick={() => handleAddToCard(item)}
        >
          <Typography
            variant="smallMedium"
            className="flex items-center gap-x-2"
          >
            <IoCartOutline className="text-2xl" />
            Add To Cart
          </Typography>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 sm:gap-y-3 pt-3 ">
        <Typography variant="bodyBold">{item.title}</Typography>
        <Typography variant="bodyBold" className="text-primary">
          {item.newPrice}{" "}
          <span className="text-tertiary pl-4 line-through">
            {item.oldPrice}
          </span>
        </Typography>
      </div>
      <div>
        {item.stars ? (
          <div className="flex items-center gap-x-1 py-1 sm:py-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <FaStar className="text-yellow-500" />
              </div>
            ))}
            <Typography variant="smallMedium" className="text-tertiary px-2">
              (45)
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
};
