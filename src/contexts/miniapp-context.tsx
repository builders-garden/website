"use client";

import { type User } from "@/lib/database/db.schema";
import { MiniAppContext as FarcasterMiniAppContext } from "@farcaster/miniapp-core/dist/context";
import miniappSdk, { type MiniAppHostCapability } from "@farcaster/miniapp-sdk";
import ky from "ky";
import { createContext, useEffect, useState, type ReactNode } from "react";

export interface MiniAppContextType {
  context: FarcasterMiniAppContext | null;
  isMiniAppReady: boolean;
  error: string | null;
  user: User | null;
}

export const MiniAppContext = createContext<MiniAppContextType | undefined>(
  undefined
);

export function MiniAppProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<FarcasterMiniAppContext | null>(null);
  const [actions, setActions] = useState<typeof miniappSdk.actions | null>(
    null
  );
  const [isMiniAppReady, setIsMiniAppReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        // TODO: waiting for base to fix this
        await miniappSdk.actions.ready({
          //   disableNativeGestures: true,
        });
        // TODO: waiting for base to fix this
        // const isInMiniapp = await miniappSdk.isInMiniApp();
        // if (!isInMiniapp) {
        //   console.log("Not in miniapp, skipping init");
        //   return;
        // }
        setIsMiniAppReady(true);
        const tmpContext = await miniappSdk.context;
        if (tmpContext) {
          setContext(tmpContext as FarcasterMiniAppContext);
          setActions(miniappSdk.actions);
        } else {
          setError("Failed to load Farcaster context");
          return;
        }

        // farcaster sign in with custody address and auth address
        try {
          const { token } = await miniappSdk.quickAuth.getToken();
          if (!token) throw new Error("Sign in failed");

          const referrerFid =
            tmpContext.location?.type === "cast_embed"
              ? tmpContext.location.cast.author.fid
              : null;

          const data = await ky
            .post("/api/auth/sign-in", {
              credentials: "include",
              json: {
                token,
                fid: tmpContext.user.fid,
                referrerFid,
              },
            })
            .json<{ success: boolean; error?: string; user?: User }>();

          if (!data.success) throw new Error(data.error ?? "Sign in failed");
          if (!data.user) throw new Error("User not found");

          setUser(data.user);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to get user from database"
          );
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to initialize Farcaster MiniApp SDK"
        );
        console.error("Farcaster MiniApp SDK initialization error:", err);
      }
    };
    if (!isMiniAppReady) {
      load();
    }
  }, [isMiniAppReady, context]);

  return (
    <MiniAppContext.Provider
      value={{
        context,
        isMiniAppReady,
        error,
        user,
      }}
    >
      {children}
    </MiniAppContext.Provider>
  );
}
