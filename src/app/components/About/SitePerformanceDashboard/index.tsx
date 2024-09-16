"use client";
import { sitePerformanceDashboardData } from "@/app/utils/data";
import React, { useState } from "react";
import { MImage } from "../../form";
import { Typography } from "../../common";

export const SitePerformanceDashboard = (): React.ReactElement => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="resContainer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sitePerformanceDashboardData.map((item, index) => (
              <div key={index}>
                <li
                  className="flex flex-col justify-center items-center gap-y-3 border-2 border-[#C1C0C1] rounded-sm py-5 transition-all duration-500 group hover:bg-error"
                  onMouseOver={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex flex-col border-8 border-[#C1C0C1] group-hover:border-[#F2A6B4] rounded-full group transition-all duration-500">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-black group-hover:bg-white transition-all duration-500 ">
                      <MImage
                        src={hovered === index ? item.Icon2 : item.icon}
                        w={40}
                        h={40}
                        alt="icon-dashboard"
                      />
                    </div>
                  </div>
                  <Typography
                    variant="h2"
                    className="group-hover:text-white transition-all duration-500"
                  >
                    {item.data}
                  </Typography>
                  <Typography className="group-hover:text-white transition-all duration-500">
                    {item.description}
                  </Typography>
                </li>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
