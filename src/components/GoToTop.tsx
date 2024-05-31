import { cn } from "@/lib/utils";
import { FC, memo } from "react";
import { RiArrowUpLine } from "react-icons/ri";

type GoToTopProps = {
  className?: string;
};

const GoToTop: FC<GoToTopProps> = ({ className }) => {
  return (
    <a href="#" className={cn("link flex gap-2 items-center", className)}>
      Go back to the top
      <RiArrowUpLine size={24} />
    </a>
  );
};

export default memo(GoToTop);
