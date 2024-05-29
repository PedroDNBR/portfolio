import { FC, memo } from "react";
import Skills from "./Skills";
import Description from "./Description";
import { Position as PositionType } from "@/types/position";

type PositionProps = PositionType;

const Position: FC<PositionProps> = ({
  company,
  position,
  description,
  responsabilities,
  skills,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-lg block">
        <span className="text-red-500">{company}</span> — {position}
      </span>
      <div className="flex flex-col gap-4">
        <Description
          description={description}
          responsabilities={responsabilities}
        />
        <Skills skills={skills} />
      </div>
      <span className="text-zinc-500 font-medium">
        {startDate} - {endDate}
      </span>
    </div>
  );
};

export default memo(Position);
