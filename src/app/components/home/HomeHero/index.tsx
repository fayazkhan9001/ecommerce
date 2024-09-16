import React from "react";
import { Typography } from "../../common";
import Link from "next/link";
import HomeHeroSlider from "../HomeHeroSlider";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = (): React.ReactElement => {
  return (
    <>
      <section>
        <div className="resContainer">
          <div className="flex flex-col lg:flex-row lg:gap-x-8">
            <Typography variant="bodyBold" className="pt-3 lg:hidden">
              categories :{" "}
            </Typography>
            <ul className=" lg:w-[240px] sm:px-4 lg:pt-8 py-3 lg:py-0 flex flex-row lg:flex-col gap-y-3 lg:border-r-2 overflow-x-auto lg:overscroll-x-none">
              {homeHeroLinks.map((item, index) => (
                <li
                  key={index}
                  className="bg-primary text-white mx-1 py-1 rounded-md lg:bg-transparent lg:text-secondary lg:mx-0 lg:py-0 lg:rounded-none"
                >
                  <Link
                    href={item.link}
                    className="flex whitespace-nowrap px-2 items-center justify-between"
                  >
                    <Typography className="px-2 lg:px">{item.title}</Typography>
                    <span className="text-xl">{item.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <HomeHeroSlider />
          </div>
        </div>
      </section>
    </>
  );
};

const homeHeroLinks = [
  {
    title: "Woman’s Fashion",
    icon: <MdOutlineKeyboardArrowRight />,
    link: "#",
  },
  { title: "Men’s Fashion", icon: <MdOutlineKeyboardArrowRight />, link: "#" },
  { title: "Electronics", link: "#" },
  { title: "Home & Lifestyle", link: "#" },
  { title: "Medicine", link: "#" },
  { title: "Sports & Outdoor", link: "#" },
  { title: "Baby’s & Toys", link: "#" },
  { title: "Groceries & Pets", link: "#" },
  { title: "Health & Beauty", link: "#" },
];
