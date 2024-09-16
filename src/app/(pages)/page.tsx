import React from "react";

import {
  BestSellingProducts,
  BrowseByCategories,
  ExploreOurProducts,
  FeaturesBlock,
  HomeHero,
  HomeServices,
} from "../components/home";
import { FlashSales } from "../components/home/FlashSales";

const HomePage = () => {
  return (
    <>
      <div>
        <HomeHero />
        <FlashSales />
        <BrowseByCategories />
        <BestSellingProducts />
        <ExploreOurProducts />
        <FeaturesBlock />
        <HomeServices />
      </div>
    </>
  );
};

export default HomePage;
