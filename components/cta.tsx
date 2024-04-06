import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="cta"
      className="px-16 py-20 h-[500px] rounded-3xl bg-[#4F00F6] md:bg-transparent mx-6 mt-12 md:mt-0"
    >
      <div className="relative w-full h-full">
        {/* <Image
          src={"/cta.svg"}
          height={500}
          width={1312}
          alt={"CTA illustration"}
          className="rounded-3xl absolute z-0 hidden md:block"
        /> */}
        <div className="flex flex-col items-center justify-center rounded-3xl py-4 md:py-16 space-y-4 z-10 h-full">
          <h2 className="font-clash-display text-4xl md:text-5xl z-10 text-center">
            Questions?
          </h2>
          <p className="z-10 text-center">
            Drop us an email and get in touch with us!
          </p>
          <Button
            radius="full"
            size="lg"
            color="secondary"
            className="w-44 text-black font-bold"
            style={{ backgroundColor: '#EE5522' }}
            as={Link}
            href="mailto:mattar@colgate.edu"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
