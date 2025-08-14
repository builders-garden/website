import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";

import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Team from "@/components/team";
import Partners from "@/components/partners";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

const appUrl = env.NEXT_PUBLIC_URL;

export async function generateMetadata(): Promise<Metadata> {
  const miniapp = {
    version: "next",
    imageUrl: `${appUrl}/feed.png`,
    button: {
      title: "Hire us for your next project",
      action: {
        type: "launch_frame",
        name: "Builders Garden",
        url: appUrl,
        splashImageUrl: `${appUrl}/feed.png`,
        splashBackgroundColor: "#000000",
      },
    },
  };
  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(appUrl),
    icons: {
      icon: "/builders-garden-icon.svg",
      shortcut: "/builders-garden-icon.svg",
      apple: "/builders-garden-icon.svg",
    },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      type: "website",
      images: [
        {
          url: `${appUrl}/feed-2x1.png`,
          width: 1500,
          height: 750,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      siteId: "1727435024931094528",
      creator: "@builders_garden",
      creatorId: "1727435024931094528",
      images: [`${appUrl}/feed-2x1.png`],
    },
    other: {
      "fc:miniapp": JSON.stringify(miniapp),
    },
  };
}

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
