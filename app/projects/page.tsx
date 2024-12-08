import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="p-4">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h2>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {project.year}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-700 dark:text-neutral-300">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-white bg-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
