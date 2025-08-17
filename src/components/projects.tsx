"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";

import {
  PROJECT_TAG,
  PROJECTS,
  TAGS_FILTERS,
  FILTER_TAGS,
  FILTER_TAG_ICONS,
} from "@/lib/constants";
import { Badge } from "./ui/badge";

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
  showFilters?: boolean;
}

const Projects = ({
  showViewAll = true,
  showFilters = false,
  limit = 6,
}: ProjectsProps) => {
  const [filters, setFilters] = useState<PROJECT_TAG[]>([PROJECT_TAG.ALL]);

  const filteredProjects = useMemo(() => {
    if (filters.includes(PROJECT_TAG.ALL)) {
      return PROJECTS;
    }

    // Get all expanded tags from the selected filters
    const expandedTags = filters.flatMap(
      (filter) => TAGS_FILTERS[filter] || [filter]
    );

    return PROJECTS.filter((project) =>
      project.tags.some((tag) => expandedTags.includes(tag))
    );
  }, [filters]);

  const handleFilterClick = (filter: PROJECT_TAG) => {
    if (filters.includes(PROJECT_TAG.ALL)) {
      setFilters([filter]);
      return;
    }

    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        if (prevFilters.length === 1 && prevFilters[0] === filter) {
          return [PROJECT_TAG.ALL];
        }
        return prevFilters.filter((f) => f !== filter);
      }
      return [...prevFilters, filter];
    });
  };

  return (
    <section
      id="portfolio"
      className={`w-full bg-background overflow-x-hidden ${
        showViewAll ? "py-12 sm:py-16" : ""
      }`}
    >
      <div className="container px-5 md:px-0 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-heading tracking-wider text-tertiary">
            Portfolio
          </p>
          <h2 className="font-clash-display text-4xl font-bold md:text-5xl">
            Some of our projects
          </h2>
          {showFilters ? (
            <div
              className="max-w-[1450px] w-full mx-auto flex flex-row justify-start items-center text-center gap-2 my-2 overflow-scroll scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                overflow: "overlay",
              }}
            >
              {FILTER_TAGS.map((tag) => {
                const isActive =
                  filters.includes(tag) ||
                  (filters.includes(PROJECT_TAG.ALL) &&
                    tag === PROJECT_TAG.ALL);
                const Icon = FILTER_TAG_ICONS[tag];

                return (
                  <Badge
                    key={tag}
                    variant="outline"
                    onClick={() => handleFilterClick(tag)}
                    className={`text-sm bg-background rounded-[50px] whitespace-nowrap cursor-pointer transition-all duration-300 flex items-center gap-1.5 ${
                      isActive ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {Icon ? <Icon size={14} /> : null}
                    {tag}
                  </Badge>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <AnimatePresence>
            {showViewAll
              ? PROJECTS.filter((project) => project.homepage)
                  .slice(0, limit)
                  .map((project) => (
                    <motion.div key={project.name} exit={{ opacity: 0 }}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))
              : filteredProjects.map((project) => (
                  <motion.div key={project.name} exit={{ opacity: 0.3 }}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              color="default"
              className="px-[22px] md:px-[44px] font-bold rounded-full"
              asChild
            >
              <Link href="/projects">View all</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
