import {
  MImage,
  PrimaryButton,
  SecondaryTextField,
} from "@/app/components/form";
import React from "react";
import { mImage } from "../../../../public/images";
import { Typography } from "@/app/components/common";
import { icons } from "../../../../public/icons";
import Link from "next/link";

const LogInPage = (): React.ReactElement => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 justify-between items-center">
          <div className="md:py-20">
            <MImage
              src={mImage.singUpBg}
              w={805}
              h={781}
              alt="signUp"
              className="w-full shrink-0"
            />
          </div>
          <div className="flex justify-center items-center py-10 ">
            <div className="w-full sm:w-auto px-8 sm:px-0 flex flex-col gap-y-3">
              <Typography variant="h1" className="font-normal">
                Log in to Exclusive
              </Typography>
              <Typography className="font-normal pb-6">
                Enter your details below
              </Typography>
              <div className="flex flex-col gap-y-8">
                <SecondaryTextField placehoder="Email or Phone Number" />
                <SecondaryTextField placehoder="Password" />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center py-6">
                <div className="flex flex-col gap-y-5 py-5">
                  <PrimaryButton title="Log In" className="w-[143px]" />
                </div>
                <Link href={"#"}>
                  <Typography
                    variant="bodyRegular"
                    className="text-primary w-full"
                  >
                    Forget Password?
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInPage;
