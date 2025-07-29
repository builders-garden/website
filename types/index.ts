import { FILTER, PROJECT_TYPE } from "@/lib/constants";
import { SVGProps } from "react";
export * from "./form.schema";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectLink = {
  icon: string;
  name: string;
  url: string;
};

export type ProjectScreenshot = {
  url: string;
  alt: string;
  text: string;
};

export type Project = {
  name: string;
  slug: string;
  image: string;
  bannerImage?: string;
  screenshotUrls?: ProjectScreenshot[];
  description: string;
  longDescription: string;
  type: FILTER;
  projectType: PROJECT_TYPE;
  homepage: boolean;
  color: string;
  links: ProjectLink[];
};
