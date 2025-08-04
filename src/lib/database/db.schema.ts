import { v4 as uuidv4 } from "uuid";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { Address } from "viem";

/**
 * Farcaster User table
 */
export const userTable = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  farcasterFid: integer("farcaster_fid").unique(),
  farcasterUsername: text("farcaster_username"),
  farcasterDisplayName: text("farcaster_display_name"),
  farcasterAvatarUrl: text("farcaster_avatar_url"),
  farcasterWalletAddresses: text("farcaster_wallet_addresses", { mode: "json" })
    .$type<Address[]>()
    .default([]),
  farcasterNotificationDetails: text("farcaster_notification_details", {
    mode: "json",
  }),
  farcasterReferrerFid: integer("farcaster_referrer_fid"),

  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export type User = typeof userTable.$inferSelect;
export type CreateFarcasterUser = typeof userTable.$inferInsert;
export type UpdateFarcasterUser = Partial<CreateFarcasterUser>;
