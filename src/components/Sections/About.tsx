import { FC, Fragment, memo } from "react";
import SectionHeading from "../SectionHeading";
import { config } from "@/config";

type AboutProps = {};

const About: FC<AboutProps> = () => {
  const renderContent = () => {
    const renderParagraph = (content: string) => {
      return (
        <p
          className="paragraph"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    };

    if (typeof config.about.content === "string") {
      return renderParagraph(config.about.content);
    }

    return config.about.content.map((item, index) => {
      return <Fragment key={index}>{renderParagraph(item)}</Fragment>;
    });
  };

  return (
    <section className="section" id="about">
      <SectionHeading heading="About me" />
      <div className="flex flex-col gap-6">{renderContent()}</div>
    </section>
  );
};

export default memo(About);
