import { FC, Fragment, memo } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { config } from "@/config";

type ContactProps = {};

const Contact: FC<ContactProps> = () => {
  return (
    <section className="section" id="contact">
      <SectionHeading heading="Let's talk" />
      <p className="paragraph">{config.contact.description}</p>
      <div className="flex gap-8 items-center">
        <Button asChild endIcon={RiArrowRightLine}>
          <Link href={`mailto:${config.contact.email}`}>{`Let's talk`}</Link>
        </Button>
        <span>
          Or hit me up at:{" "}
          {config.contact.socials.map((social, index) => {
            const isLast = index === config.contact.socials.length - 1;
            return (
              <Fragment key={index}>
                <a className="link" href={social.url} target="_blank">
                  {social.label}
                </a>
                {!isLast && <span> / </span>}
              </Fragment>
            );
          })}
          .
        </span>
      </div>
    </section>
  );
};

export default memo(Contact);
