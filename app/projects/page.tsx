import { BackButton } from "@/components/back-button";
import Projects from "@/components/projects";

export default function ProjectsHome() {
  return (
    <section className="">
      <div className="max-w-[1450px] w-full mx-auto px-5 2xl:px-0">
        <div className="w-full">
          <BackButton link="/" />
        </div>
        <Projects showViewAll={false} />
      </div>
    </section>
  );
}
