"use client";

import {
  AccountDropdown,
  NavSearchModal,
  Typography,
} from "@/app/components/common";
import { routes } from "@/app/utils/const";
import { menus } from "@/app/utils/data";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";

export const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const pathname = usePathname();
  const { cart } = useSelector((b) => b.cart);
  const { whishList } = useSelector((a) => a.whishList);

  return (
    <>
      <nav className=" sm:py-4 mt-3">
        <div className="resContainer">
          <div className="flex items-center justify-between h-[50px] md:h-auto">
            <Typography variant="h5" className="hidden lg:block">
              Exclusive
            </Typography>
            <RxHamburgerMenu
              className="text-2xl cursor-pointer block lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />

            <ul
              className={`flex flex-col lg:flex-row lg:w-auto bg-primary lg:bg-transparent h-screen lg:h-full fixed top-0 left-0 lg:relative items-center text-white lg:text-secondary lg:justify-center pt-28 lg:pt-0 lg:gap-x-8 xl:gap-x-12 gap-y-8 lg:gap-y-0 transition-all duration-500 ease-in-out z-50 ${
                isOpen
                  ? "translate-x-0  w-[260px] visible opacity-100"
                  : "-translate-x-100 w-0 invisible opacity-0 lg:visible lg:opacity-100 lg:w-auto"
              } `}
            >
              <Typography
                variant="h4"
                className="absolute top-2 left-2 p-4 lg:hidden"
              >
                Exclusive
              </Typography>

              {menus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.path} onClick={() => setIsOpen(false)}>
                    <Typography className="hover:border-b-2">
                      {menu.title}
                    </Typography>
                  </Link>
                </li>
              ))}

              <IoCloseCircleOutline
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl lg:hidden"
              />
            </ul>

            <div className="flex items-center justify-between gap-x-2 md:gap-x-4 ">
              <div className="flex items-center sm:hidden">
                <div className="flex items-center relative rounded-lg bg-[#F5F5F5]">
                  {isOpenSearch ? <NavSearchModal setIsOpen={setIsOpen} /> : ""}
                </div>
                <CiSearch
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsOpenSearch((prev) => !prev)}
                />
              </div>

              <div className="hidden sm:flex items-center relative rounded-md bg-[#F5F5F5]">
                <input
                  type="text"
                  className={`w-[220px] bg-[#F5F5F5] p-2 placeholder:text-tertiary placeholder:text-sm rounded-md outline-none `}
                  placeholder="What are you looking for ?"
                />
                <CiSearch className="text-2xl mx-2 cursor-pointer" />
              </div>

              <div className="relative">
                {
                  <span className="absolute bottom-3 left-3 w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[12px]">
                    {whishList.length}
                  </span>
                }
                <Link href={routes.whishlist}>
                  <IoMdHeartEmpty
                    className={`text-xl cursor-pointer ${
                      heart ? "text-primary" : "bg-transparent"
                    }`}
                    onClick={() => setHeart((prev) => !prev)}
                  />
                </Link>
              </div>
              <div className="relative">
                <span className="absolute bottom-3 left-3 w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[12px]">
                  {cart.length}
                </span>
                <Link href={routes.cart}>
                  {" "}
                  <IoCartOutline className="text-xl cursor-pointer" />
                </Link>
              </div>
              <div>
                {pathname === routes.singup ? (
                  <div className="relative">
                    <div className=" cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500">
                      <FiUser
                        className="text-xl"
                        onClick={() => setDropDown((prev) => !prev)}
                      />
                    </div>
                    {dropDown ? (
                      <AccountDropdown
                        dropDown={dropDown}
                        setDropDown={setDropDown}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};
