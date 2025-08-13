/* eslint-disable @next/next/no-img-element */
import { OG_IMAGE_SIZE } from "@/lib/constants";
import { env } from "@/lib/env";

export const DefaultOGImage = () => {
  return (
    <img
      src={`${env.NEXT_PUBLIC_URL}/feed.png`}
      alt="Default image for Builders Garden"
      width={`${OG_IMAGE_SIZE.width}px`}
      height={`${OG_IMAGE_SIZE.height}px`}
    />
  );
};
