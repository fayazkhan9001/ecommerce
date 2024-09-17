import React from "react";
import { useTimer } from "react-timer-hook";
import { Typography } from "../../common";

// Define the props type
interface HomeTimerProps {
  expiryTimestamp: Date;
}

export default function HomeTimer({ expiryTimestamp }: HomeTimerProps) {
  const { totalSeconds, seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div className="flex items-center gap-x-3 md:gap-x-8">
        <div className="flex flex-col">
          <Typography variant="smallMedium">Days</Typography>
          <div className="flex items-center">
            <Typography variant="h2" className="">
              {days}
            </Typography>
            <span className="text-primary text-xl font-bold pl-5">:</span>
          </div>
        </div>

        <div className="flex flex-col">
          <Typography variant="smallMedium">Hours</Typography>
          <div className="flex items-center">
            <Typography variant="h2" className="">
              {hours}
            </Typography>
            <span className="text-primary text-xl font-bold pl-5">:</span>
          </div>
        </div>

        <div className="flex flex-col">
          <Typography variant="smallMedium">Minutes</Typography>
          <div className="flex justify-center">
            <Typography variant="h2" className="">
              {minutes}
            </Typography>
            <span className="text-primary text-xl font-bold pl-5">:</span>
          </div>
        </div>

        <div className="flex flex-col">
          <Typography variant="smallMedium">Seconds</Typography>
          <Typography variant="h2">{seconds}</Typography>
        </div>
      </div>
    </div>
  );
}
