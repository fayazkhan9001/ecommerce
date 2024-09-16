import React, { useState } from "react";
import { MImage } from "../../form";
import { Typography } from "../../common";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const CartItem = ({ item }: any): React.ReactElement => {
  let [qty, setQty] = useState<number>(0);

  const decreaseQty = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-wrap gap-6  sm:gap-0 justify-between items-center p-4 shadow-md my-8">
        <div className="flex items-center gap-x-2">
          <MImage
            src={item.image}
            w={54}
            h={54}
            alt="product"
            className="object-scale-down"
          />
          <Typography>{item.title}</Typography>
        </div>
        <Typography className="">{item.newPrice}</Typography>
        <div className="w-[72px] h-[44px] border-[1px] border-tertiary rounded-md flex justify-between items-center p-3">
          <span className="">{qty}</span>
          <span>
            <MdKeyboardArrowUp
              className="cursor-pointer"
              onClick={() => setQty(++qty)}
            />
            <MdKeyboardArrowDown
              className="cursor-pointer"
              onClick={() => {
                decreaseQty();
              }}
            />
          </span>
        </div>
        <Typography>$000000</Typography>
      </div>
    </div>
  );
};
