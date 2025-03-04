"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "@/types";

import Image from "next/image";
import ky from "ky";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CaptchaWidget } from "@/components/captcha-widget";
import { toast } from "sonner";

export default function CTA() {
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
    }
  }

  return (
    <section
      id="cta"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-6 pt-20 md:pt-28"
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

              <CaptchaWidget
                callback={(validateToken) => {
                  form.setValue("validateToken", validateToken);
                }}
              />

              <Button
                type="submit"
                variant="tertiary"
                className="px-[22px] md:px-[44px] py-[24px] font-extrabold text-lg transition-all duration-300"
                disabled={form.getValues("validateToken") === ""}
              >
                Contact us
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
