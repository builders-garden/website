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

export type Project = {
  name: string;
  slug: string;
  image: string;
  description: string;
  type: string;
  color: string;
  links: ProjectLink[];
};
