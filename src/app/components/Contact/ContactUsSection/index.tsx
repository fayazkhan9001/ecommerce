import React from "react";
import { BsTelephone } from "react-icons/bs";
import { Typography } from "../../common";
import { MdOutlineEmail } from "react-icons/md";

export const ContactUsSection = (): React.ReactElement => {
  return (
    <>
      <section className="shadow-md px-4 sm:px-8 py-4 sm:py-6 flex flex-col md:flex-row lg:flex-col md:justify-between  w-full">
        <div className="flex flex-col gap-y-4 py-3">
          <div className="flex items-center gap-x-3">
            <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-error text-white">
              <BsTelephone className="text-xl" />
            </div>
            <Typography variant="bodyMedium">Call To Us</Typography>
          </div>
          <Typography variant="smallRegular" className="whitespace-nowrap">
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography variant="smallRegular">Phone: +8801611112222</Typography>
        </div>

        <hr className="border-[1px] block md:hidden lg:block" />

        <span className="border-l-2 hidden md:block lg:hidden"></span>

        <div className="flex flex-col gap-y-4 py-3">
          <div className="flex items-center gap-x-3">
            <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-error text-white">
              <MdOutlineEmail className="text-xl" />
            </div>

            <Typography variant="bodyMedium">Write To US</Typography>
          </div>
          <Typography variant="smallRegular">
            Fill out our form and we will contact <br /> you within 24 hours.
          </Typography>
          <Typography variant="smallRegular">
            Emails: customer@exclusive.com
          </Typography>
          <Typography variant="smallRegular">
            Emails: support@exclusive.com
          </Typography>
        </div>
      </section>
    </>
  );
};
