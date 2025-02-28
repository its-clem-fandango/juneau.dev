"use client";

import React, { useState } from "react";
import ScrollAnimation from "../utils/ScrollAnimation";
import Image from "next/image";

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  websiteUrl?: string;
  codeUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Earthical Innovations",
    description:
      "A platform that connects companies with NGOs to tackle climate change.",
    technologies: [{ name: "Amplfiy" }, { name: "React" }, { name: "AWS" }],
    websiteUrl: "https://earthicalinnovations.com",
    codeUrl: "https://github.com/arol-dev/p3-mangrove",
    image: "/Earthical1.png",
  },
  {
    title: "Easy Band Shirts",
    description:
      "Easy Band Shirts is a custom t-shirt generator for creating shirts using the most recognizable fonts used by metal bands.",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Prisma" },
    ],
    websiteUrl: "https://easy-metal-shirts.vercel.app",
    codeUrl: "https://github.com/its-clem-fandango/easy-metal-shirts",
    image: "/EasyMetalShirts.png",
  },
  {
    title: "Be Kind",
    description:
      "BeKind is a marketplace that connects people with local charities.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Typescript" },
      { name: "PrismaORM" },
      { name: "PostgreSQL" },
    ],
    websiteUrl: "https://bekindbcn.com",
    codeUrl: "https://github.com/arol-dev/bekind",
    image: "/BeKind.png",
  },
  {
    title: "Project Title 4",
    description: "Brief description of the project.",
    technologies: [{ name: "React" }, { name: "Node.js" }, { name: "Express" }],
    websiteUrl: "https://example.com",
    codeUrl: "https://github.com/example/project4",
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group">
      <div className="bg-white rounded-lg overflow-hidden border-2 border-background">
        <div className="aspect-video bg-white relative group">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
              {project.title}
            </div>
          )}
          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-[#e0e0e0] transition-colors"
              >
                Website
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (
                    project.title === "Earthical Innovations" ||
                    project.title === "Be Kind"
                  ) {
                    e.preventDefault();
                  }
                }}
                className={`px-6 py-2 bg-white text-black font-medium rounded transition-colors ${
                  project.title === "Earthical Innovations" ||
                  project.title === "Be Kind"
                    ? "hover:bg-red-500 hover:text-white cursor-not-allowed"
                    : "hover:bg-[#e0e0e0]"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {(project.title === "Earthical Innovations" ||
                  project.title === "Be Kind") &&
                isHovered
                  ? "Private"
                  : "Code"}
              </a>
            )}
          </div>
        </div>
        <div className="px-6 py-6 bg-background">
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:underline text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-white/70 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white hover:bg-[#e0e0e0] rounded-full text-black/80 transition-colors"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface WorkProps {
  id?: string;
}

export default function Work({ id }: WorkProps) {
  return (
    <div id={id}>
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        <ScrollAnimation>
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tight mb-16">
            Featured Work
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
