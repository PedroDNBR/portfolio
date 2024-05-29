import { FC, memo } from "react";
import { RiArrowUpLine } from "react-icons/ri";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 border-t border-t-zinc-700 pt-8">
      <div className="flex justify-between items-center">
        <p>© {new Date().getFullYear()} Pedro Gomes Antunes</p>
        <a href="#" className="link flex gap-2 items-center">
          Go back to the top
          <RiArrowUpLine size={24} />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <a className="muted-link" href="#about">{`About me`}</a>
          <a className="muted-link" href="#skills">{`Skills`}</a>
          <a className="muted-link" href="#projects">{`Projects`}</a>
          <a className="muted-link" href="#workxp">{`Work XP`}</a>
          <a className="muted-link" href="#contact">{`Let's talk`}</a>
        </div>
        <div>
          <a
            className="muted-link"
            href="https://github.com/PedroDNBR/resume"
            target="_blank"
          >{`Resume`}</a>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
