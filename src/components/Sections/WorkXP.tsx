import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import Position from "../Position";

type WorkXPProps = {};

const WorkXP: FC<WorkXPProps> = () => {
  return (
    <section className="section">
      <SectionHeading
        heading="Work XP"
        subheading="These are some of the awesome places I have been able to contribute to and make things happen"
      />
      <div className="flex flex-col gap-8">
        <Position />
        <Position />
        <Position />
      </div>
    </section>
  );
};

export default memo(WorkXP);
