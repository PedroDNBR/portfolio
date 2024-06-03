import { config } from "@/config";

export const getPageTitle = (projectTitle?: string) => {
  if (projectTitle) {
    return `${projectTitle} - ${config.general.metadata.title}`;
  }

  return `${config.general.metadata.title}`;
};
