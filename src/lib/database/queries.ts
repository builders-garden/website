import { eq } from "drizzle-orm";
import { db } from "@/lib/database";

import { MiniAppNotificationDetails } from "@farcaster/miniapp-sdk";
import {
  type CreateFarcasterUser,
  type UpdateFarcasterUser,
  userTable,
} from "@/lib/database/db.schema";
import { fetchUserFromNeynar } from "../neynar";
import { formatAvatarSrc } from "../farcaster";

/**
 * Create a new Farcaster user
 * @param newUser - The new user to create
 */
export const createUser = async (newUser: CreateFarcasterUser) => {
  await db.insert(userTable).values(newUser);
};

/**
 * Get a user from the database by their Farcaster FID
 * @param fid - The Farcaster FID of the user to get
 * @returns The user
 */
export const getUserFromFid = async (fid: number) => {
  const user = await db
    .select()
    .from(userTable)
    .where(eq(userTable.farcasterFid, fid));
  return user[0];
};

/**
 * Get a user from the database by their Farcaster FID, or create a new user if they don't exist
 * @param fid - The Farcaster FID of the user to get or create
 * @param referrerFid - The Farcaster FID of the referrer user
 * @returns The user
 */
export const getOrCreateUserFromFid = async (
  fid: number,
  referrerFid?: number
) => {
  let user = await getUserFromFid(fid);
  if (!user) {
    const neynarUser = await fetchUserFromNeynar(fid.toString());
    if (!neynarUser) {
      return null;
    }
    const newUser = await createUser({
      farcasterFid: neynarUser.fid,
      farcasterUsername: neynarUser.username,
      farcasterDisplayName: neynarUser.display_name,
      farcasterAvatarUrl: formatAvatarSrc(neynarUser.pfp_url),
      farcasterWalletAddresses: neynarUser.verified_addresses.eth_addresses.map(
        (address) => address as `0x${string}`
      ),
      farcasterNotificationDetails: null,
      farcasterReferrerFid: referrerFid ?? null,
    });
    return newUser;
  }
  return user;
};

/**
 * Update a user in the database by their Farcaster FID
 * @param fid - The Farcaster FID of the user to update
 * @param updates - The updates to apply to the user
 */
export const updateUser = async (fid: number, updates: UpdateFarcasterUser) => {
  await db
    .update(userTable)
    .set(updates)
    .where(eq(userTable.farcasterFid, fid));
};

/**
 * Get the notification details for a user from the database by their Farcaster FID
 * @param fid - The Farcaster FID of the user to get the notification details for
 * @returns The notification details for the user
 */
export const getUserNotificationDetails = async (
  fid: number
): Promise<MiniAppNotificationDetails | undefined> => {
  const result = await db.query.userTable.findFirst({
    where: eq(userTable.farcasterFid, fid),
  });
  if (!result || !result.farcasterNotificationDetails) return undefined;

  // Handle both string and object cases
  if (typeof result.farcasterNotificationDetails === "string") {
    return JSON.parse(
      result.farcasterNotificationDetails
    ) as MiniAppNotificationDetails;
  }
  return result.farcasterNotificationDetails as MiniAppNotificationDetails;
};

/**
 * Delete the notification details for a user in the database by their Farcaster FID
 * @param fid - The Farcaster FID of the user to delete the notification details for
 */
export const deleteUserNotificationDetails = async (fid: number) => {
  await db
    .update(userTable)
    .set({ farcasterNotificationDetails: null })
    .where(eq(userTable.farcasterFid, fid));
};

/**
 * Set the notification details for a user in the database by their Farcaster FID
 * @param fid - The Farcaster FID of the user to set the notification details for
 * @param details - The notification details to set for the user
 */
export const setUserNotificationDetails = async (
  fid: number,
  notificationDetails: { url: string; token: string }
) => {
  await db
    .update(userTable)
    .set({ farcasterNotificationDetails: JSON.stringify(notificationDetails) })
    .where(eq(userTable.farcasterFid, fid));
};
