import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
try {
  jiti("./lib/env");
} catch (error) {
  console.warn("Environment validation error:", error);
  // Continue with build even if env validation fails
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable unnecessary features if needed
  // reactStrictMode: true,
};

export default nextConfig;
