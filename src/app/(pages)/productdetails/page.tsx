import { BreadCrumb, SectionDiv } from "@/app/components/common";
import {
  ProductImageSlider,
  RelatedItem,
} from "@/app/components/ProductDetails";
import { SingleProductDetail } from "@/app/components/ProductDetails/SingleProductDetail";
import { productDetailsBreadCrums } from "@/app/utils/data";
import React from "react";

const ProductDetailsPage = (): React.ReactElement => {
  return (
    <>
      <section className="py-4 md:py-10 lg:pt-16 lg:pb-20">
        <div className="resContainer">
          <div className="py-3 sm:py-5 md:pb-10 lg:pb-16">
            <BreadCrumb links={productDetailsBreadCrums} />
          </div>
          <div className="w-full lg:flex justify-between gap-x-6">
            <ProductImageSlider />
            <SingleProductDetail />
          </div>
          <RelatedItem />
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
