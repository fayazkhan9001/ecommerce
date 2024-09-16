import { mImage } from "../../../../public/images";
import { Typography } from "../common";
import { MImage, PrimaryButton, RadioButton } from "../form";
import { monyMehtod } from "@/app/utils/data";
import Link from "next/link";
import { Coupon } from "../Cart";

export const BillingTotal = (): React.ReactElement => {
  return (
    <div className=" pt-10 md:pt-16 lg:pt-24 ">
      <div className="flex flex-col gap-y-4 sm:gap-y-8 md:pr-[4rem] lg:pr-0 xl:pr-[5rem]">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-x-4">
            <MImage src={mImage.product1} w={54} h={54} alt="lcd" />
            <Typography>LCD Monitor</Typography>
          </div>
          <Typography>$650</Typography>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-x-4">
            <MImage src={mImage.product3} w={54} h={54} alt="lcd" />
            <Typography>H1 Gamepad</Typography>
          </div>
          <Typography>$1100</Typography>
        </div>

        {/* billing total details  */}
        <div>
          <div>
            {billingData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b-2 last:border-none"
              >
                <Typography>{item.name}</Typography>
                <Typography>{item.value}</Typography>
              </div>
            ))}
          </div>

          {/* Cash Method  */}
          <div className="flex justify-between items-start flex-col-reverse md:flex-row lg:flex-row xl:flex-row  sm:py-4 ">
            <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full ">
              <div className="checkoutRadio flex items-center gap-x-3">
                <input
                  type="radio"
                  name="method"
                  id=""
                  className="w-4 sm:w-6 h-4 sm:h-6 bg-black"
                />
                <Typography>Bank</Typography>
              </div>
              <div className="checkoutRadio flex items-center gap-x-3">
                <input
                  type="radio"
                  name="method"
                  id=""
                  className="w-4 sm:w-6 h-4 sm:h-6"
                />
                <Typography>Cash on delivery</Typography>
              </div>
            </div>
            <div className="flex items-center gap-x-10 sm:gap-x-5 md:mt-0 xl:mt-0 pb-5 md:pb-0 w-full justify-evenly md:justify-end order-1 lg:order-2 ">
              {monyMehtod.map((item, index) => (
                <div key={index}>
                  <Link href={"#"}>
                    <MImage src={item.method} w={42} h={28} alt="method" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Coupon form  */}
      <div className=" pt-2 sm:py-4">
        <Coupon />
      </div>

      {/* place order button  */}
      <div className="pb-7 sm:py-4">
        <PrimaryButton title="Place Order" className="w-full sm:w-[190px]" />
      </div>
    </div>
  );
};

const billingData = [
  { name: "Subtotal:", value: "$1750" },
  { name: "Shipping:", value: "Free" },
  { name: "Total:", value: "$1750" },
];
