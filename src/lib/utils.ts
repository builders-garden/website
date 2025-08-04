import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createDMCastIntent(userFid: number) {
  const text = `Hey, I'd love to chat with you about Builders Garden and how you guys can help us!`;
  const finalURL = `https://farcaster.xyz/~/inbox/create/${userFid}?text=${text}`;
  return finalURL;
}
