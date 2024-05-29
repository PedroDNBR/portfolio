import { FC, memo } from "react";
import Button from "./Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { config } from "@/config";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center my-[150px]">
      <p>{config.header.presentation}</p>
      <h1 className="text-5xl leading-[4.875rem] text-center">
        {config.header.title}
      </h1>

      <div className="flex gap-4 mt-8">
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
