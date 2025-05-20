import { BackButton } from "@/components/back-button";
import Projects from "@/components/projects";

export default function ProjectsHome() {
  return (
    <section className="">
      <div className="w-full mx-auto">
        <div className="w-full px-5">
          <BackButton link="/" />
        </div>
        <Projects showViewAll={false} />
      </div>
    </section>
  );
}
