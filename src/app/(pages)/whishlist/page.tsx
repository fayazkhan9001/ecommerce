"use client";
import { SectionDiv, Typography } from "@/app/components/common";
import { SecondaryButton } from "@/app/components/form";
import { justForYouData, whishListdData } from "@/app/utils/data";
import React from "react";
import { WhishListCard } from "./WhishListCard";
import { useSelector } from "react-redux";

const WhishListPage = () => {
  const { whishList } = useSelector((a) => a.whishList);

  return (
    <>
      <section>
        <div className="resContainer ">
          <div className="sm:flex items-center justify-between py-4 sm:py-10">
            <Typography variant="bodyMedium" className="pb-3 sm:pb-0">
              WhishList ({whishList.length})
            </Typography>
            <SecondaryButton
              title="Move All To Bag"
              className="w-full sm:w-[223px]"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-x-5 lg:gap-8 xl:gap-4">
              {whishList.map((item, index) => (
                <div key={index}>
                  <WhishListCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Just Fro You section  */}

          <div className="py-10 sm:py-20">
            <div className="sm:flex justify-between items-center">
              <SectionDiv label="Just For You" />
              <SecondaryButton
                title="See All"
                className="w-full sm:w-[150px] h-[42px] sm:h-[56px] mt-4"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 sm:gap-x-5 lg:gap-8 xl:gap-4 py-3 sm:py-10">
                {justForYouData.map((item, index) => (
                  <div key={index}>
                    <WhishListCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhishListPage;
