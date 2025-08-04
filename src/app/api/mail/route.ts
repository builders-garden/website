import { NextRequest, NextResponse } from "next/server";
import { captchaTurnstileVerify } from "@/lib/turnstile";
import { sendEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { from, name, message, validateToken } = await request.json();
    if (!from || !name || !message || !validateToken) {
      return NextResponse.json(
        { error: "Missing required fields", status: "nok" },
        { status: 400 }
      );
    }

    // Try to get IP from various headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare
    const ip =
      forwardedFor?.split(",")[0] || realIp || cfConnectingIp || "unknown";

    // verify turnstile captcha
    const res = await captchaTurnstileVerify({
      validateToken: validateToken,
      ip: ip,
    });
    // if captcha is not verified, return 401
    if (!res.success) {
      return NextResponse.json(
        { error: "Captcha verification failed", status: "nok" },
        { status: 401 }
      );
    }
    // send email
    const response = await sendEmail(from, name, message);
    return NextResponse.json({ response, status: "ok" });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json(
      { error: "Internal server error", status: "nok" },
      { status: 500 }
    );
  }
}
