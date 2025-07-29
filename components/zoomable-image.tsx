import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, ZoomInIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ZoomableImage = ({
  imageUrl,
  alt,
  selected,
  onSelect,
  confirmedSelection,
  isAlone,
}: {
  imageUrl: string;
  alt: string;
  selected: boolean;
  onSelect: () => void;
  confirmedSelection: boolean;
  isAlone: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2 px-2 py-1 items-center justify-center",
        confirmedSelection ? "cursor-not-allowed" : "cursor-pointer"
      )}
      onClick={() => {
        if (!confirmedSelection) {
          onSelect();
        }
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "relative rounded-2xl border-8 border-yellow-400/20 size-28 xs:size-32",
          selected && "border-green-400/80",
          isAlone && "size-32 xs:size-44"
        )}
      >
        {selected && confirmedSelection && (
          <div className="absolute -top-3 -right-3 z-10 cursor-pointer">
            <Check className="bg-green-400 text-white rounded-full p-1" />
          </div>
        )}
        <Image
          src={imageUrl ?? `/images/badge/og.png`}
          alt={alt}
          fill
          className="rounded-lg [animation:rotate_20s_linear_infinite] 
           [filter:drop-shadow(0_0_10px_rgba(234,179,8,0.5))] cursor-normal"
        />
        <Dialog>
          <DialogTrigger asChild>
            <div className="absolute right-0 bottom-3 items-center justify-center flex">
              <div
                className={
                  "w-full h-full flex items-center justify-center size-8 bg-white/70 p-1 rounded-full cursor-zoom-in"
                }
              >
                <ZoomInIcon className="size-4 text-black" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="w-full h-full">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription className="sr-only">{alt}</DialogDescription>
            <Image
              src={imageUrl ?? `/images/badge/og.png`}
              alt={alt}
              fill
              className="object-contain"
            />
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};
