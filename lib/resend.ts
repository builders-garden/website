import { Resend } from "resend";
import { env } from "@/lib/env";
import { Email as EmailComponent } from "@/components/email";

export const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(from: string, name: string, message: string) {
  const response = await resend.emails.send({
    from: "limone@builders.garden",
    to: "gm@builders.garden",
    subject: `[INBOUND] New message from ${name}  about ${message.slice(0, 20)}...`,
    react: EmailComponent({ from, name, message }),
  });

  return response;
}
