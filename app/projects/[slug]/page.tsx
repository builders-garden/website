"use client";

import { useMemo } from "react";

import { PROJECTS } from "@/lib/constants";
import { ProjectExpanded } from "@/components/project-expanded";
import { BackButton } from "@/components/back-button";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug: projectSlug } = params;
  const selectedProject = useMemo(() => {
    return PROJECTS.filter((project) => {
      return project.slug === projectSlug;
    });
  }, [projectSlug]);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1440px] w-full mx-auto container">
        <BackButton link="/projects" />
      </div>
      {selectedProject.length > 0 ? (
        <ProjectExpanded project={selectedProject[0]} />
      ) : (
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="text-lg opacity-80 mt-4">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      )}
    </main>
  );
}
