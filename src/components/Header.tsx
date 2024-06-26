import { FC, memo } from "react";
import Button from "./Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { config } from "@/config";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center my-14 md:my-[150px]">
      <p
        className="text-center leading-7 mb-2 text-xs md:text-base md:mb-0"
        dangerouslySetInnerHTML={{ __html: config.header.presentation }}
      />
      <h1
        className="text-3xl leading-[3rem] text-center md:text-5xl md:leading-[4.875rem]"
        dangerouslySetInnerHTML={{ __html: config.header.title }}
      />

      <div className="flex flex-col gap-4 mt-8 md:flex-row">
        <Button asChild variant="outline">
          <Link href="#projects">{`See projects`}</Link>
        </Button>
        <Button asChild endIcon={RiArrowRightLine}>
          <Link href="#contact">{`Let's talk`}</Link>
        </Button>
      </div>
    </header>
  );
};

export default memo(Header);
