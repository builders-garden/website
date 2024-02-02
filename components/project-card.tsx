import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  image: string;
  description: string;
  color: string;
  link: string;
};

const Ellipsis = ({ color }: { color: string }) => (
  <div
    style={{
      position: "absolute",
      bottom: "-44px",
      borderRadius: "512px",
      border: `5px solid ${color}`,
      background: "rgba(44, 175, 73, 0.05)",
      width: "100%",
      height: "74px",
    }}
  />
);

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // <div className="rounded-2xl flex flex-col items-center bg-gradient-to-tr from-[#171717] to-[#0E0E0E] pt-14 pb-20 px-12">
    //   <img src={"/split3.svg"} alt="split3 logo" />
    //   <p>The easiest and safest way to split group expenses with crypto</p>
    // </div>
    <Link href={project.link} target="_blank">
      <Card radius="lg">
        <CardBody className="pt-14 pb-20 px-12 flex flex-col items-center justify-center gap-9 bg-gradient-to-tr from-[#171717] to-[#0E0E0E] max-w-[560px] relative overflow-hidden">
          <Image
            height={57}
            width={152}
            src={project.image}
            alt={`${project.name} logo`}
          />
          <p className="text-xl opacity-70 text-center font-medium">
            {project.description}
          </p>
          <Ellipsis color={project.color} />
        </CardBody>
      </Card>
    </Link>
  );
}
