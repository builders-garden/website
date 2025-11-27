import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/lib/database/db.schema.ts",
  out: "./migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;
