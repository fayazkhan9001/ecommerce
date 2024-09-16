import React from "react";

interface ITextArea {
  type?: string;
  rows: number;
  className?: string;
  placeholder: string;
}

export const TextAreaField = ({
  type,
  rows = 5,
  className,
  placeholder,
  ...rest
}: ITextArea): React.ReactElement => (
  <div className={`flex-1 ${className}`}>
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="w-full bg-lightBg px-4 py-3 rounded-md focus:outline-none resize-none"
      {...rest}
    />
  </div>
);
