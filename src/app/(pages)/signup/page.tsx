import { MImage, PrimaryButton, PrimaryTextField } from "@/app/components/form";
import React from "react";
import { mImage } from "../../../../public/images";
import { Typography } from "@/app/components/common";
import { icons } from "../../../../public/icons";
import Link from "next/link";
import { routes } from "@/app/utils/const";

const SignUpPage = () => {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 ">
          <div className=" lg:py-20">
            <MImage
              src={mImage.singUpBg}
              w={805}
              h={781}
              alt="signUp"
              className="shrink-0 w-full"
            />
          </div>
          <div className=" flex justify-center items-center py-10 lg:py-0">
            <div className="w-full sm:w-auto px-6 sm:px-0 flex flex-col xl:gap-y-3">
              <Typography variant="h1" className="font-medium">
                Create an account
              </Typography>
              <Typography className="font-normal pb-2 md:pb-1 lg:pb-4">
                Enter your details below
              </Typography>
              <div className="flex flex-col gap-y-4 md:gap-y-0 lg:gap-y-4 xl:gap-y-8">
                <PrimaryTextField placeholder="Name" />
                <PrimaryTextField placeholder="Email or Phone Number" />
                <PrimaryTextField placeholder="Password" />
              </div>
              <div className="flex flex-col gap-y-5 md:gap-y-2 lg:gap-y-5 py-5 md:py-1 lg:py-5">
                <PrimaryButton
                  title="Create Account"
                  className="w-full sm:w-[371px]"
                />
                <div>
                  <button className="flex justify-center items-center gap-x-4 w-full sm:w-[371px] h-[56px] border-2 border-tertiary rounded-md">
                    <MImage src={icons.iconGoogle} w={24} h={24} alt="google" />
                    <Typography variant="bodyRegular" className="font-semibold">
                      Sign up with Google
                    </Typography>
                  </button>
                </div>
              </div>
              <Typography variant="bodyRegular">
                Already have account?
                <Link
                  href={routes.login}
                  className="borderb2 border-b-2 border-tertiary pb-1 ml-2"
                >
                  Log in
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
