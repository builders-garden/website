"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { env } from "@/lib/env";

const scriptLink =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileRenderParameters = Turnstile.RenderParameters;

export function CaptchaWidget(
  props: Pick<
    TurnstileRenderParameters,
    "action" | "cData" | "callback" | "tabindex" | "theme" | "language"
  > & {
    sitekey?: TurnstileRenderParameters["sitekey"];
    errorCallback?: TurnstileRenderParameters["error-callback"];
    expiredCallback?: TurnstileRenderParameters["expired-callback"];
  }
) {
  const { sitekey, errorCallback, expiredCallback, ...rest } = props;

  const widgetID = useRef<string>();
  const [isError, setIsError] = useState(false);

  function retry() {
    setIsError(false);
  }

  function onError(e?: string | Error) {
    console.error(`Captcha error`, e);
    setIsError(true);
    if (errorCallback) {
      errorCallback();
    }
  }

  function renderWidget() {
    try {
      widgetID.current = turnstile.render("#captcha-container", {
        ...rest,
        // Refer: https://developers.cloudflare.com/turnstile/reference/testing/
        sitekey: sitekey || env.NEXT_PUBLIC_TURNSLITE_SITE_KEY || "",
        "error-callback": onError,
        "expired-callback": expiredCallback,
      });
      if (!widgetID.current) {
        throw new Error(`turnstile.render return widgetID=${widgetID.current}`);
      }
    } catch (e: unknown) {
      onError(e as Error);
    }
  }

  function onLoad() {
    renderWidget();
  }

  useEffect(() => {
    if (!widgetID.current && (window as any).turnstile) {
      renderWidget();
    }
    return () => {
      (window as any).turnstile?.remove(widgetID.current || "");
      widgetID.current = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return (
      <div className="text-red-500 bg-white shadow-lg" onClick={retry}>
        Load captcha error
        <span className="text-blue-500 cursor-pointer inline-block text-sm font-semibold ml-2">
          Retry
        </span>
      </div>
    );
  }

  return (
    <>
      <div id="captcha-container"></div>
      <Script
        src={scriptLink}
        onLoad={onLoad}
        onError={(e) => onError("load error: " + e.message)}
      />
    </>
  );
}
