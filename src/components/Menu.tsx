import { FC, memo } from "react";
import MenuItem from "./MenuItem";

type MenuProps = {};

const Menu: FC<MenuProps> = () => {
  return (
    <nav>
      <ul className="w-100 text-sm text-gray-50 flex flex-wrap justify-center gap-6 md:gap-4 md:text-base">
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#skills">Skills</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="#workxp">Work XP</MenuItem>
        <MenuItem href="#contact">{`Let's talk`}</MenuItem>
      </ul>
    </nav>
  );
};

export default memo(Menu);
