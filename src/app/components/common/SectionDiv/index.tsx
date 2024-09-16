import { Typography } from "../Typography";

interface Props {
  label: string;
}
export const SectionDiv = ({ label }: Props): React.ReactElement => (
  <div className="flex items-center gap-x-2 sm:gap-x-4">
    <div className="w-[10px] h-[20px] sm:w-[20px] sm:h-[40px] bg-primary rounded-md"></div>
    <Typography variant="bodyBold" className="text-primary">
      {label}
    </Typography>
  </div>
);
