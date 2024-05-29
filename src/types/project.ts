import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Project = {
  title: string;
  excerpt: string;
  coverImage: StaticImageData;
  description: ReactNode;
  sourceCodeUrl?: string;
  downloadUrl?: string;
};
