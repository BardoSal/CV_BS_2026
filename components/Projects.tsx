"use client";
import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-4">
          Proyectos destacados
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;