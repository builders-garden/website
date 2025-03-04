import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="#hero"
      className="relative overflow-hidden pt-0 md:pt-16 pb-44 md:pb-44"
    >
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h1 className="font-clash-display text-light-green text-4xl md:text-7xl">
          We
          <span className="text-secondary"> cultivate</span>{" "}
          <Image
            src={"/flower.svg"}
            height={60}
            width={60}
            alt="Builders Garden flower"
            className="inline mb-1 h-[40px] w-[40px]"
          />{" "}
          <br />
          innovative projects <br className="hidden md:block" /> in the
          <span className="text-secondary"> web3 land</span>
        </h1>
        <p className="pr-28 md:pr-0 text-lg lg:text-xl font-semibold">
          Creating a fertile space for people to express themselves by building
          their ideas
        </p>
        <Button
          variant="outline"
          className="border-2 w-44 px-[22px] md:px-[44px] py-[24px] font-extrabold text-lg transition-all duration-300"
          asChild
        >
          <Link href="/#cta">Contact us</Link>
        </Button>
      </div>
      <Image
        src={"/hero-illustration.svg"}
        height={663}
        width={918}
        alt="Builders Garden hero illustration"
        className="hidden md:block absolute -bottom-72 right-0"
      />
      <Image
        src={"/hero-illustration-mobile.svg"}
        height={263}
        width={390}
        alt="Builders Garden hero illustration"
        className="block absolute md:hidden -bottom-6 right-0"
      />
    </section>
  );
}
