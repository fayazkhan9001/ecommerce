import { BreadCrumb } from "@/app/components/common";
import { ContactForm, ContactUsSection } from "@/app/components/Contact";
import { contactBreadCrums } from "@/app/utils/data";
import React from "react";

const ContactPage = (): React.ReactElement => {
  return (
    <>
      <section className="py-3 sm:py-10 lg:pt-16 lg:pb-20">
        <div className="resContainer">
          <div className="py-3 sm:pb-8 md:pb-10 lg:pb-20">
            <BreadCrumb links={contactBreadCrums} />
          </div>
          <div className="lg:flex gap-x-8">
            <div className="w-full lg:w-[40%] xl:w-[30%]">
              <ContactUsSection />
            </div>
            <div className="w-full lg:w-[60%] xl:w-[70%] pt-6 sm:pt-10 lg:pt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
