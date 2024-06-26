"use client";

import { ProjectDescription, Project as ProjectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FC, Fragment, memo, useEffect, useState } from "react";
import { RiArrowRightLine, RiCursorLine } from "react-icons/ri";
import slugify from "slugify";
import Button from "./Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./Dialog";
import { config } from "@/config";
import { getPageTitle } from "@/utils/getPageTitle";
import clsx from "clsx";

type ProjectProps = ProjectType;

const Project: FC<ProjectProps> = ({
  title,
  slug,
  excerpt,
  coverImage,
  description,
  sourceCodeUrl,
  downloadUrl,
  hidden,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const searchParams = useParams<{ slug?: string }>();

  useEffect(() => {
    if (searchParams.slug === slug) {
      setIsModalOpen(true);
    }
  }, [slug, searchParams.slug]);

  useEffect(() => {
    if (isModalOpen) {
      window.history.pushState(
        {},
        "",
        new URL(`${config.general.url}/${slug}`)
      );
    } else {
      window.history.pushState({}, "", config.general.url);
    }

    document.title = getPageTitle(isModalOpen ? title : undefined);
  }, [isModalOpen, router, slug, title]);

  const renderDescription = () => {
    const renderItem = (item: ProjectDescription) => {
      switch (item.type) {
        case "image":
          return <Image src={item.src} alt={title} />;
        case "paragraph":
          return (
            <p
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          );
        case "video":
          return (
            <iframe
              src={item.src}
              className="w-full aspect-video"
              allowFullScreen
            />
          );
        default:
          return null;
      }
    };

    return description.map((item, index) => (
      <Fragment key={`${slugify(title)}-description-${index}`}>
        {renderItem(item)}
      </Fragment>
    ));
  };

  return (
    <div className={clsx(hidden && "hidden")}>
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
        <span className="link" onClick={() => setIsModalOpen(true)}>
          Show more
        </span>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[75vh] overflow-y-auto">
          <DialogHeader className="text-lg font-bold">{title}</DialogHeader>
          <div className="flex flex-col gap-6">{renderDescription()}</div>

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
