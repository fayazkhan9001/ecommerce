import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placehoder: string;
  className?: string;
}

export const SecondaryTextField = ({
  type,
  placehoder,
  className,
  ...rest
}: Props): React.ReactElement => (
  <div>
    {" "}
    <input
      type={type ?? "text"}
      placeholder={placehoder}
      className={`${className} w-full h-[32px] sm:w-[370px] border-b-2 border-tertiary placeholder:text-tertiary outline-none text-[16px] font-normal leading-6 pb-2`}
      {...rest}
    />
  </div>
);
