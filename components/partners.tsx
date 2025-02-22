import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "Request Network",
      image: "/partners/request-network.svg",
    },
    {
      name: "Talent Protocol",
      image: "/partners/talent-protocol.svg",
    },
    {
      name: "Mask Network",
      image: "/partners/mask.svg",
    },
    {
      name: "Airstack",
      image: "/partners/airstack.svg",
    },
    {
      name: "XMTP",
      image: "/partners/xmtp.svg",
    },
    {
      name: "Icebreaker",
      image: "/partners/icebreaker.svg",
    },
    {
      name: "Dynamic",
      image: "/partners/dynamic.svg",
    },
    {
      name: "Eden Protocol",
      image: "/partners/eden.svg",
    },
    {
      name: "ZuZalu",
      image: "/partners/zuzalu.svg",
    },
    {
      name: "Akasha",
      image: "/partners/akasha.svg",
    },
    {
      name: "Brian",
      image: "/partners/brian.svg",
    },
    {
      name: "Onchain Dreamers",
      image: "/partners/onchain-dreamers.svg",
    },
  ];
  return (
    <section id="partners" className="py-12 md:py-28 flex flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-6">
        <h3 className="text-secondary font-bold text-2xl">Partners</h3>
        <h2 className="font-clash-display text-4xl md:text-5xl text-center md:text-left">
          We have collaborated with
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 place-items-center px-8 md:px-0">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.image}
            width={140}
            height={56}
            alt={partner.name}
          />
        ))}
      </div>
    </section>
  );
}
