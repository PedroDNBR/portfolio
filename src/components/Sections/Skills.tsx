import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import SkillSet from "../SkillSet";
import { config } from "@/config";

type SkillsProps = {};

const Skills: FC<SkillsProps> = () => {
  return (
    <section className="section" id="skills">
      <SectionHeading heading="Skills" />

      <div className="flex flex-col gap-8 md:flex-row md:gap-32">
        {config.skills.map((skillSet, index) => (
          <SkillSet key={index} {...skillSet} />
        ))}
      </div>

      <p className="font-bold">And anything else you throw at my hands</p>
    </section>
  );
};

export default memo(Skills);
