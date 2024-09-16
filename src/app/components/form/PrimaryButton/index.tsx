import { ButtonProps } from "@headlessui/react";
import React from "react";
import { Typography } from "../../common";

interface Props extends ButtonProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

export const PrimaryButton = ({
  icon,
  title,
  className,
  ...rest
}: Props): React.ReactElement => (
  <button
    className={`${className} ${rest} h-[42px] sm:h-[56px] flex justify-center items-center bg-primary hover:bg-hoverButton text-white rounded-md transition-all duration-500`}
  >
    <Typography variant="bodyMedium"> {title}</Typography>
  </button>
);
