import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import { Fira_Code as FontMono, Raleway as FontSans } from "next/font/google";

import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";

const appUrl = env.NEXT_PUBLIC_URL;

const miniapp = {
  version: "next",
  imageUrl: `${appUrl}/feed.png`,
  button: {
    title: "Hire us for your next project",
    action: {
      type: "launch_frame",
      name: "Builders Garden",
      url: appUrl,
      splashImageUrl: `${appUrl}/feed.png`,
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
      icon: "/builders-garden-icon.svg",
      shortcut: "/builders-garden-icon.svg",
      apple: "/builders-garden-icon.svg",
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
      "fc:miniapp": JSON.stringify(miniapp),
    },
  };
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans-serif",
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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
            <main className="pt-20 lg:pt-24 z-0">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </Providers>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
