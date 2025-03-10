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
import { MEMBERS } from "@/lib/constants";

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
    <section id="team" className="px-4 md:px-6 py-20 md:py-28 flex flex-col">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-tertiary font-bold text-2xl text-center md:text-left">
          Team
        </h3>
        <div className="flex items-center justify-between gap-y-2">
          <h2 className="font-clash-display text-4xl md:text-7xl text-center md:text-left px-4 md:px-0">
            Who we are
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
              {MEMBERS.map((member, index) => (
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
