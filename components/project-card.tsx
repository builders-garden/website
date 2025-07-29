import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type Link = {
  icon: string;
  name: string;
  url: string;
};

export type Project = {
  name: string;
  slug: string;
  image: string;
  description: string;
  color: string;
  links: Link[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="max-w-[416px] h-fit p-0 m-0 rounded-[50px] bg-gradient-to-bl from-[#171717] to-[#0E0E0E] overflow-hidden">
      <CardContent className="w-full h-fit m-0 px-0 pt-0 flex flex-col items-center justify-between gap-7 relative">
        <Link href={`/projects/${project.slug}`}>
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            className="min-h-[256px] sm:min-h-[221px] max-h-[300px] md:max-h-[265px] lg:max-h-[235px] xl:max-h-[300px] w-full h-full object-cover"
            width={416}
            height={493}
          />
        </Link>
        <div className="flex flex-col items-start justify-start gap-2 w-full px-6 pb-2">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-2xl font-bold text-left">{project.name}</h2>
          </Link>
          <p className="text-xl opacity-70 text-left font-heading">
            {project.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="w-full justify-between">
        <div className="w-full flex items-center justify-start gap-2">
          {project.links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.url.includes("http") ? "_blank" : undefined}
              className="hover:opacity-80 transition-all duration-300"
            >
              <Image height={24} width={24} src={link.icon} alt={link.name} />
            </Link>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          <Button variant="outline">View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
