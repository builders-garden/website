import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import createMDX from "@next/mdx";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
jiti("./src/lib/env.ts");

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: ["rehype-slug"],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  redirects: async () => [
    {
      source: "/offering",
      destination: "https://builders-garden.notion.site/what-we-do?pvs=4",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);
