import { Typography } from "../../common";
import { PrimaryButton, PrimaryTextField, SecondaryButton } from "../../form";

export const EditYourProfile = (): React.ReactElement => {
  return (
    <div className="py-3 lg:py-20">
      <div className="shadow-lg px-3 sm:px-8 md:px-4 lg:px-16 py-3 sm:py-8">
        <Typography variant="h5" className="font-medium text-error py-3">
          Edit Your Profile
        </Typography>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between  gap-x-6 xl:gap-x-12 gap-y-3 sm:gap-y-0">
            <PrimaryTextField label="First Name" placeholder="MD" />
            <PrimaryTextField label="Last Name" placeholder="Rimel" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-x-6 xl:gap-x-12 gap-y-3 sm:gap-y-0">
            <PrimaryTextField label="Email" placeholder="rimel1111@gmail.com" />
            <PrimaryTextField
              label="Address"
              placeholder="rimel1111@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <PrimaryTextField
              label="Password Changes"
              placeholder="Current Passwod"
            />
            <PrimaryTextField placeholder="New Passwod" />
            <PrimaryTextField placeholder="Confirm New Passwod" />
          </div>
          <div>
            <div className="flex items-center justify-end gap-x-3 py-2">
              <SecondaryButton
                title="Cancel"
                className="w-[100px] !border-none font-bold"
              />
              <PrimaryButton title="Save Changes" className="w-[214px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
