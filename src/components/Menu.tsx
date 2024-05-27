import { FC, memo } from "react";
import MenuItem from "./MenuItem";

type MenuProps = {};

const Menu: FC<MenuProps> = () => {
  return (
    <nav>
      <ul className="w-100 text-gray-50 flex justify-center gap-4">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="https://github.com/pedrodnbr" target="_blank">
          GitHub
        </MenuItem>
      </ul>
    </nav>
  );
};

export default memo(Menu);
