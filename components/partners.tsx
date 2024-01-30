import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" className="py-12 md:py-28 flex flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-6">
        <h3 className="text-secondary font-bold text-2xl">Partners</h3>
        <h2 className="font-clash-display text-4xl md:text-5xl text-center md:text-left">
          We have collaborated with
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 place-items-center px-8 md:px-0">
        <Image
          src={"/partners/request-network.svg"}
          width={140}
          height={56}
          alt=""
        />
        <Image
          src={"/partners/talent-protocol.svg"}
          width={140}
          height={56}
          alt=""
        />
        <Image src={"/partners/mask.svg"} width={140} height={56} alt="" />
        {/* <Image src={"/partner.svg"} width={140} height={56} alt="" />
        <Image src={"/partner.svg"} width={140} height={56} alt="" /> */}
      </div>
    </section>
  );
}
