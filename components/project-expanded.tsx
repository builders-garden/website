import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project, ProjectLink } from "@/types";

export const ProjectExpanded = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto min-h-screen bg-background">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={project.image}
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
        <div className="md:col-span-2 space-y-8">
          <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About the Project</h2>
              <p className="text-lg opacity-80">{project.description}</p>
            </CardContent>
          </Card>

          {/* Add more sections as needed */}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
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

          <Card className="bg-gradient-to-bl from-[#171717] to-[#0E0E0E] rounded-[50px] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Project Type</h3>
              <p className="text-lg opacity-80">{project.type}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
