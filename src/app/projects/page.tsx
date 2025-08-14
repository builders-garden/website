import { BackButton } from "@/components/back-button";
import Projects from "@/components/projects";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";

const appUrl = env.NEXT_PUBLIC_URL;

export async function generateMetadata(): Promise<Metadata> {
  const miniapp = {
    version: "next",
    imageUrl: `${appUrl}/feed.png`,
    button: {
      title: "See our projects",
      action: {
        type: "launch_frame",
        name: "Builders Garden",
        url: `${appUrl}/projects`,
        splashImageUrl: `${appUrl}/feed.png`,
        splashBackgroundColor: "#000000",
      },
    },
  };
  return {
    title: `Projects - ${siteConfig.name}`,
    description: siteConfig.description,
    metadataBase: new URL(appUrl),
    icons: {
      icon: "/builders-garden-icon.svg",
      shortcut: "/builders-garden-icon.svg",
      apple: "/builders-garden-icon.svg",
    },
    openGraph: {
      title: `Projects - ${siteConfig.name}`,
      description: siteConfig.description,
      type: "website",
      url: `${appUrl}/projects`,
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

export default function ProjectsHome() {
  return (
    <section className="">
      <div className="max-w-[1450px] w-full mx-auto">
        <div className="w-full px-5 2xl:px-0">
          <BackButton link="/" />
        </div>
        <Projects showViewAll={false} showFilters={true} />
      </div>
    </section>
  );
}
