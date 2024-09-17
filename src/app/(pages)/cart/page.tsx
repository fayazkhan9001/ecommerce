"use client";
import { CartItem, CartTotal, Coupon } from "@/app/components/Cart";
import { BreadCrumb, Typography } from "@/app/components/common";
import { SecondaryButton } from "@/app/components/form";
import { cartBreadCrums } from "@/app/utils/data";
import { Key } from "react";

import { useSelector } from "react-redux";

const CartPage = (): React.ReactElement => {
  const { cart } = useSelector((state: any) => state.cart);
  console.log(cart);

  return (
    <>
      <section className="py-3 md:py-10 lg:py-16">
        <div className="resContainer">
          <div className="py-3 sm:py-5 md:pb-10 lg:pb-16 ">
            <BreadCrumb links={cartBreadCrums} />
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-0 justify-between items-center shadow-md p-4">
            <Typography>Product </Typography>
            <Typography className="pl-[104px]"> Price</Typography>
            <Typography>Quantity </Typography>
            <Typography>Subtotal </Typography>
          </div>
          {/* home cart  */}
          <div>
            {cart.map((item: any, index: Key | null | undefined) => (
              <div key={index}>
                <CartItem item={item} />
              </div>
            ))}
          </div>

          {/* Return to shop and update cart button  */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 font-medium mt-4">
            <SecondaryButton
              title="Return To Shop"
              className="w-full sm:w-[218px] "
            />
            <SecondaryButton
              title="Update Cart"
              className="w-full sm:w-[195px] "
            />
          </div>

          {/* cart total  */}

          <div className="flex flex-col lg:flex-row justify-between gap-y-4 lg:gap-y-0 lg:gap-x-16 xl:gap-x-[12rem] mt-8 lg:mt-16 w-full">
            <div className="w-full">
              <Coupon />
            </div>
            <div className="border-[1.5px] border-black rounded-sm w-full">
              <CartTotal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
