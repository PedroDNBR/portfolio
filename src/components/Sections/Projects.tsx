import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import Project from "../Project";

import theTowerOfGolem from "../../../public/images/projects/ttog/ttog_menu.png";
import whacAMole from "../../../public/images/projects/wam/wam_menu.png";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = () => {
  return (
    <section className="section">
      <SectionHeading
        heading="Projects"
        subheading="These are some of the awesome places I have been able to contribute to and make things happen"
      />

      <div className="grid grid-cols-2 gap-8">
        <Project
          title="The Tower of Golem"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec."
          image={theTowerOfGolem}
        />
        <Project
          title="Whac a Mole"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec."
          image={whacAMole}
        />
      </div>
    </section>
  );
};

export default memo(Projects);
