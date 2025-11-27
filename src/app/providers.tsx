"use client";

import * as React from "react";

import { MiniAppProvider } from "@/contexts/miniapp-context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/lib/wagmi";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <MiniAppProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </MiniAppProvider>
    </WagmiProvider>
  );
}
