import { env } from "@/lib/env";
import ky from "ky";
import {
  MiniAppNotificationDetails,
  sendNotificationResponseSchema,
  type SendNotificationRequest,
} from "@farcaster/miniapp-sdk";
import { SendFarcasterNotificationResult } from "@/types/farcaster";

/**
 * Format the avatar src for imagedelivery.net images to reasonable avatar sizes
 *
 * @docs https://developers.cloudflare.com/images/transform-images/transform-via-url/#options
 *
 * @param avatarSrc - The src of the avatar
 * @returns The formatted avatar src
 */
export const formatAvatarSrc = (avatarSrc?: string | null) => {
  if (!avatarSrc) return null;
  if (avatarSrc.startsWith("https://imagedelivery.net")) {
    const defaultAvatar = "/anim=false,fit=contain,f=auto,w=512";
    if (avatarSrc.endsWith("/rectcrop3")) {
      avatarSrc = avatarSrc.replace("/rectcrop3", defaultAvatar);
    } else if (avatarSrc.endsWith("/original")) {
      avatarSrc = avatarSrc.replace("/original", defaultAvatar);
    } else if (avatarSrc.endsWith("/public")) {
      avatarSrc = avatarSrc.replace("/public", defaultAvatar);
    }
  }
  return avatarSrc;
};

/**
 * Get the farcaster manifest for the frame, generate yours from Farcaster Mobile App
 *  On your phone to Settings > Developer > Domains > insert website hostname > Generate domain manifest
 *
 * @returns The farcaster manifest for the frame
 * @schema https://github.com/farcasterxyz/miniapps/blob/main/packages/miniapp-core/src/schemas/manifest.ts
 * @documentation https://miniapps.farcaster.xyz/docs/guides/publishing#define-your-application-configuration
 */
export async function getFarcasterManifest() {
  let miniappName = "Builders Garden";
  let noindex = true;
  const appUrl = env.NEXT_PUBLIC_URL;
  if (appUrl === "https://www.builders.garden") {
    noindex = false;
  } else if (appUrl.includes("ngrok") || appUrl.includes("tunnel")) {
    miniappName += " Local";
  } else if (appUrl === "https://dev.builders.garden") {
    miniappName += " Dev";
  }
  return {
    accountAssociation: {
      header: env.NEXT_PUBLIC_FARCASTER_HEADER,
      payload: env.NEXT_PUBLIC_FARCASTER_PAYLOAD,
      signature: env.NEXT_PUBLIC_FARCASTER_SIGNATURE,
    },
    frame: {
      version: "1",
      name: miniappName,
      iconUrl: `${appUrl}/builders-garden-logo.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/feed.png`,
      buttonTitle: "Hire us for your next project",
      splashImageUrl: `${appUrl}/builders-garden-logo.png`,
      splashBackgroundColor: "#000000",
      webhookUrl: `${appUrl}/api/webhook/farcaster`,
      // Metadata https://github.com/farcasterxyz/miniapps/discussions/191
      subtitle: "Builders Garden", // 30 characters, no emojis or special characters, short description under app name
      description: "Builders Garden", // 170 characters, no emojis or special characters, promotional message displayed on Mini App Page
      primaryCategory: "developer-tools",
      tags: ["web3", "studio", "partner"], // up to 5 tags, filtering/search tags
      tagline: "Builders Garden", // 30 characters, marketing tagline should be punchy and descriptive
      ogTitle: `${miniappName}`, // 30 characters, app name + short tag, Title case, no emojis
      ogDescription: "Builders Garden", // 100 characters, summarize core benefits in 1-2 lines
      // screenshotUrls: [
      // 1284 x 2778, visual previews of the app, max 3 screenshots
      // `${appUrl}/images/screenshots/1.png`,
      // ],
      heroImageUrl: `${appUrl}/feed.png`, // 1200 x 630px (1.91:1), promotional display image on top of the mini app store
      ogImageUrl: `${appUrl}/feed.png`, // 1200 x 630px (1.91:1), promotional image, same as app hero image
      noindex: noindex,
      // requiredChains: ["eip155:1", "eip155:8453"],
      // requiredCapabilities: ["wallet.getEthereumProvider"],
      // castShareUrl: `${appUrl}/request`,
    },
  };
}

/**
 * Send a notification to a Farcaster user.
 *
 * @param fid - The Farcaster user ID
 * @param title - The title of the notification
 * @param body - The body of the notification
 * @param targetUrl - The URL to redirect to when the notification is clicked (optional)
 * @param notificationDetails - The notification details of the user (required)
 * @returns The result of the notification
 */
export async function sendFarcasterNotification({
  fid,
  title,
  body,
  targetUrl,
  notificationDetails,
}: {
  fid: number;
  title: string;
  body: string;
  targetUrl?: string;
  notificationDetails?: MiniAppNotificationDetails | null;
}): Promise<SendFarcasterNotificationResult> {
  if (!notificationDetails) return { state: "no_token" };

  const url = notificationDetails.url;
  const tokens = [notificationDetails.token];

  const response = await ky.post(url, {
    json: {
      notificationId: crypto.randomUUID(),
      title: title.slice(0, 32),
      body: body.slice(0, 128),
      targetUrl: targetUrl ?? env.NEXT_PUBLIC_URL,
      tokens,
    } satisfies SendNotificationRequest,
  });

  const responseJson = await response.json();

  if (response.status === 200) {
    const responseBody = sendNotificationResponseSchema.safeParse(responseJson);
    if (!responseBody.success) {
      console.error(
        `Error sending notification to ${fid}: malformed response`,
        responseBody.error.errors
      );
      return { state: "error", error: responseBody.error.errors };
    }

    if (responseBody.data.result.invalidTokens.length > 0) {
      console.error(
        `Error sending notification to ${fid}: invalid tokens`,
        responseBody.data.result.invalidTokens
      );
      return {
        state: "invalid_token",
        invalidTokens: responseBody.data.result.invalidTokens,
      };
    }

    if (responseBody.data.result.rateLimitedTokens.length > 0) {
      console.error(
        `Error sending notification to ${fid}: rate limited`,
        responseBody.data.result.rateLimitedTokens
      );
      return {
        state: "rate_limit",
        rateLimitedTokens: responseBody.data.result.rateLimitedTokens,
      };
    }

    return { state: "success" };
  }

  console.error(`Error sending notification to ${fid}: ${response.status}`);
  return { state: "error", error: responseJson };
}
