import { PROJECT_TAG } from "@/lib/constants";
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
  width: number;
  height: number;
};

export type Project = {
  name: string;
  slug: string;
  image: string;
  bannerImage?: string;
  screenshotUrls?: ProjectScreenshot[];
  description: string;
  markdownPath: string;
  tags: PROJECT_TAG[];
  homepage: boolean;
  color: string;
  links: ProjectLink[];
};
