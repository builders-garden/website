"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

enum Filter {
  All = "All",
  Internal = "Internal products",
  Partnerships = "Partnerships",
  Hackathons = "Hackathons",
}

const projects = [
  {
    name: "Stringz",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
    color: "#6C3BF5",
    image: "/projects/stringz.png",
    type: Filter.Internal,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://stringz.xyz",
      },
      {
        icon: "/icons/twitter-white.svg",
        name: "Stringz Twitter",
        url: "https://x.com/stringz_xyz",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/stringz-xyz",
      },
    ],
  },
  {
    name: "Ghost",
    description:
      "A mobile-native GHO-centric smart wallet designed for p2p payments",
    color: "#C9B3F9",
    image: "/projects/ghost.svg",
    type: Filter.Hackathons,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://ethglobal.com/showcase/ghost-mae3q",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/ghost-app",
      },
    ],
  },
  {
    name: "Papabase",
    description:
      "Making public goods donations accessible to everyone through crypto and fiat.",
    color: "#1851FA",
    image: "/projects/papabase.svg",
    type: Filter.Hackathons,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://devfolio.co/projects/papabase-7d6b",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/papabase",
      },
    ],
  },
  {
    name: "Pulse",
    description: "Tinder-like experience for Lens and Farcaster posts",
    color: "#1D91E3",
    image: "/projects/pulse.svg",
    type: Filter.Hackathons,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://ethglobal.com/showcase/pulse-v4iir",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/PaoloRollo/pulse",
      },
    ],
  },
  {
    name: "Split3",
    description:
      "The easiest and safest way to split group expenses with crypto",
    color: "#2CAF49",
    image: "/projects/split3.svg",
    type: Filter.Hackathons,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://devpost.com/software/split3",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/mattiapomelli/split3-frontend",
      },
    ],
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.All);
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedFilter === Filter.All) return true;
      return project.type === selectedFilter;
    });
  }, [selectedFilter]);

  return (
    <section id="portfolio" className="w-full bg-background py-24">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-heading uppercase tracking-wider text-tertiary">
            Portfolio
          </p>
          <h2 className="font-clash-display text-4xl font-bold md:text-5xl">
            Our projects
          </h2>
        </div>
        <div className="mb-12 mt-8 flex justify-center gap-4">
          {Object.values(Filter).map((filter) => (
            <Button
              key={filter}
              variant={filter === selectedFilter ? "default" : "outline"}
              className={cn(
                "",
                filter === selectedFilter &&
                  "bg-verdino text-verdino-foreground"
              )}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="border-muted-foreground text-muted-foreground"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
