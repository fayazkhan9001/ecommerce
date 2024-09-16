import React from "react";
import { SectionDiv } from "../../common/SectionDiv";
import FlashSalesSlider from "../FlashSaleSlider";

export const FlashSales = (): React.ReactElement => {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-20">
        <div className="resContainer">
          <SectionDiv label={"Today's"} />
          <FlashSalesSlider />
        </div>
      </section>
    </>
  );
};
