import Image from "next/image";
import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    name: "Vitalik Buterin",
    about: "CEO, Ethereum Foundation",
    description:
      "“Sanno fa' web3. So' dei mega scoppiati e fanno progetti massafighi. Fanno al caso vostro, daje!”",
    image: "/testimonials/vitalik.png",
    brandImage: "/testimonials/ethereum-foundation.svg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 text-tertiary font-heading font-bold">
            Testimonials
          </p>
          <h2 className="font-clash-display text-5xl">
            What others say
            <br /> about us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
