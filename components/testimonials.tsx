"use client";
import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
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
    <section
      id="testimonials"
      className="w-full bg-background py-12 md:py-24 px-5"
    >
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="mb-4 text-tertiary font-heading font-bold">
            Testimonials
          </p>
          <h2 className="font-clash-display text-5xl">
            What others say about us
          </h2>
        </div>
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              playOnInit: true,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem
                key={`testimonial-${index}`}
                className="pl-6 basis-1/1 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-between py-1">
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
          <div className="py-2 text-center text-sm text-muted-foreground">
            {current} of {count}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
