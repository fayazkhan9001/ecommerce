import { PrimaryButton, PrimaryTextField, TextAreaField } from "../../form";

export const ContactForm = (): React.ReactElement => {
  return (
    <>
      <form className="shadow-md p-4 sm:p-8 w-full">
        <div className="md:flex gap-x-4">
          <PrimaryTextField placeholder="Your Name * " />
          <PrimaryTextField placeholder="Your Email * " />
          <PrimaryTextField placeholder="Your Email * " />
        </div>
        <div className="mt-3 lg:mt-6">
          <TextAreaField rows={5} placeholder="Your Message" />
        </div>
        <div className="flex justify-end pt-5">
          <PrimaryButton
            title="Send Massage"
            className="w-full sm:!w-[215px]"
          />
        </div>
      </form>
    </>
  );
};
