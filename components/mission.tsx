import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="mission"
      className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row py-28 items-center"
    >
      <div className="px-8 mt-8 md:mt-12">
        <Image
          src={"/mission-illustration.svg"}
          width={378}
          height={444}
          alt="Builders Garden mission illustration"
          className="w-[342px] h-[401px] md:w-[378px] md:h-[444px]"
        />
      </div>
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h2 className="text-5xl md:text-6xl font-clash-display">
          Full-Stack web3 <br className="block md:hidden" />
          <span className="text-secondary">development</span>
          <br className="block md:hidden" /> at{" "}
          <span className="text-primary">speed</span>
        </h2>
        <p className="text-lg lg:text-xl font-semibold">
          We cover every stage of the product lifecycle—from prototyping to
          development, delivering high-quality solutions at speed.
        </p>
      </div>
    </section>
  );
}
