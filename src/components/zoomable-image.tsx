"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ZoomableImage = ({
  imageUrl,
  alt,
  width,
  height,
  className,
}: {
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 px-2 py-1 items-center justify-center cursor-pointer",
        className
      )}
    >
      <motion.div
        whileHover={{
          scale: [1, 1.05, 1],
        }}
        className="rounded-2xl"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={imageUrl}
              alt={alt}
              width={width}
              height={height}
              className="rounded-lg cursor-normal"
            />
          </DialogTrigger>
          <DialogContent
            className={cn(
              "flex flex-col w-[100vw] h-full items-start justify-center",
              width > height
                ? "!max-w-[calc(100%-2rem)]"
                : "!max-h-[calc(100%-2rem)]"
            )}
          >
            <DialogTitle className="">{alt}</DialogTitle>
            <DialogDescription className="sr-only">{alt}</DialogDescription>
            <Image
              src={imageUrl}
              alt={alt}
              width={width}
              height={height}
              className={cn(
                "overflow-hidden m-auto rounded-lg cursor-normal object-contain",
                width > height ? "w-screen h-fit" : "h-screen w-fit"
              )}
            />
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};
