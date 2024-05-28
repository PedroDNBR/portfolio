import Image, { StaticImageData } from "next/image";
import { FC, memo } from "react";

type ProjectProps = {
  title: string;
  excerpt: string;
  image: StaticImageData;
};

const Project: FC<ProjectProps> = ({ title, excerpt, image }) => {
  return (
    <div>
      <Image className="rounded mb-4" src={image} alt={title} />
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg">{title}</span>
        <p className="paragraph">{excerpt}</p>
        <a className="text-red-500 hover:underline cursor-pointer">Show more</a>
      </div>
    </div>
  );
};

export default memo(Project);
