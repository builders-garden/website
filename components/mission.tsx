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
          Gathering like-
          <br />
          minded <span className="text-secondary">builders</span>
          <br /> for mutual <span className="text-primary">growth</span>
        </h2>
        <p>
          We aim to cultivate the ultimate oasis for individuals to explore and
          develop their web3 ideas, in a vibrant and open-minded space for
          builders to freely express themselves and their innovative ideas.
        </p>
      </div>
    </section>
  );
}
