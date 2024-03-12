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
          Gathering like-minded <span className="text-primary">builders</span>{" "}
          for mutual <span className="text-secondary">growth</span>
        </h2>
        <p>
          We aim to cultivate the ultimate oasis for individuals to explore and
          develop their web3 ideas, in a vibrant and open-minded space for
          builders.
        </p>
      </div>
    </section>
  );
}
