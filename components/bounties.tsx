"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const bounties = [
  {
    name: "Safe",
    image: "/bounties/safe.svg",
    link: "https://safe.global/",
  },
  {
    name: "Base",
    image: "/bounties/base.svg",
    link: "https://base.org/",
  },
  {
    name: "Airstack",
    image: "/bounties/airstack.svg",
    link: "https://airstack.xyz/",
  },
  {
    name: "Request Network",
    image: "/bounties/request-network.svg",
    link: "https://request.network/",
  },
  {
    name: "The Graph",
    image: "/bounties/the-graph.svg",
    link: "https://thegraph.com/",
  },
  {
    name: "Xmtp",
    image: "/bounties/xmtp.svg",
    link: "https://xmtp.org/",
  },
  {
    name: "Fluidkey",
    image: "/bounties/fluidkey.svg",
    link: "https://fluidkey.xyz/",
  },
  {
    name: "Chainlink",
    image: "/bounties/chainlink.svg",
    link: "https://chain.link/",
  },
  {
    name: "Zkbob",
    image: "/bounties/zkbob.svg",
    link: "https://zkbob.xyz/",
  },
  {
    name: "Lens",
    image: "/bounties/lens.svg",
    link: "https://lens.xyz/",
  },
  {
    name: "Ens",
    image: "/bounties/ens.svg",
    link: "https://ens.domains/",
  },
  {
    name: "Push Protocol",
    image: "/bounties/push-protocol.svg",
    link: "https://push.xyz/",
  },
  {
    name: "Gnosis Pay",
    image: "/bounties/gnosis_pay.svg",
    link: "https://gnosispay.xyz/",
  },
  {
    name: "Dynamic",
    image: "/bounties/dynamic.svg",
    link: "https://dynamic.xyz/",
  },
  {
    name: "Near",
    image: "/bounties/near.svg",
    link: "https://near.org/",
  },
  {
    name: "Sablier",
    image: "/bounties/sablier.svg",
    link: "https://sablier.org/",
  },
];

export default function Bounties() {
  return (
    <section id="partners" className="py-12 md:py-28 flex flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-6">
        <h3 className="text-tertiary font-bold text-2xl">Bounties</h3>
        <h2 className="font-clash-display text-4xl md:text-5xl text-center md:text-left">
          We won prizes from
        </h2>
      </div>
      <div className="w-full">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1000,
              playOnInit: true,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {bounties.map((bounty, index) => (
              <CarouselItem
                key={`bounty-${index}`}
                className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="w-full flex items-center justify-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={bounty.link}
                          target="_blank"
                          className="h-[56px]"
                        >
                          <Image
                            src={bounty.image}
                            width={140}
                            height={56}
                            alt={bounty.name}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-verdino text-verdino-foreground">
                        <p className="text-sm font-medium">{bounty.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center px-8 md:px-0"></div>
    </section>
  );
}
