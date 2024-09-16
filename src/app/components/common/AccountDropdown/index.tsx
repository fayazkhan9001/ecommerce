import { navDropdown } from "@/app/utils/data";
import React, { SetStateAction } from "react";
import { MImage } from "../../form";
import { Typography } from "../Typography";
import Link from "next/link";

interface Props {
  dropDown: boolean;
  setDropDown: React.Dispatch<SetStateAction<boolean>>;
}

export const AccountDropdown = ({
  dropDown,
  setDropDown,
}: Props): React.ReactElement => {
  return (
    <div className="absolute w-[230px] top-10 right-0 z-20 flex flex-col gap-y-3 py-4 rounded-md bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-zinc-500 to-gray-800 ">
      {navDropdown.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          onClick={() => setDropDown(!dropDown)}
        >
          <div className="flex items-center pl-4 gap-x-4 whitespace-nowrap ">
            <div className="flex p-1">
              <MImage src={item.icon} w={24} h={24} alt="account" />
            </div>
            <Typography
              variant="smallMedium"
              className="text-white font-normal"
            >
              {item.title}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};
