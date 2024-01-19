import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import Team from "@/components/team";

export default function Home() {
  return (
    <section className="pb-8 md:pb-10">
      <div className="max-w-[1440px] w-full mx-auto">
        <Hero />
        <Mission />
        <Projects />
        <Team />
        <Partners />
        <CTA />
      </div>
    </section>
  );
}
