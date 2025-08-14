/* eslint-disable @next/next/no-img-element */
import { env } from "@/lib/env";

export const DefaultOGImage = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <img
      src={`${env.NEXT_PUBLIC_URL}/feed.png`}
      alt="Default image for Builders Garden"
      width={`${width}px`}
      height={`${height}px`}
    />
  );
};
