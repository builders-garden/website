import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="#hero"
      className="relative overflow-hidden pt-0 md:pt-16 pb-44 md:pb-44"
    >
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h1 className="font-clash-display text-light-green text-4xl md:text-7xl">
          Sailing <br className="block md:hidden" />{" "}
          <span className="text-primary">small </span>{" "}
          <br />
          businesses <br className="hidden md:block" />
          <br className="block md:hidden" />{" "}
          <span className="text-primary">
            to sale
            <br className="block md:hidden" /> 
          </span>
        </h1>
        <p className="pr-28 md:pr-0">
          A small business M&A Fin-Tech platform
        </p>
        <Button
          radius="full"
          size="lg"
          className="w-44 font-bold"
          variant="ghost"
          as={Link}
          href="mailto:mattar@colgate.edu"
        >
          Contact us
        </Button>
      </div>
      {/* <Image
        src={"/protruding-squares.svg"}
        height={663}
        width={918}
        alt="Builders Garden hero illustration"
        className="hidden md:block absolute -bottom-72 right-0"
      /> */}
      {/* <Image
        src={"/hero-illustration-mobile.svg"}
        height={263}
        width={390}
        alt="Builders Garden hero illustration"
        className="block absolute md:hidden -bottom-6 right-0"
      /> */}
    </section>
  );
}
