import { config } from "@/config";
import HomeScreen from "@/screens/HomeScreen";
import { getPageTitle } from "@/utils/getPageTitle";
import { Metadata } from "next";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage() {
  return <HomeScreen />;
}

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  const project = config.projects.find((project) => project.slug === slug);

  if (!project) return config.general.metadata;

  const title = getPageTitle(project.title);
  return {
    ...config.general.metadata,
    title,
    description: project.excerpt,
    openGraph: {
      siteName: "Pedro Gomes Antunes",
      title,
      url: `${config.general.url}/${slug}`,
      type: "website",
      locale: "en_US",
      images: project.coverImage.src,
    },
  };
}
