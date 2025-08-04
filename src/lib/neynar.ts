import ky from "ky";
import { env } from "@/lib/env";
import { NeynarUser } from "@/types/neynar";

/**
 * Fetch multiple users from Neynar
 * @param fids - comma separated FIDs of the users to fetch
 * @returns The users
 */
export const fetchBulkUsersFromNeynar = async (
  fids: string,
  viewerFid?: string
): Promise<NeynarUser[]> => {
  if (!fids) return [];

  const data = await ky
    .get<{ users: NeynarUser[] }>(
      `https://api.neynar.com/v2/farcaster/user/bulk?fids=${fids}${
        viewerFid ? `&viewer_fid=${viewerFid}` : ""
      }`,
      {
        headers: {
          "x-api-key": env.NEYNAR_API_KEY,
        },
      }
    )
    .json();

  return data.users || [];
};

/**
 * Fetch a single user from Neynar
 * @param fid - The FID of the user to fetch
 * @returns The user
 */
export const fetchUserFromNeynar = async (
  fid: string
): Promise<NeynarUser | null> => {
  if (!fid) return null;
  const users = await fetchBulkUsersFromNeynar(fid);
  if (!users || users.length === 0) return null;
  return users[0];
};
