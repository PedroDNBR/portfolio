import { FC, memo } from "react";

type SkillSetProps = {
  title: string;
  skills: string[];
};

const SkillSet: FC<SkillSetProps> = ({ title, skills }) => {
  return (
    <div>
      <p className="text-red-500 font-bold">{title}</p>
      <div className="mt-5 flex flex-col gap-2">
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default memo(SkillSet);
