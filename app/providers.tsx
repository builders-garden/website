"use client";

import * as React from "react";

import { FrameProvider } from "@/components/farcaster-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <FrameProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </FrameProvider>
  );
}
