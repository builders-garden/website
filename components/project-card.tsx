import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Link } from "@nextui-org/link";

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
    <Card radius="lg" className="w-full h-full p-0 m-0">
      <CardBody className="w-full h-full m-0 px-0 pt-0 pb-14 flex flex-col items-center justify-center gap-7 bg-gradient-to-bl from-[#171717] to-[#0E0E0E] relative overflow-hidden">
        <Link href={`/projects/${project.slug}`}>
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            height={200}
            width={416}
            className="w-full"
          />
        </Link>
        <div className="flex flex-col items-start justify-start gap-2 w-full h-[100px] px-[24px]">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-2xl font-bold text-left">{project.name}</h2>
          </Link>
          <p className="text-xl opacity-70 text-left font-heading">
            {project.description}
          </p>
          <div className="w-full h-[32px] flex items-start justify-start gap-2">
            {project.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                isExternal={link.url.includes("http")}
              >
                <Image height={24} width={24} src={link.icon} alt={link.name} />
              </Link>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
