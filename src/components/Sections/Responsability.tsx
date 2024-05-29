import { FC, memo } from "react";
import { twMerge } from "tailwind-merge";

type ResponsabilityProps = {
  children: string;
};

const Responsability: FC<ResponsabilityProps> = ({ children }) => {
  const beforeStyles =
    "before:w-2 before:h-2 before:rounded-full before:bg-red-500 before:block before:absolute before:left-0 before:top-1/2 before:translate-y-[-50%]";

  return <li className={twMerge("relative pl-7", beforeStyles)}>{children}</li>;
};

export default memo(Responsability);
