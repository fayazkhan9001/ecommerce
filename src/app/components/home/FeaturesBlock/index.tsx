import React from "react";
import { SectionDiv } from "../../common/SectionDiv";
import { Typography } from "../../common";
import { MImage } from "../../form";
import { mImage } from "../../../../../public/images";

export const FeaturesBlock = (): React.ReactElement => {
  return (
    <>
      <section className="pt-10 pb-4 sm:py-10 lg:py-20">
        <div className="resContainer">
          <SectionDiv label="Feature" />
          <Typography variant="h1" className="font-semibold pt-3 sm:pt-4">
            New Arrival
          </Typography>
          <div className=" w-full flex flex-col md:flex-row gap-y-4 gap-x-6 py-4 sm:py-10">
            <div className="bg-secondary relative w-full flex justify-center items-end">
              <MImage
                src={mImage.feature1Speaker}
                w={511}
                h={511}
                alt="speaker"
                className="shrink-0"
              />
              <div className="text-white absolute bottom-4 xl:bottom-6 left-2 md:left-6 flex flex-col gap-y-1 lg:gap-y-4">
                <Typography variant="h3" className="font-semibold">
                  PlayStation 5
                </Typography>
                <Typography>
                  Black and White version of the PS5 <br /> coming out on sale.
                </Typography>
                <Typography className="underline underline-offset-8">
                  Shop Now
                </Typography>
              </div>
            </div>
            <div className=" relative flex flex-col gap-y-4 w-full">
              <div className="bg-secondary  relative flex justify-end">
                <MImage src={mImage.feature2Girl} w={432} h={286} alt="girl" />
                <div className="text-white flex flex-col justify-center absolute bottom-4 xl:bottom-6 left-2 md:left-6  gap-y-1 lg:gap-y-4">
                  <Typography variant="h3" className="font-semibold">
                    Women’s Collections
                  </Typography>
                  <Typography variant="smallRegular">
                    Featured woman collections that <br /> give you another
                    vibe.
                  </Typography>
                  <Typography className="underline underline-offset-8">
                    Shop Now
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-4 lg:gap-y-0 gap-x-4">
                <div className="relative bg-secondary w-full flex flex-col justify-center items-center p-6">
                  {" "}
                  <MImage
                    src={mImage.feature3Speaker}
                    w={190}
                    h={221}
                    alt="speaker"
                  />
                  <div className="text-white flex flex-col gap-y-1 absolute bottom-4 xl:bottom-6 left-2 md:left-6">
                    <Typography variant="h3" className="font-semibold">
                      Speakers
                    </Typography>
                    <Typography>Amazon wireless speakers</Typography>
                    <Typography className="underline underline-offset-8">
                      {" "}
                      Shop Now
                    </Typography>
                  </div>
                </div>
                <div className="relative bg-secondary w-full flex flex-col justify-center items-center p-6">
                  <MImage
                    src={mImage.feature4Perfume}
                    w={201}
                    h={203}
                    alt="perfume"
                  />
                  <div className="text-white flex flex-col gap-y-1 absolute left-2 md:left-6 bottom-4 xl:bottom-6">
                    <Typography variant="h3" className="font-semibold">
                      Perfume
                    </Typography>
                    <Typography>GUCCI INTENSE OUD EDP</Typography>
                    <Typography className="underline underline-offset-8">
                      {" "}
                      Shop Now
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
