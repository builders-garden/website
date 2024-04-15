import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="#mission"
      className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row py-28 items-center"
    >
      <div className="px-8 mt-8 md:mt-12">
        <Image
          src={"/mission-illustration.svg"}
          height={444}
          width={378}
          alt="Builders Garden mission illustration w-[342px] h-[401px] md:h-[444px] md:w-[378px]"
        />
      </div>
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h2 className="text-4xl md:text-5xl font-clash-display">
          <span className="text-primary">Speed</span> is our guiding bloom, but{" "}
          <span className="text-secondary">quality</span> is not negotiable.
        </h2>
        <p>
          We are a team of experienced hackers and builders, who love shipping
          fast and iterating quickly without compromising on excellence.
        </p>
      </div>
    </section>
  );
}
