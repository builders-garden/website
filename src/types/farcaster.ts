export type SendFarcasterNotificationResult =
  | {
      state: "error";
      error: unknown;
    }
  | { state: "no_token" }
  | { state: "invalid_token"; invalidTokens: string[] }
  | { state: "rate_limit"; rateLimitedTokens: string[] }
  | { state: "success" };
