import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

export type Service = {
  name: string;
  image: string;
  description: string;
  color: string;
  link: string;
};

const Ellipsis = ({ color }: { color: string }) => (
  <div className="absolute bottom-0 w-full h-[74px]">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 25"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 25 Q 50 0 100 25"
        fill="none"
        stroke={`var(--${color})`}
        strokeWidth="3"
        className={`${
          color === "primary" ? "stroke-primary" : "stroke-secondary"
        }`}
      />
    </svg>
  </div>
);

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.link} target="_blank">
      <Card radius="lg">
        <CardBody className="pt-14 pb-20 px-12 flex flex-col items-center justify-center gap-9 bg-gradient-to-bl from-[#171717] to-[#0E0E0E] max-w-[590px] relative overflow-hidden">
          <div className="w-full flex flex-col gap-4 items-start justify-start">
            <Image
              height={40}
              width={40}
              src={service.image}
              alt={`${service.name} service icon`}
              className="size-[40px]"
            />
            <h2 className="text-xl font-medium">{service.name}</h2>
          </div>
          <p className="text-xl opacity-70 text-left font-medium">
            {service.description}
          </p>
          <Ellipsis color={service.color} />
        </CardBody>
      </Card>
    </Link>
  );
}
