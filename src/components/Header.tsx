import { FC, memo } from "react";
import Button from "./Button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center my-[150px]">
      <p>
        {`Hi, I'm`} <strong>{`Pedro Gomes Antunes`}</strong>, {`AKA`}{" "}
        <strong>{`PedroDNBR`}</strong>
      </p>
      <h1 className="text-5xl leading-[4.875rem] text-center">
        A <span className="text-red-500">passionate game developer</span> who
        loves to design and develop game-focused applications.
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
