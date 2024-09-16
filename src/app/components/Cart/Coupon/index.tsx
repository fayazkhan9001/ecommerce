import React from "react";
import { PrimaryButton } from "../../form";

export const Coupon = (): React.ReactElement => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-x-3 w-full">
        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full xl:w-[300px] h-[42px] sm:h-[56px] border-[1px] border-secondary rounded-md outline-none placeholder:text-tertiary px-4"
        />
        <PrimaryButton
          title="Apply Coupon"
          className="w-full sm:w-[211px] h-[42px] sm:h-[56px] my-3 sm:my-0"
        />
      </div>
    </div>
  );
};
