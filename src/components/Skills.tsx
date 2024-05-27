import { FC, memo } from "react";
import SectionHeading from "./SectionHeading";

type SkillsProps = {};

const Skills: FC<SkillsProps> = () => {
  return (
    <section>
      <SectionHeading heading="Skills" />
    </section>
  );
};

export default memo(Skills);
