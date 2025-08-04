import { createClient, Errors } from "@farcaster/quick-auth";
import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";
import { getOrCreateUserFromFid } from "@/lib/database/queries";

const quickAuthClient = createClient();

export const POST = async (req: NextRequest) => {
  let {
    token: farcasterToken,
    fid: contextFid,
    referrerFid,
  } = await req.json();
  if (!farcasterToken || !contextFid)
    return NextResponse.json(
      { success: false, error: "Invalid arguments" },
      { status: 400 }
    );

  // Verify signature matches custody address and auth address
  try {
    const payload = await quickAuthClient.verifyJwt({
      domain: new URL(env.NEXT_PUBLIC_URL).hostname,
      token: farcasterToken,
    });
    const fid = payload.sub;
    if (!payload || !fid || isNaN(Number(fid)) || fid !== contextFid)
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );

    // Generate JWT token
    const secret = new TextEncoder().encode(env.JWT_SECRET);
    const dayInMs = 24 * 60 * 60 * 1000;
    const exp = payload.exp
      ? new Date(Number(payload.exp) * 1000 + dayInMs)
      : new Date(Date.now() + dayInMs);
    const token = await new jose.SignJWT({
      fid,
      timestamp: Date.now(),
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(exp)
      .sign(secret);

    const dbUser = await getOrCreateUserFromFid(
      Number(fid),
      referrerFid ? Number(referrerFid) : undefined
    );

    const response = NextResponse.json({ success: true, user: dbUser });

    // Set the auth cookie with the JWT token
    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (e) {
    if (e instanceof Errors.InvalidTokenError) {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );
    }

    throw e;
  }
};
