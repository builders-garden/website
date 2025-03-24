import ServiceCard from "./service-card";

import { SERVICES } from "@/lib/constants";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-background py-24 md:py-36 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <p className="mb-6 font-heading text-tertiary text-xl md:text-2xl">
            Services
          </p>
          <h2 className="font-clash-display text-6xl md:text-7xl text-foreground">
            Our expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 px-6">
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
