import React, { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  className: string;
}

export const SecondaryButton = ({
  title,
  className,
  ...rest
}: Props): React.ReactElement => (
  <button
    className={`${className} h-[42px] sm:h-[56px] border-2 border-tertiary rounded-md hover:bg-secondary/5 transition-all duration-500`}
  >
    {title}
  </button>
);
