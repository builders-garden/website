import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Try to get IP from various headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare

    // Get the first IP if multiple are present (x-forwarded-for can contain multiple IPs)
    const ip =
      forwardedFor?.split(",")[0] || realIp || cfConnectingIp || "unknown";

    return NextResponse.json({ ip });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get IP address" },
      { status: 500 }
    );
  }
}
