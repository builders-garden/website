import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project, ProjectLink } from "@/types";
import { ZoomableImage } from "./zoomable-image";
import { Badge } from "@/components/ui/badge";

export const ProjectExpanded = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-[1450px] w-full mx-auto min-h-screen bg-background">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={project.bannerImage ?? project.image}
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
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8 order-2 md:order-1">
          <div className="flex flex-wrap gap-2 items-center justify-start py-2">
            {project.tags.map((tag) => (
              <Badge
                variant="outline"
                className="text-sm bg-background rounded-[50px]"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold">
                About the Project
              </CardTitle>
              <CardDescription className="text-lg opacity-80">
                {project.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] overflow-hidden rounded-[50px]">
            <CardHeader className="pt-8 px-8 pb-0">
              <CardTitle className="text-2xl font-bold">Gallery</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {project.screenshotUrls.map((screenshot) => (
                    <div
                      key={screenshot.url}
                      className="flex flex-col gap-2 px-4 py-2 h-full"
                    >
                      <ZoomableImage
                        imageUrl={screenshot.url}
                        alt={screenshot.text}
                        width={1920}
                        height={1080}
                        className="w-full h-full rounded-xl object-cover"
                      />
                      <p className="text-sm text-center">{screenshot.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 order-1 md:order-2">
          {project.links.length > 0 ? (
            <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="flex flex-col gap-4">
                  {project.links.map((link: ProjectLink) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target={link.url.includes("http") ? "_blank" : undefined}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        height={24}
                        width={24}
                        src={link.icon}
                        alt={link.name}
                      />
                      <span className="text-lg">{link.name}</span>
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
