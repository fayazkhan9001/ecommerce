import React, { InputHTMLAttributes } from "react";
import { Typography } from "../../common";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  str?: string;
}
export const PrimaryTextField = ({
  type,
  placeholder,
  label,
  className,
  str,
  ...rest
}: Props): React.ReactElement => (
  <div className="w-full">
    <Typography>
      {label} <span className="text-yellow-500">{str}</span>{" "}
    </Typography>
    <input
      type={type ?? "text"}
      className={`${className} w-full h-[38px] sm:h-[50px] py-2 px-4 bg-lightBg rounded-md outline-none my-2`}
      placeholder={placeholder}
      {...rest}
    />
  </div>
);
