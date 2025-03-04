import { SVGProps } from "react";
export * from "./form.schema";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
