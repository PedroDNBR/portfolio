import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import Project from "../Project";

import { config } from "@/config";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = () => {
  return (
    <section className="section" id="projects">
      <SectionHeading
        heading="Projects"
        subheading="I have independently developed several awesome projects from start to finish. Some of these include:"
      />
      <div className="grid md:grid-cols-2 gap-8">
        {config.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
