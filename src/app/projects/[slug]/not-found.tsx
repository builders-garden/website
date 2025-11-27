import { BackButton } from "@/components/back-button";

export default function ProjectNotFound() {
  return (
    <main className="max-w-[1450px] w-full mx-auto min-h-screen px-5 2xl:px-0">
      <div className="w-full">
        <BackButton link="/projects" />
      </div>
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="text-lg opacity-80 mt-4">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </main>
  );
}
