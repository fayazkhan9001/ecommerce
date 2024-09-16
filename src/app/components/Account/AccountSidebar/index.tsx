"use client";
import { myAccountNav } from "@/app/utils/data";
import Link from "next/link";
import React from "react";
import { Typography } from "../../common";
import { usePathname } from "next/navigation";

export const AccountSidebar = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <div>
      <div className=" w-full py-3 md:py-6 lg:py-10 xl:pt-16">
        {myAccountNav.map((item, index) => (
          <div key={index} className="sm:py-2">
            <Link href={item.link}>
              <Typography variant="bodyMedium" className="font-bold">
                {item.title}
              </Typography>
            </Link>
            {item.subNav && (
              <div className="py-1">
                {item.subNav.map((subMenu, index) => {
                  const active = subMenu.link === pathname;
                  return (
                    <li
                      key={index}
                      className={`${active ? "text-error" : "text-tertiary"} hover:text-error transition-all duration-300 py-1 pl-8 md:pl-4 lg:pl-8 list-none`}
                    >
                      <Link href={subMenu.link}>
                        <Typography className={` font-normal `}>
                          {subMenu.title}
                        </Typography>
                      </Link>
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
