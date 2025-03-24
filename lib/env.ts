import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1),
    TURNSLITE_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_TURNSLITE_SITE_KEY: z.string().min(1),
    NEXT_PUBLIC_URL: z.string().min(1),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_TURNSLITE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSLITE_SITE_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});
