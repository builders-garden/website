import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

const appUrl = process.env.NEXT_PUBLIC_URL || "https://builders.garden";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/feed.png`,
  button: {
    title: "Hire us for your next project",
    action: {
      type: "launch_frame",
      name: "Hire us for your next project",
      url: appUrl,
      splashImageUrl: `${appUrl}/builders-garden-logo.png`,
      splashBackgroundColor: "#000000",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(appUrl),
    icons: {
      icon: "/tree.svg",
      shortcut: "/tree.svg",
      apple: "/tree.svg",
    },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      type: "website",
      images: [
        {
          url: `${appUrl}/feed-2x1.png`,
          width: 1500,
          height: 750,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      siteId: "1727435024931094528",
      creator: "@builders_garden",
      creatorId: "1727435024931094528",
      images: [`${appUrl}/feed-2x1.png`],
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontSans.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="pt-24 z-0">{children}</main>
            <Toaster />
            <FooterComponent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
