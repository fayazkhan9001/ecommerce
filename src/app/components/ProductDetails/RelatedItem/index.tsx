import React from "react";
import { ProductCard, SectionDiv } from "../../common";
import { relatedItemData } from "@/app/utils/data";

export const RelatedItem = (): React.ReactElement => {
  return (
    <>
      <section className="py-6 md:py-10 lg:py-20">
        <SectionDiv label="RealtedItem" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-4 sm:gap-y-0 gap-x-6 pt-5">
          {relatedItemData.map((card, index) => (
            <div key={index}>
              <ProductCard item={card} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
