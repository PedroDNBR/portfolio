import { FC, memo } from "react";
import Position from "../Position/Position";
import SectionHeading from "../SectionHeading";
import { config } from "@/config";

type WorkXPProps = {};

const WorkXP: FC<WorkXPProps> = () => {
  return (
    <section className="section" id="workxp">
      <SectionHeading
        heading="Work XP"
        subheading="These are some of the awesome places I have been able to contribute to and make things happen"
      />
      <div className="flex flex-col gap-8">
        {config.workxp.positions.map((position, index) => (
          <Position key={index} {...position} />
        ))}
      </div>
    </section>
  );
};

export default memo(WorkXP);
