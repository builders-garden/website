import ServiceCard from "./service-card";

import { SERVICES } from "@/lib/constants";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-background py-20 md:py-28 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className="mb-4 font-heading text-tertiary">Services</p>
          <h2 className="font-clash-display text-5xl md:text-7xl text-foreground">
            Our expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 px-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.name}
              service={{
                name: service.name,
                image: service.icon,
                description: service.description,
                color: service.color,
                link: service.link,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
