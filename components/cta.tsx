"use client";

import { FormSchema, formSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { CaptchaWidget } from "@/components/captcha-widget";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDMCastIntent } from "@/lib/utils";
import sdk from "@farcaster/frame-sdk";
import { useFrame } from "./farcaster-provider";

export default function CTA() {
  const { context } = useFrame();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      validateToken: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    try {
      console.log("sending email w this values", values);
      setIsLoading(true);
      const response = await ky
        .post<{ status: string; error?: string }>("/api/mail", {
          json: {
            from: values.email,
            name: values.name,
            message: values.message,
            validateToken: values.validateToken,
          },
        })
        .json();
      if (response.status === "ok") {
        toast.success(
          `Thx ${values.name}, your email has been sent successfully`,
          {
            description: "We will reach out to you as soon as possible :)",
          }
        );
      } else {
        toast.error(response.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="cta"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-5 pt-20 md:pt-28"
    >
      <div className="w-full md:w-1/2">
        <Image
          src={"/cta-illustration.svg"}
          height={516}
          width={580}
          alt={"CTA illustration"}
          className="rounded-3xl"
        />
      </div>
      <div className="w-full space-y-8 md:w-1/2">
        <div className="w-full flex flex-col items-center justify-center rounded-3xl py-4 md:py-16 space-y-4 z-10 h-full">
          <h2 className="w-full font-clash-display text-4xl md:text-5xl z-10 text-left">
            You like
            <br className="block md:hidden" /> what we build?
          </h2>
          <p className="w-full text-left">
            Drop us a message and get in touch with us!
          </p>
          {!context ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Michael Saylor"
                          required
                          id="name"
                          className="w-full rounded-full px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="michael@saylor.com"
                          required
                          id="email"
                          className="w-full rounded-full px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          required
                          id="message"
                          placeholder="Type your message..."
                          className="min-h-[150px] w-full rounded-3xl px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full min-h-[71.5px] flex flex-col items-start justify-center">
                  <CaptchaWidget
                    callback={(validateToken) => {
                      form.setValue("validateToken", validateToken);
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="tertiary"
                  className="w-[135px] md:w-[180px] px-[22px] md:px-[44px] py-[24px] font-extrabold text-lg transition-all duration-300"
                  disabled={form.getValues("validateToken") === "" || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Contact us"
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <Button
              variant="outline"
              className="w-full border-2 px-[22px] md:px-[44px] py-[24px] text-lg transition-all duration-300"
              onClick={() => {
                sdk.actions.openUrl(createDMCastIntent(4461));
              }}
            >
              Contact us
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
