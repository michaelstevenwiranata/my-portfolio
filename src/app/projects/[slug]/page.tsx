import React from "react";
import { projects } from "../../../../lib/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params: paramsPromise,
}: PageProps): Promise<Metadata> {
  const params = await paramsPromise;
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params: paramsPromise,
}: PageProps) {
  const params = await paramsPromise;
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 pt-24">
      <div className="container mx-auto px-4">
        <Link
          href="/#projects"
          className="text-blue-400 hover:underline mb-8 block"
        >
          &larr; Back to Projects
        </Link>
        <h1 className="text-5xl font-bold text-center mb-8">{project.title}</h1>
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <p className="text-lg leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                GitHub Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
