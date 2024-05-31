import Link, { LinkProps } from "next/link";
import { FC, memo } from "react";

type MenuItemProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <li>
      <Link
        className="py-2 px-3 md:py-3 md:px-4 hover:bg-slate-800 hover:text-red-500 rounded cursor-pointer"
        {...props}
      />
    </li>
  );
};

export default memo(MenuItem);
