"use client";

import { config } from "@/config";
import { FC, memo, useMemo, useState } from "react";
import { RiBriefcase2Line } from "react-icons/ri";

type SkillsProps = {
  skills: string[];
};

const maxSkills = config.workxp.maxSkillsToShow;

const Skills: FC<SkillsProps> = ({ skills }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillsString = useMemo(() => {
    if (skills.length > maxSkills && !isExpanded) {
      return (
        <span>
          {skills.slice(0, maxSkills).join(", ")} and{" "}
          <span
            className="hover:underline hover:cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            +{skills.length - maxSkills} more
          </span>
          .
        </span>
      );
    }

    return `
      ${new Intl.ListFormat("en-GB", {
        style: "long",
        type: "conjunction",
      }).format(skills)}.
    `;
  }, [skills, isExpanded]);

  return (
    <span className="flex gap-3 font-bold">
      <RiBriefcase2Line size={24} />
      {skillsString}
    </span>
  );
};

export default memo(Skills);
