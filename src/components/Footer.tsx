import { config } from "@/config";
import { FC, memo } from "react";
import GoToTop from "./GoToTop";
import { RiExternalLinkLine } from "react-icons/ri";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 border-t border-t-zinc-700 pt-8">
      <div className="flex flex-wrap justify-between items-center">
        <p>© {new Date().getFullYear()} Pedro Gomes Antunes</p>
        <GoToTop className="md:flex hidden" />
      </div>
      <div className="flex flex-wrap gap-8 justify-between">
        <div className="flex flex-wrap gap-8">
          <a className="muted-link" href="#about">{`About me`}</a>
          <a className="muted-link" href="#skills">{`Skills`}</a>
          <a className="muted-link" href="#projects">{`Projects`}</a>
          <a className="muted-link" href="#workxp">{`Work XP`}</a>
          <a className="muted-link" href="#contact">{`Let's talk`}</a>
        </div>
        <div>
          <a
            className="muted-link flex items-center gap-1"
            href={config.footer.resumeUrl}
            target="_blank"
          >
            {`Resume`}
            <RiExternalLinkLine className="mt-[-2px]" />
          </a>
        </div>
      </div>
      <GoToTop className="md:hidden" />
    </div>
  );
};

export default memo(Footer);
