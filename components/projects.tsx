import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section id="portfolio" className="py-28 flex flex-col">
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-secondary font-bold text-2xl">Portfolio</h3>
        <h2 className="font-clash-display text-7xl">Our projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
          <ProjectCard
            project={{
              name: "Split3",
              image: "/projects/split3.svg",
              description:
                "The easiest and safest way to split group expenses with crypto",
              color: "#2CAF49",
            }}
          />
          <ProjectCard
            project={{
              name: "Pulse",
              image: "/projects/pulse.svg",
              description:
                "Tinder-like experience for Lens and Farcaster posts",
              color: "#1D91E3",
            }}
          />
          <ProjectCard
            project={{
              name: "Ghost",
              image: "/projects/ghost.png",
              description:
                "GHOst is a native wallet for managing your GHO tokens.",
              color: "#C9B3F9",
            }}
          />
        </div>
      </div>
    </section>
  );
}
