import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";

type AboutProps = {};

const About: FC<AboutProps> = () => {
  return (
    <section className="section" id="about">
      <SectionHeading heading="About me" />
      <div className="flex flex-col gap-6">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris eros,
          <strong>scelerisque nec facilisis</strong> ut, vestibulum sit amet
          dui. Integer magna elit, eleifend bibendum tincidunt in, tristique
          eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce quis lacus ultrices, fringilla dolor nec, hendrerit mi.
        </p>
        <p className="paragraph">
          Maecenas iaculis tempor tortor a venenatis. Etiam{" "}
          <strong>gravida</strong> mi porttitor diam ultrices malesuada.
          Phasellus convallis, dolor eget venenatis cursus, turpis erat auctor
          metus, at tincidunt
        </p>
      </div>
    </section>
  );
};

export default memo(About);
