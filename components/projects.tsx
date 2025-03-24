"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ProjectCard from "./project-card";
import { FILTER, PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
}

const Projects = ({ limit = 6, showViewAll = true }: ProjectsProps) => {
  const [selectedFilter, setSelectedFilter] = useState<FILTER>(FILTER.ALL);

  const filteredProjects = useMemo(() => {
    const filtered = PROJECTS.filter((project) => {
      if (selectedFilter === FILTER.ALL) return true;
      return project.type === selectedFilter;
    });
    // Only limit if limit is provided
    return limit ? filtered.slice(0, limit) : filtered;
  }, [selectedFilter, limit]);

  return (
    <section id="portfolio" className="w-full bg-background py-20 sm:py-28">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-heading tracking-wider text-tertiary">
            Portfolio
          </p>
          <h2 className="font-clash-display text-4xl font-bold md:text-5xl">
            Some of our projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              color="default"
              className="px-[22px] md:px-[44px] font-bold rounded-full"
              asChild
            >
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
