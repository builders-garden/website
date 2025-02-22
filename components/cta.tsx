import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-8"
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
            <br /> what we build?
          </h2>
          <p className="w-full text-left">
            Drop us a message and get in touch with us!
          </p>
          <form className="space-y-4 w-full">
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full rounded-full px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
            />
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-full px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
            />
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[150px] w-full rounded-3xl px-4 py-2 bg-gradient-to-bl from-[#171717] to-[#0E0E0E]"
            />
            <Button
              color="verdino"
              className="w-44 text-black font-bold"
              asChild
            >
              <Link href="mailto:gm@builders.garden">Contact us</Link>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
