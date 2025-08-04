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
