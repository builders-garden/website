import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Team from "@/components/team";
import Partners from "@/components/partners";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section className="pb-8 md:pb-10">
      <div className="max-w-[1450px] w-full mx-auto">
        <Hero />
        <Mission />
        <Services />
        <Partners />
        <Projects />
        <Testimonials />
        <Team />
        <CTA />
      </div>
    </section>
  );
}
