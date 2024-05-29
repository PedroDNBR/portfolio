import { FC, ReactNode, memo, useMemo } from "react";
import { RiBriefcase2Line } from "react-icons/ri";
import Responsability from "./Sections/Responsability";

type PositionProps = {
  company: string;
  position: string;
  description: string;
  responsabilities: string[];
  skills: string[];
  startDate: string;
  endDate: string;
};

const maxSkills = 4;

const Position: FC<PositionProps> = ({
  company,
  position,
  description,
  responsabilities,
  skills,
  startDate,
  endDate,
}) => {
  const skillsString = useMemo(() => {
    if (skills.length > maxSkills) {
      return `${skills.slice(0, maxSkills).join(", ")} and +${
        skills.length - maxSkills
      } more.`;
    }

    return new Intl.ListFormat("en-GB", {
      style: "long",
      type: "conjunction",
    }).format(skills);
  }, [skills]);

  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-lg block">
        <span className="text-red-500">{company}</span> — {position}
      </span>
      <div className="relative">
        <p className="paragraph">{description}</p>
        {/* <a
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(21,23,24,1) 20%);",
          }}
          className="link absolute bottom-0 right-0 leading-7 pl-8"
        >
          Read more
        </a> */}
        <ul className="list-none mt-4 flex flex-col gap-3">
          {responsabilities.map((responsability, index) => (
            <Responsability key={index}>{responsability}</Responsability>
          ))}
        </ul>
      </div>
      <span className="flex gap-3 font-bold">
        <RiBriefcase2Line size={24} />
        {skillsString}
      </span>
      <span className="text-zinc-500 font-medium">
        {startDate} - {endDate}
      </span>
    </div>
  );
};

export default memo(Position);
