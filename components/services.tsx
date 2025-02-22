import ServiceCard from "./service-card";

const services = [
  {
    icon: "/services/farcaster.svg",
    name: "Farcaster Development",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
    color: "secondary",
    link: "https://devpost.com/software/split3",
  },
  {
    icon: "/services/mini-apps.svg",
    name: "Mini Apps Development",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
    color: "primary",
    link: "https://ethglobal.com/showcase/pulse-v4iir",
  },
  {
    icon: "/services/mvp.svg",
    name: "MVP Development",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
    color: "primary",
    link: "https://ethglobal.com/showcase/ghost-mae3q",
  },
  {
    icon: "/services/ai-agents.svg",
    name: "AI Agents Development",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
    color: "secondary",
    link: "https://devfolio.co/projects/papabase-7d6b",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 font-heading text-tertiary">Services</p>
          <h2 className="font-clash-display text-5xl md:text-7xl text-foreground">
            Our expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 px-6">
          {services.map((service) => (
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
