"use client";

import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-background py-12 md:py-24 px-4 md:px-6"
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
          opts={{
            loop: true,
            align: "start",
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              playOnInit: true,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
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
      </div>
    </section>
  );
};

export default Testimonials;
