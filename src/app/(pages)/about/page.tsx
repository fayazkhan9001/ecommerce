import {
  AboutHero,
  InnovatorHubSlider,
  SitePerformanceDashboard,
} from "@/app/components/About";
import { HomeServices } from "@/app/components/home";
import React from "react";

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <section>
        <div>
          <div>
            <AboutHero />
            <SitePerformanceDashboard />
            <InnovatorHubSlider />
            <HomeServices />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
