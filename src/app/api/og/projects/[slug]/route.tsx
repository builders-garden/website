/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { DefaultOGImage } from "@/components/og-image/default-og-image";
import { ProjectOGImage } from "@/components/og-image/project-og-image";
import { OG_IMAGE_SIZE } from "@/lib/constants";
import { env } from "@/lib/env";
import { getCoverImageType, getFonts, loadImage } from "@/lib/utils";
import { getProject } from "@/lib/utils";

export const dynamic = "force-dynamic";

/**
 * GET handler for generating dynamic OpenGraph images
 * @param request - The incoming HTTP request
 * @param params - Route parameters containing the ID
 * @returns ImageResponse - A dynamically generated image for OpenGraph
 */
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  }
) {
  try {
    const fonts = await getFonts();

    const defaultResponse = new ImageResponse(<DefaultOGImage />, {
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      fonts: fonts,
      debug: false,
      headers: [
        ["Cache-Control", "public, s-maxage=43200, stale-while-revalidate=0"], // cache in CDN for 12 hours
      ],
    });

    // Extract the ID from the route parameters
    const { slug: projectSlug } = await params;
    if (!projectSlug) return defaultResponse;

    const project = getProject(projectSlug);
    console.log("project", project);
    if (!project) {
      console.error(`Project not found: ${projectSlug}`);
      return defaultResponse;
    }

    const coverImageUrl = `${env.NEXT_PUBLIC_URL}${project.image}`;
    const coverImageType = getCoverImageType(coverImageUrl);
    // satori only supports jpeg and png
    if (coverImageType !== "jpeg" && coverImageType !== "png") {
      return defaultResponse;
    }
    const coverImage = await loadImage(coverImageUrl);
    console.log("coverImageUrl", coverImageUrl);
    console.log("coverImageType", coverImageType);

    // Generate and return the image response with the composed elements
    return new ImageResponse(
      (
        <ProjectOGImage
          projectName={project.name}
          coverImage={coverImage}
          coverImageType={coverImageType}
        />
      ),
      {
        width: OG_IMAGE_SIZE.width,
        height: OG_IMAGE_SIZE.height,
        fonts: fonts,
        debug: false,
        headers: [
          ["Cache-Control", "public, s-maxage=43200, stale-while-revalidate=0"], // cache in CDN for 12 hours
        ],
      }
    );
  } catch (e) {
    // Log and handle any errors during image generation
    console.error(`Failed to generate project image`, e);
    return new Response(`Failed to generate project image`, {
      status: 500,
    });
  }
}
