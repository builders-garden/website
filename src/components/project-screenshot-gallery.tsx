"use client";

import { useCallback, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ZoomableImage } from "./zoomable-image";
import { ProjectScreenshot } from "@/types";

export function ProjectScreenshotGallery({
  screenshots,
  title = "Gallery",
}: {
  screenshots: ProjectScreenshot[];
  title?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleScrollPrev = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  const handleScrollNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] overflow-hidden rounded-[50px]">
      <CardHeader className="pt-8 pb-2 px-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
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
      </CardHeader>
      <CardContent className="px-2">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: false,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="-ml-1">
            {screenshots.map((screenshot) => (
              <CarouselItem
                key={screenshot.url}
                className="pl-1 sm:basis-1/2 xl:basis-1/3"
              >
                <div className="flex flex-col gap-2 px-4 py-2 h-full">
                  <ZoomableImage
                    imageUrl={screenshot.url}
                    alt={screenshot.text}
                    width={screenshot.width}
                    height={screenshot.height}
                    className="w-full h-full rounded-xl object-cover"
                  />
                  <p className="text-sm text-center">{screenshot.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter className="pt-0 px-8 pb-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-center">
            {currentIndex + 1} / {screenshots.length} screenshots
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
