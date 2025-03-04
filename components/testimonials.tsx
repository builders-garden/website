import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "./testimonial-card";

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
