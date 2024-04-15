import Image from "next/image";

export default function Bounties() {
  return (
    <section id="partners" className="py-12 md:py-28 flex flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-6">
        <h3 className="text-secondary font-bold text-2xl">Bounties</h3>
        <h2 className="font-clash-display text-4xl md:text-5xl text-center md:text-left">
          We won prizes from
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center px-8 md:px-0">
        <Image src={"/bounties/safe.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/base.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/airstack.svg"} width={140} height={56} alt="" />
        <Image
          src={"/bounties/request-network.svg"}
          width={140}
          height={56}
          alt=""
        />
        <Image src={"/bounties/the-graph.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/xmtp.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/fluidkey.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/chainlink.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/zkbob.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/lens.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/ens.svg"} width={140} height={56} alt="" />
        <Image
          src={"/bounties/push-protocol.svg"}
          width={140}
          height={56}
          alt=""
        />
        <Image
          src={"/bounties/gnosis_pay.svg"}
          width={140}
          height={56}
          alt=""
        />
        <Image src={"/bounties/dynamic.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/near.svg"} width={140} height={56} alt="" />
        <Image src={"/bounties/sablier.svg"} width={140} height={56} alt="" />
      </div>
    </section>
  );
}
