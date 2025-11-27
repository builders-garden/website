import {
  ParseWebhookEvent,
  parseWebhookEvent,
  verifyAppKeyWithNeynar,
} from "@farcaster/miniapp-node";
import { NextRequest, NextResponse } from "next/server";
import {
  deleteUserNotificationDetails,
  getOrCreateUserFromFid,
  setUserNotificationDetails,
} from "@/lib/database/queries";
import { sendFarcasterNotification } from "@/lib/farcaster";

export async function POST(request: NextRequest) {
  const requestJson = await request.json();
  console.log("[webhook/farcaster] requestJson", requestJson);

  let data;
  try {
    data = await parseWebhookEvent(requestJson, verifyAppKeyWithNeynar);
  } catch (e: unknown) {
    const error = e as ParseWebhookEvent.ErrorType;

    switch (error.name) {
      case "VerifyJsonFarcasterSignature.InvalidDataError":
      case "VerifyJsonFarcasterSignature.InvalidEventDataError":
        // The request data is invalid
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 400 }
        );
      case "VerifyJsonFarcasterSignature.InvalidAppKeyError":
        // The app key is invalid
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 401 }
        );
      case "VerifyJsonFarcasterSignature.VerifyAppKeyError":
        // Internal error verifying the app key (caller may want to try again)
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }
        );
    }
  }

  console.log("[webhook/farcaster] parsed event data", data);
  const fid = data.fid;
  const event = data.event;
  const user = await getOrCreateUserFromFid(fid);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Farcaster user not found" },
      { status: 404 }
    );
  }

  switch (event.event) {
    case "frame_added":
      if (event.notificationDetails) {
        await setUserNotificationDetails(fid, event.notificationDetails);
        await sendFarcasterNotification({
          fid,
          title: `Hello from Builders Garden 🌳`,
          body: `We'll be sharing updates on our progress and upcoming projects.`,
          notificationDetails: event.notificationDetails,
        });
      } else {
        await deleteUserNotificationDetails(fid);
      }
      // trackEvent(fid, "frame_added", {
      //   fid,
      // });

      break;
    case "frame_removed": {
      console.log("[webhook/farcaster] frame_removed", event);
      await deleteUserNotificationDetails(fid);
      // trackEvent(fid, "frame_removed", {
      //   fid,
      // });
      break;
    }
    case "notifications_enabled": {
      console.log("[webhook/farcaster] notifications_enabled", event);
      await setUserNotificationDetails(fid, event.notificationDetails);
      // trackEvent(fid, "notifications_enabled", {
      //   fid,
      // });
      await sendFarcasterNotification({
        fid,
        title: `Ding ding dong`,
        body: `Thank you for enabling notifications for Builders Garden!`,
        notificationDetails: event.notificationDetails,
      });
      break;
    }
    case "notifications_disabled": {
      console.log("[webhook/farcaster] notifications_disabled", event);
      await deleteUserNotificationDetails(fid);
      // trackEvent(fid, "notifications_diaabled", {
      //   fid,
      // });
      break;
    }
  }

  return NextResponse.json({ success: true });
}
