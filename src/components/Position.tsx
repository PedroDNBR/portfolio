import { FC, memo } from "react";
import { RiBriefcase2Line } from "react-icons/ri";

type PositionProps = {};

const Position: FC<PositionProps> = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-lg block">
        <span className="text-red-500">Hotels at Home</span> — Full-Stack
        Developer
      </span>
      <p className="paragraph line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
        lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices,
        fringilla dolor nec. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus
        ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla
        dolor nec dolor nec nec
      </p>
      <a className="link">Read more</a>
      <span className="flex gap-3 font-bold">
        <RiBriefcase2Line size={24} />
        Skills: JavaScript, .NET Framework, React.js, Node.js and +11 skills.
      </span>
      <span className="text-zinc-500 font-medium">Jun 2023 - Present</span>
    </div>
  );
};

export default memo(Position);
