import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="#mission"
      className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row py-28 items-center"
    >
      <div className="px-8 mt-8 md:mt-12">
        {/* <Image
          src={"/mission-illustration.svg"}
          height={444}
          width={378}
          alt="Builders Garden mission illustration w-[342px] h-[401px] md:h-[444px] md:w-[378px]"
        /> */}
      </div>
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h2 className="text-4xl md:text-5xl font-clash-display">
          Revolutionizing the <span className="text-primary">small</span>{" "}
          business M&A <span className="text-secondary">space</span>
        </h2>
        <p>
        Our aim is to transform the small business sector throughout the USA by offering comprehensive strategies that simplify the sales process, bypass broker interactions, and provide products specifically designed to fulfill the distinct requirements of small businesses.
        </p>
      </div>
    </section>
  );
}
