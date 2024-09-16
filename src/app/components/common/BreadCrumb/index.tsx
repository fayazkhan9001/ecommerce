import React from "react";
import { IBreadCrumb } from "@/app/utils/data";
import Link from "next/link";
import { Typography } from "../Typography";
import { RxSlash } from "react-icons/rx";

interface IBreadCrumbcom {
  links: IBreadCrumb[];
  variant?: "tertiary" | "black";
}

export const BreadCrumb = ({
  links,
  variant = "tertiary",
}: IBreadCrumbcom): React.ReactElement => (
  <div className="flex flex-wrap gap-1 items-center">
    {links.map((link, index) => (
      <>
        <Link key={index} href={link.path}>
          <Typography
            className={`${variant === "tertiary" ? "text-tertiary" : "text-secondary"}`}
          >
            {link.name}
          </Typography>
        </Link>
        {index + 1 !== links.length && (
          <RxSlash
            key={index}
            className={`text-2xl ${variant === "tertiary" ? "text-tertiary" : "text-secondary"}`}
          />
        )}
      </>
    ))}
  </div>
);
