import { ProjectExpanded } from "@/components/project-expanded";
import { BackButton } from "@/components/back-button";
import { env } from "@/lib/env";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/utils";
import { getMarkdownProject } from "@/lib/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import { markdownComponents } from "@/components/custom-markdown";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) {
    return;
  }

  const miniapp = {
    version: "next",
    imageUrl: `${env.NEXT_PUBLIC_URL}/api/og/projects/${project.slug}?ar=3x2`,
    button: {
      title: `See ${project.name} by BG`,
      action: {
        type: "launch_frame",
        name: `See ${project.name} by BG`,
        url: `${env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
        splashImageUrl: `${env.NEXT_PUBLIC_URL}/feed.png`,
        splashBackgroundColor: "#000000",
      },
    },
  };

  return {
    title: `${project.name} - Builders Garden`,
    description: project.description,
    metadataBase: new URL(env.NEXT_PUBLIC_URL),
    icons: {
      icon: "/builders-garden-icon.svg",
      shortcut: "/builders-garden-icon.svg",
      apple: "/builders-garden-icon.svg",
    },
    openGraph: {
      title: `${project.name} - Builders Garden`,
      description: project.description,
      type: "article",
      url: `${env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
      images: [
        {
          url: `${env.NEXT_PUBLIC_URL}/api/og/projects/${project.slug}`,
          width: 1200,
          height: 630,
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
      images: [`${env.NEXT_PUBLIC_URL}/api/og/projects/${project.slug}`],
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
  const markdownProject = getMarkdownProject(projectSlug);

  if (!project || !markdownProject) {
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
      <ProjectExpanded project={project}>
        <div className="prose !max-w-none prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-white !text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-strong:text-white prose-a:text-white prose-lead:text-white prose-p:text-white prose-blockquote:text-white prose-figure:text-white prose-figcaption:text-white prose-em:text-white prose-kbd:text-white prose-pre:text-white prose-ol:text-white prose-ul:text-white prose-li:text-white prose-table:text-white prose-thead:text-white prose-tr:text-white prose-th:text-white prose-td:text-white prose-img:text-white prose-video:text-white prose-hr:text-white prose-code:text-white">
          <MDXRemote
            source={markdownProject.content}
            components={markdownComponents as any}
          />
        </div>
      </ProjectExpanded>
    </main>
  );
}
