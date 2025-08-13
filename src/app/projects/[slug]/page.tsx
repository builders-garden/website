import { ProjectExpanded } from "@/components/project-expanded";
import { BackButton } from "@/components/back-button";
import { env } from "@/lib/env";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/utils";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) {
    return;
  }

  const miniapp = {
    version: "next",
    imageUrl: `${env.NEXT_PUBLIC_URL}/api/og/projects/${project.slug}`,
    button: {
      title: `${project.name} by BG`,
      action: {
        type: "launch_frame",
        name: `${project.name} by BG`,
        url: `${env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
        splashImageUrl: `${env.NEXT_PUBLIC_URL}/feed.png`,
        splashBackgroundColor: "#000000",
      },
    },
  };

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} - Builders Garden`,
      description: project.description,
      type: "article",
      url: `${env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1500,
          height: 750,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - Builders Garden`,
      description: project.description,
      siteId: "1727435024931094528",
      creator: "@builders_garden",
      creatorId: "1727435024931094528",
      images: [project.image],
    },
    other: {
      "fc:miniapp": JSON.stringify(miniapp),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug: projectSlug } = params;
  const project = getProject(projectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="max-w-[1450px] w-full mx-auto min-h-screen px-5 2xl:px-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.name,
            description: project.description,
            image: project.image,
            url: `${env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
            author: {
              "@type": "Company",
              name: "Builders Garden",
            },
          }),
        }}
      />
      <div className="w-full">
        <BackButton link="/projects" />
      </div>
      {project ? (
        <ProjectExpanded project={project} />
      ) : (
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="text-lg opacity-80 mt-4">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      )}
    </main>
  );
}
