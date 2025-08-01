import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
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
        "relative flex flex-col gap-2 px-2 py-1 items-center justify-center cursor-pointer",
        className
      )}
    >
      <motion.div
        whileHover={{
          scale: [1, 1.05, 1],
        }}
        className={"relative rounded-2xl "}
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
          <DialogContent className="w-full h-full">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription className="sr-only">{alt}</DialogDescription>
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="rounded-lg cursor-normal object-contain"
            />
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};
