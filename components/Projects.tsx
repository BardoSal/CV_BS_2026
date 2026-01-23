"use client";
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-4">
          Featured Projects
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group p-6 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                      <Github size={20} />
                    </a>
                  )}
                  <a href={project.link} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;