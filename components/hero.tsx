"use client";
import { Button } from "@/components/ui/button";
import sdk from "@farcaster/frame-sdk";
import Image from "next/image";
import Link from "next/link";
import { useFrame } from "./farcaster-provider";

export default function Hero() {
  const { context } = useFrame();
  return (
    <section
      id="#hero"
      className="relative overflow-hidden pt-0 md:pt-16 pb-44 md:pb-44"
    >
      <div className="z-20 px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h1 className="font-clash-display text-light-green text-4xl md:text-7xl">
          <span className="text-secondary"> Cultivating</span>{" "}
          <Image
            src={"/flower.svg"}
            height={60}
            width={60}
            alt="Builders Garden flower"
            className="inline mb-1 h-[40px] w-[40px]"
          />{" "}
          <br />
          real products <br className="hidden md:block" /> in{" "}
          <span className="text-primary">web3 land</span>
        </h1>
        <p className="pr-28 md:pr-0 text-lg lg:text-xl font-semibold">
          We are a studio building our own products and serving as a tech
          partner for companies.
        </p>
        {context ? (
          <Button
            variant="outline"
            className="z-[10] w-fit border-2 px-[22px] md:px-[44px] py-[24px] text-lg transition-all duration-300"
            onClick={() => {
              sdk.actions.openUrl("https://warpcast.com/limone.eth");
            }}
          >
            Contact us
          </Button>
        ) : (
          <Button
            variant="outline"
            className="border-2 w-44 px-[22px] md:px-[44px] py-[24px] font-extrabold text-lg transition-all duration-300"
          >
            <Link href="/#cta">Contact us</Link>
          </Button>
        )}
      </div>
      <Image
        src={"/hero-illustration.svg"}
        height={663}
        width={918}
        className="z-0 hidden md:block absolute -bottom-72 right-0"
        alt="Builders Garden hero illustration"
      />
      <Image
        src={"/hero-illustration-mobile.svg"}
        height={263}
        width={390}
        alt="Builders Garden hero illustration"
        className="z-0 block absolute md:hidden -bottom-6 right-0"
      />
    </section>
  );
}
