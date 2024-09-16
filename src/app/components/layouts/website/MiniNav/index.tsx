import { Typography } from "@/app/components/common";
import React from "react";

export const MiniNav = (): React.ReactElement => {
  return (
    <>
      <div className="bg-black hidden lg:block">
        <div className="resContainer">
          <div className="flex justify-between items-center py-3">
            <div></div>
            <Typography
              variant="smallMedium"
              className="text-white hidden md:block"
            >
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <span className="px-3 underline cursor-pointer font-semibold">
                ShopNow
              </span>
            </Typography>
            <Typography variant="smallMedium">
              <select
                name=""
                id=""
                className="bg-secondary text-white outline-none cursor-pointer"
              >
                <option value="">English</option>
                <option value="">Arabic</option>
                <option value="">French</option>
              </select>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
