import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const { from, name, message } = await request.json();
  const response = await sendEmail(from, name, message);
  return NextResponse.json(response);
}
