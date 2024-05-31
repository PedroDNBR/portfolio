"use client";

import { Project as ProjectType } from "@/types/project";
import Image from "next/image";
import { FC, memo, useState } from "react";
import { RiArrowRightLine, RiCursorLine } from "react-icons/ri";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./Dialog";
import Button from "./Button";
import Link from "next/link";

type ProjectProps = ProjectType;

const Project: FC<ProjectProps> = ({
  title,
  excerpt,
  coverImage,
  description,
  sourceCodeUrl,
  downloadUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        className="group mb-4 relative overflow-hidden rounded"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="absolute font-medium w-full h-full flex justify-center items-center gap-2 bg-black/75 opacity-0 hover:opacity-100 transition cursor-pointer">
          <RiCursorLine size={24} />
          Click to show more
        </span>
        <Image src={coverImage} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg">{title}</span>
        <p className="paragraph line-clamp-3">{excerpt}</p>
        <a className="link" onClick={() => setIsModalOpen(true)}>
          Show more
        </a>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[75vh] overflow-y-auto">
          <DialogHeader className="text-lg font-bold">{title}</DialogHeader>
          <div className="flex flex-col gap-6">{description}</div>

          <DialogFooter>
            {!!sourceCodeUrl && (
              <Button asChild variant="outline">
                <Link href={sourceCodeUrl} target="_blank">
                  See source code
                </Link>
              </Button>
            )}
            {!!downloadUrl && (
              <Button asChild endIcon={RiArrowRightLine}>
                <Link href={downloadUrl} target="_blank">
                  Download game
                </Link>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default memo(Project);
