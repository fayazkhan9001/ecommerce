"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { BsCheck2 } from "react-icons/bs";

export const CheckBox = (): React.ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  return (
    <div
      className="w-6 h-6 bg-error rounded-md flex justify-center items-center cursor-pointer"
      onClick={() => setIsChecked((prev) => !prev)}
    >
      {isChecked ? <BsCheck2 className="text-white font-bold" /> : null}
    </div>
  );
};
