"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
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

import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  return (
    <section
      id="partners"
      className="px-4 md:px-0 py-12 md:py-28 flex flex-col gap-y-16"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-clash-display text-5xl md:text-6xl text-center md:text-left mb-8">
          We worked with
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
              delay: 2000,
              playOnInit: true,
              stopOnInteraction: true,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {PARTNERS.map((bounty, index) => (
              <CarouselItem
                key={`bounty-${index}`}
                className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 flex items-center justify-center"
              >
                <div className="h-fit w-full flex items-center justify-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={bounty.link}
                          target="_blank"
                          className="h-fit"
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
