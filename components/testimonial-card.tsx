import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="rounded-[50px] bg-gradient-to-bl from-[#171717] to-[#0E0E0E]">
      <CardContent className="py-14 px-12 flex flex-col items-center justify-center gap-4 max-w-[590px] relative overflow-hidden">
        <div className="w-full flex flex-col gap-4 items-start justify-start mb-4">
          <Image
            src={testimonial.brandImage}
            alt={`${testimonial.name} testimonial brand image`}
            width={130}
            height={40}
          />
        </div>
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
        <p className="text-md opacity-70 text-left font-medium text-muted-foreground">
          {testimonial.description}
        </p>
      </CardContent>
    </Card>
  );
}
