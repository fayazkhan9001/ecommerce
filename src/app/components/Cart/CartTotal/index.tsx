import Link from "next/link";
import { Typography } from "../../common";
import { PrimaryButton } from "../../form";
import { routes } from "@/app/utils/const";

import React from "react";

export const CartTotal = (): React.ReactElement => {
  return (
    <div className="w-full">
      <div className="  w-full sm:mt-8 lg:mt-0 p-6 lg:p-3 xl:p-6 rounded-md">
        <Typography variant="h5" className="font-normal">
          Cart Totoal
        </Typography>
        <div>
          {cartTotal.map((item, index) => (
            <div key={index} className="border-b last:border-0">
              <div className="flex justify-between items-center gap-x-20 py-3">
                <Typography>{item.name}:</Typography>
                <Typography>{item.value}</Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link href={routes.checkout}>
            <PrimaryButton
              title="Procees to checkout"
              className="w-[220px] sm:w-[260px] "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const cartTotal = [
  { name: "Subtotal", value: "$1740" },
  { name: "Shipping", value: "free" },
  { name: "Total", value: "$1740" },
];
