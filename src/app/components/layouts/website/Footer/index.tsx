import { Typography } from "@/app/components/common";
import { MImage } from "@/app/components/form";

import Link from "next/link";
import React from "react";
import { VscSend } from "react-icons/vsc";
import { icons } from "../../../../../../public/icons";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { accountMenus, quickLinkMenu } from "@/app/utils/data";

interface ILink {
  name: string;
  link: string;
}

export const Footer = (): React.ReactElement => {
  return (
    <>
      <footer className="bg-secondary text-white py-10">
        <div className="resContainer">
          <ul className="flex flex-wrap gap-12 justify-between w-full">
            <li className="flex flex-col gap-y-4">
              <Typography variant="h6">Exclusive</Typography>
              <Typography variant="bodyBold">Subscribe</Typography>
              <Typography>Get 10% off your first order</Typography>
              <div className="w-[217px] h-[48px] bg-secondary placeholder:text-tertiary flex items-center border-[1px] border-white rounded-md">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full bg-secondary p-2 outline-none"
                />
                <VscSend className="text-3xl mx-2" />
              </div>
            </li>
            <li className="flex flex-col gap-y-4">
              <Typography variant="bodyBold">Support</Typography>
              <Typography>
                111 Deans trade center,
                <br /> DH 1515, Pakistan.
              </Typography>
              <Typography>exclusive@gmail.com</Typography>
              <Typography>+88015-88888-9999</Typography>
            </li>
            <li>
              <Typography variant="bodyBold" className="pb-3">
                Accoutn
              </Typography>
              <div className="flex flex-col gap-y-2">
                {accountMenus.map((item, index) => (
                  <div key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Typography variant="bodyBold" className="pb-3">
                Quick Link
              </Typography>
              <div className="flex flex-col gap-y-2">
                {quickLinkMenu.map((item, index) => (
                  <div key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex flex-col gap-y-2">
              <Typography variant="bodyBold">Download App</Typography>
              <Typography variant="bodyMedium" className="text-tertiary">
                Save $3 with App New User Only
              </Typography>
              <div className="flex gap-x-2 gap-y-4">
                <MImage
                  src={icons.qrCode}
                  alt="qrcode"
                  w={76}
                  h={76}
                  className="cursor-pointer"
                />
                <div className="flex flex-col gap-y-2">
                  <MImage
                    src={icons.googlePlay}
                    alt="googlePlay"
                    w={104}
                    h={30}
                    className="cursor-pointer"
                  />
                  <MImage
                    src={icons.appstore}
                    w={104}
                    h={34}
                    alt="app strore"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex gap-x-6 py-5">
                {socials.map((social, index) => (
                  <div key={index}>
                    <Link
                      href={social.link}
                      className="text-2xl hover:text-primary transition-all duration-500 "
                    >
                      {social.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center pt-10">
          <Typography className="text-tertiary">
            <span className="text-lg">&copy;</span> Copyright ItecXpert 2024.
            All right reserved
          </Typography>
        </div>
      </footer>
    </>
  );
};

const socials = [
  { icon: <TiSocialFacebook />, link: "#" },
  { icon: <TfiTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <RiLinkedinLine />, link: "#" },
];
