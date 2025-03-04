"use client";

import { useMemo } from "react";

import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/project-card";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug: projectSlug } = params;
  const selectedProject = useMemo(() => {
    return PROJECTS.filter((project) => {
      return project.slug === projectSlug;
    });
  }, [projectSlug]);

  return (
    <section className="pt-8 pb-8 md:pb-10">
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-6">
        {selectedProject ? (
          <ProjectCard project={selectedProject[0]} />
        ) : (
          <div className="w-full flex flex-col">
            <h1 className="text-3xl">Project not found</h1>
          </div>
        )}
      </div>
    </section>
  );
}
