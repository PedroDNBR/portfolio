import Image, { StaticImageData } from "next/image";
import { FC, memo } from "react";
import { RiCursorLine } from "react-icons/ri";

type ProjectProps = {
  title: string;
  excerpt: string;
  image: StaticImageData;
};

const Project: FC<ProjectProps> = ({ title, excerpt, image }) => {
  return (
    <div>
      <div className="group mb-4 relative overflow-hidden rounded">
        <span className="absolute font-medium w-full h-full flex justify-center items-center gap-2 bg-black/75 opacity-0 hover:opacity-100 transition cursor-pointer">
          <RiCursorLine size={24} />
          Click to show more
        </span>
        <Image src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg">{title}</span>
        <p className="paragraph">{excerpt}</p>
        <a className="link">Show more</a>
      </div>
    </div>
  );
};

export default memo(Project);
