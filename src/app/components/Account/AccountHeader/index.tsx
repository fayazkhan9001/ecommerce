import React from "react";
import { BreadCrumb, Typography } from "../../common";
import { accountBreadCrums } from "@/app/utils/data";

export const AccountHeader = (): React.ReactElement => {
  return (
    <div className="resContainer py-3 sm:pt-5 md:pt-10 lg:pt-16">
      <div className="flex flex-wrap py-3 md:py-0 justify-between items-center">
        <div>
          <BreadCrumb links={accountBreadCrums} />
        </div>
        <div>
          <Typography>
            Welcome!{" "}
            <span className="text-primary py-2 sm:py-0"> Md Rimel</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};
