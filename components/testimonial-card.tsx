import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export type Testimonial = {
  name: string;
  about: string;
  description: string;
  image: string;
  brandImage: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className="mb-1 max-w-[90vw] rounded-[50px] bg-gradient-to-bl from-[#171717] to-[#0E0E0E]">
      <CardContent className="py-8 px-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        <div className="w-full flex gap-2 items-center justify-center">
          <Image
            height={48}
            width={48}
            src={testimonial.image}
            alt={`${testimonial.name} testimonial profile picture`}
            className="size-[48px] rounded-full object-cover"
          />
          <div className="w-full flex flex-col gap-0 items-start justify-center">
            <h2 className="font-heading text-lg font-semibold">
              {testimonial.name}
            </h2>
            <p className="text-muted-foreground">{testimonial.about}</p>
          </div>
        </div>
        <p className="text-md opacity-70 text-left font-medium text-muted-foreground whitespace-pre-line">
          {testimonial.description}
        </p>
      </CardContent>
    </Card>
  );
}
