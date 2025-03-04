import ky from "ky";
import { env } from "@/lib/env";

/**
 *
 * @category captcha
 */
type CaptchaTurnstileVerifyRes = {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
};

export async function captchaTurnstileVerify({
  validateToken,
  ip,
}: {
  validateToken: string;
  ip: string;
}) {
  return ky
    .post<CaptchaTurnstileVerifyRes>(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        json: {
          secret: env.TURNSLITE_SECRET_KEY, // Refer: https://developers.cloudflare.com/turnstile/reference/testing/
          response: validateToken,
          remoteip: ip,
        },
      }
    )
    .json();
}
