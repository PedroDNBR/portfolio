import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import SkillSet from "../SkillSet";

type SkillsProps = {};

const Skills: FC<SkillsProps> = () => {
  return (
    <section className="section" id="skills">
      <SectionHeading heading="Skills" />

      <div className="flex gap-32">
        <SkillSet
          title="Languages"
          skills={["C", "C++", "C#", "Python", "JavaScript", "PHP"]}
        />
        <SkillSet
          title="Engines/Frameworks"
          skills={[
            "Unity",
            "Unreal Engine 5",
            "Node.js",
            "React.js",
            "Laravel",
          ]}
        />
        <SkillSet
          title="Tools"
          skills={[
            "Git and GitHub / BitBucket / GitLab",
            "Photoshop",
            "Blender",
          ]}
        />
      </div>

      <p className="font-bold">And anything else you throw at my hands</p>
    </section>
  );
};

export default memo(Skills);
