import React from "react";
import { MImage } from "../../form";
import { StaticImageData } from "next/image";
import { Typography } from "../../common";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

interface Props {
  item: {
    image: string | StaticImageData;
    name: string;
    designation: string;
  };
}

export const InnovatorHubCard = ({ item }: Props): React.ReactElement => {
  return (
    <>
      <div className="flex w-full flex-col gap-x-2 lg:gap-x-6 xl:gap-x-10">
        <div className=" flex justify-center w-full h-[200px] lg:h-[430px] pt-3 bg-lightBg">
          <MImage
            src={item.image}
            w={200}
            h={200}
            alt="img"
            className="w-full object-scale-down object-bottom"
          />
        </div>
        <div className="md:pt-5">
          <Typography variant="h2">{item.name}</Typography>
          <Typography className="md:py-2 text-sm">
            {item.designation}
          </Typography>
        </div>
        <div className="flex items-center gap-x-4 ">
          <CiTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <GrLinkedinOption className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};
