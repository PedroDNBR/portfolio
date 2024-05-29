import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import { config } from "@/config";

type AboutProps = {};

const About: FC<AboutProps> = () => {
  return (
    <section className="section" id="about">
      <SectionHeading heading="About me" />
      <div className="flex flex-col gap-6">{config.about.content}</div>
    </section>
  );
};

export default memo(About);
