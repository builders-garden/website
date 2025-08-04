import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as dbSchema from "@/lib/database/db.schema";
import { env } from "@/lib/env";

export const tursoClient = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(tursoClient, {
  schema: dbSchema,
});
