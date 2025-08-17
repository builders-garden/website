import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Project } from "@/types";
import { LINK_TYPE_ICONS } from "@/lib/constants/projects";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { ProjectScreenshotGallery } from "./project-screenshot-gallery";

export const ProjectExpanded = ({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-[1450px] w-full mx-auto min-h-screen bg-background">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={project.heroImage ?? project.image}
          alt={`${project.name} hero image`}
          className="w-full h-full object-cover rounded-t-3xl"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            {project.description}
          </p>
          <div
            className="flex flex-row justify-start items-center text-center gap-2 my-2 overflow-scroll scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overflow: "overlay",
            }}
          >
            {project.tags.map((tag) => (
              <Badge
                variant="outline"
                className="text-sm bg-background rounded-[50px] whitespace-nowrap"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-8 order-2 xl:order-1">
          <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
            <CardContent className="p-8">
              <CardDescription className="text-lg opacity-80">
                {children}
              </CardDescription>
            </CardContent>
          </Card>

          {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
            <ProjectScreenshotGallery screenshots={project.screenshotUrls} />
          ) : null}
        </div>

        {/* Sidebar */}
        <div className="space-y-8 order-1 xl:order-2">
          {project.links.length > 0 ? (
            <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="flex flex-col gap-4">
                  {project.links.map((link) => (
                    <Link
                      key={link.type}
                      href={link.url}
                      target={link.url.includes("http") ? "_blank" : undefined}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        height={24}
                        width={24}
                        src={LINK_TYPE_ICONS[link.type]}
                        alt={link.type}
                      />
                      <span className="text-lg">{link.type}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
};
