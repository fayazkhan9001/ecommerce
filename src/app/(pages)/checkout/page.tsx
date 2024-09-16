"use client";
import { BillingTotal } from "@/app/components/BillingTotal";
import { CartTotal } from "@/app/components/Cart";
import { BreadCrumb, Typography } from "@/app/components/common";
import { CheckBox, PrimaryTextField } from "@/app/components/form";
import { checkOutBreadCrums } from "@/app/utils/data";
import React from "react";

const CheckOutPage = (): React.ReactElement => {
  return (
    <>
      <section className="py-5 md:py-10 lg:py-20">
        <div className="resContainer">
          <div className="py-2 md:pb-10 lg:pb-16 xl:pb-20">
            <BreadCrumb links={checkOutBreadCrums} />
          </div>
          <div className="lg:flex lg:gap-x-[8rem] xl:gap-x-[12rem] justify-between ">
            <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full">
              <Typography variant="h2" className="font-medium py-3">
                Billing Details
              </Typography>
              <PrimaryTextField label="First Name" str="*" />
              <PrimaryTextField label="Company Name" />
              <PrimaryTextField label="Street Address" str="*" />
              <PrimaryTextField label="Apartment, floor, etc. (optional)" />
              <PrimaryTextField label="Town/City" str="*" />
              <PrimaryTextField label="Phone Number" str="*" />
              <PrimaryTextField label="Email Address" str="*" />
              <div className="flex items-center gap-x-3">
                <CheckBox />
                <Typography>
                  Save this information for faster check-out next time
                </Typography>
              </div>
            </div>

            {/* billing total  */}
            <div className="w-full">
              <BillingTotal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
