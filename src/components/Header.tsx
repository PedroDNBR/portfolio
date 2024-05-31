import { FC, memo } from "react";
import Button from "./Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { config } from "@/config";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center my-16 md:my-[150px]">
      <p className="text-center mb-2 text-sm md:text-base md:mb-0">
        {config.header.presentation}
      </p>
      <h1 className="text-3xl leading-[3rem] text-center md:text-5xl md:leading-[4.875rem]">
        {config.header.title}
      </h1>

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
