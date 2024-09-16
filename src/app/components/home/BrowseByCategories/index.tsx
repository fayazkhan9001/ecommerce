import React from "react";
import { SectionDiv } from "../../common/SectionDiv";
import BrowseByCategSlider from "../BrowseByCategSlider";

export const BrowseByCategories = (): React.ReactElement => {
  return (
    <>
      <section>
        <div className="resContainer">
          <div>
            <SectionDiv label="Categories" />
            <BrowseByCategSlider />
          </div>
        </div>
      </section>
    </>
  );
};
