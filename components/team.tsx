"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TeamCard from "./team-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const members = [
  {
    name: "frank",
    description: "Blockchain Developer",
    twitter: "https://twitter.com/Frankc_eth",
    farcaster: "https://warpcast.com/frankk",
    image: "/team/frank.jpg",
  },
  {
    name: "limone",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/limone_eth",
    farcaster: "https://warpcast.com/limone.eth",
    image: "/team/limone.png",
  },
  {
    name: "orbulo",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/orbuloeth",
    farcaster: "https://warpcast.com/orbulo",
    image: "/team/orbulo.jpg",
  },
  {
    name: "darph",
    description: "UX/UI Designer",
    twitter: "https://twitter.com/vDarph",
    farcaster: "https://warpcast.com/darph",
    image: "/team/darph.png",
  },
  {
    name: "fraye",
    description: "Backend Developer",
    twitter: "https://twitter.com/itsmide_eth",
    farcaster: "https://warpcast.com/itsmide.eth",
    image: "/team/fraye.jpg",
  },
  {
    name: "bianc8",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/bianc8_eth",
    farcaster: "https://warpcast.com/bianc8",
    image: "/team/bianc8.jpg",
  },
  {
    name: "six99",
    description: "Mobile and Frontend Developer",
    twitter: "https://twitter.com/AndreaFolino3",
    farcaster: "https://warpcast.com/six99",
    image: "/team/andrea.jpg",
  },
  {
    name: "blackicon",
    description: "Fullstack Developer",
    twitter: "https://twitter.com/TBlackicon",
    farcaster: "https://warpcast.com/blackicon.eth",
    image: "/team/blackicon.png",
  },
  {
    name: "drone",
    description: "Solidity Developer",
    twitter: "https://twitter.com/SolidityDrone",
    farcaster: "https://warpcast.com/drone",
    image: "/team/drone.jpg",
  },
  {
    name: "caso",
    description: "Frontend Developer",
    twitter: "https://twitter.com/steven_basalari",
    farcaster: "https://warpcast.com/0xcaso",
    image: "/team/caso.png",
  },
];

export default function Team() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleScrollPrev = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const handleScrollNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  return (
    <section id="team" className="py-12 md:py-28 flex flex-col px-4 md:px-16">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-tertiary font-bold text-2xl text-center md:text-left">
          Team
        </h3>
        <div className="w-full flex items-center justify-between gap-y-2">
          <h2 className="w-full font-clash-display text-4xl md:text-7xl text-center md:text-left">
            We are builders ourselves
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant={api?.canScrollPrev() ? "default" : "outline"}
              color="primary"
              className="p-1 rounded-full"
              onClick={handleScrollPrev}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant={api?.canScrollNext() ? "default" : "outline"}
              color="primary"
              className="p-1 rounded-full"
              onClick={handleScrollNext}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: false,
              slidesToScroll: "auto",
            }}
          >
            <CarouselContent className="-ml-1">
              {members.map((member, index) => (
                <CarouselItem
                  key={`team-member-${index}`}
                  className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <TeamCard key={member.name} member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
