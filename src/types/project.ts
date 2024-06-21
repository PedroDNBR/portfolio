import { StaticImageData } from "next/image";

type Image = { src: StaticImageData; type: "image" };
type Paragraph = { content: string; type: "paragraph" };
type Video = { src: string; type: "video" };

export type ProjectDescription = Image | Paragraph | Video;

export type Project = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: StaticImageData;
  description: ProjectDescription[];
  sourceCodeUrl?: string;
  downloadUrl?: string;
  hidden?: boolean;
};
