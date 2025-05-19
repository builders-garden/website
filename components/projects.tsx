import Link from "next/link";

import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";

import { PROJECTS } from "@/lib/constants";

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
}

const Projects = ({ showViewAll = true, limit = 6 }: ProjectsProps) => {
  return (
    <section
      id="portfolio"
      className={`w-full bg-background ${showViewAll ? "py-12 sm:py-16" : ""}`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-heading tracking-wider text-tertiary">
            Portfolio
          </p>
          <h2 className="font-clash-display text-4xl font-bold md:text-5xl">
            Some of our projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {showViewAll
            ? PROJECTS.slice(0, limit).map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))
            : PROJECTS.map((project) => (
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
              <Link href="/projects">View all</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
