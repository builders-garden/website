"use client";

import { useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ProjectCard from "./project-card";
import { FILTER, PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<FILTER>(FILTER.ALL);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (selectedFilter === FILTER.ALL) return true;
      return project.type === selectedFilter;
    });
  }, [selectedFilter]);

  return (
    <section id="portfolio" className="w-full bg-background py-20 sm:py-28">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-heading uppercase tracking-wider text-tertiary">
            Portfolio
          </p>
          <h2 className="font-clash-display text-4xl font-bold md:text-5xl">
            Our projects
          </h2>
        </div>
        <ScrollArea className="flex gap-2 w-[370px] sm:w-full sm:items-center sm:justify-center sm:mx-auto whitespace-nowrap mt-8 justify-center">
          {Object.values(FILTER).map((filter) => (
            <Button
              key={filter}
              className={cn(
                "rounded-full mb-3 mr-2",
                filter === selectedFilter &&
                  "bg-verdino text-verdino-foreground"
              )}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            radius="full"
            size="lg"
            color="default"
            className="px-[22px] md:px-[44px] font-bold"
            as={Link}
            href="/projects"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
