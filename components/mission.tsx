import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="#mission"
      className="max-w-5xl w-full mx-auto flex flex-col md:flex-row py-28 items-center"
    >
      <Image
        src={"/mission-illustration.svg"}
        height={444}
        width={378}
        alt="Builders Garden mission illustration"
      />
      <div className="px-16 max-w-5xl gap-y-6 flex flex-col">
        <h2 className="text-5xl font-clash-display">
          Gathering like-
          <br />
          minded <span className="text-primary">builders</span> <br /> for
          mutual <span className="text-secondary">growth</span>
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
