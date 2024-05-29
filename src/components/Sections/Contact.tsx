import { FC, memo } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

type ContactProps = {};

const Contact: FC<ContactProps> = () => {
  return (
    <section className="section">
      <SectionHeading heading="Let's talk" />
      <p className="paragraph">
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec.`}
      </p>
      <div className="flex gap-8 items-center">
        <Button asChild endIcon={RiArrowRightLine}>
          <Link href="mailto:pedrogoantunes@gmail.com">{`Let's talk`}</Link>
        </Button>
        <span>
          Or hit me up at:{" "}
          <a className="link" href="https://www.linkedin.com/in/pedrodnbr/">
            LinkedIn
          </a>{" "}
          /{" "}
          <a className="link" href="https://www.linkedin.com/in/pedrodnbr/">
            GitHub
          </a>{" "}
          /{" "}
          <a className="link" href="https://www.linkedin.com/in/pedrodnbr/">
            Game Jolt
          </a>
          .
        </span>
      </div>
    </section>
  );
};

export default memo(Contact);
