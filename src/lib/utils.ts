import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/lib/env";
import { PROJECTS } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a project by slug
 * @param slug - The slug of the project
 * @returns The project
 */
export function getProject(slug: string) {
  const project = PROJECTS.find((project) => {
    return project.slug === slug;
  });
  return project;
}

/**
 * Create a DM cast intent for a user
 * @param userFid - The Farcaster user ID
 * @returns The DM cast intent URL
 */
export function createDMCastIntent(userFid: number) {
  const text = `Hey, I'd love to chat with you about Builders Garden and how you guys can help us!`;
  const finalURL = `https://farcaster.xyz/~/inbox/create/${userFid}?text=${text}`;
  return finalURL;
}

/**
 * Get the local fonts for the frame
 * @returns Fonts for the frame
 */
export async function getFonts(): Promise<
  {
    name: string;
    data: ArrayBuffer;
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    style: "normal" | "italic";
  }[]
> {
  const [font, fontBold] = await Promise.all([
    fetch(`${env.NEXT_PUBLIC_URL}/fonts/Archivo-Bold.ttf`).then((res) =>
      res.arrayBuffer()
    ),
    fetch(`${env.NEXT_PUBLIC_URL}/fonts/Archivo-Bold.ttf`).then((res) =>
      res.arrayBuffer()
    ),
  ]);
  return [
    {
      name: "Archivo",
      data: font,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Archivo",
      data: fontBold,
      weight: 900 as const,
      style: "normal" as const,
    },
  ];
}

/**
 * Load an image from a URL to array buffer
 * @param url - The URL of the image to load
 * @returns The image as an ArrayBuffer
 */
export async function loadImage(url: string): Promise<ArrayBuffer> {
  const logoImageRes = await fetch(url);

  if (!logoImageRes.ok) {
    throw new Error(`Failed to fetch logo image: ${logoImageRes.statusText}`);
  }

  return await logoImageRes.arrayBuffer();
}

/**
 * Get the type of the cover image
 * @param url - The URL of the image to get the type of
 * @returns The type of the image
 */
export function getCoverImageType(url: string): string {
  if (url.endsWith(".png")) {
    return "png";
  } else if (url.endsWith(".webp")) {
    return "webp";
  } else if (url.endsWith(".gif")) {
    return "gif";
  } else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
    return "jpeg";
  }
  return "jpeg";
}
