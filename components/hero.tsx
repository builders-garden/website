import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="#hero" className="relative overflow-hidden pt-16 pb-44">
      <div className="px-16 max-w-5xl gap-y-6 flex flex-col">
        <h1 className="font-clash-display text-light-green text-7xl">
          We <span className="text-primary">cultivate</span>{" "}
          <Image
            src={"/flower.svg"}
            height={60}
            width={60}
            alt="Builders Garden flower"
            className="inline mb-1"
          />{" "}
          <br />
          innovative projects <br /> in the{" "}
          <span className="text-primary">web3 land</span>
        </h1>
        <p>
          Creating a fertile space for people to express themselves by building
          their ideas
        </p>
        <Button
          radius="full"
          size="lg"
          className="w-44 font-bold"
          variant="ghost"
          as={Link}
          href="mailto:gm@builders.garden"
        >
          Contact us
        </Button>
      </div>
      <Image
        src={"/hero-illustration.svg"}
        height={663}
        width={918}
        alt="Builders Garden hero illustration"
        className="absolute -bottom-72 right-0"
      />
    </section>
  );
}
