import "@/styles/globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import { Fira_Code as FontMono, Raleway as FontSans } from "next/font/google";

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
      className="dark"
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
