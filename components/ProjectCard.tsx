'use client';

import Image from 'next/image';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { Project } from '../data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group border border-zinc-100 dark:border-zinc-900 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-white dark:bg-zinc-900/50 h-full flex flex-col">
      {/* Image Gallery Section */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content Layer */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.doc && (
              <a href={project.doc} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                <FileText size={20} />
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-sm mb-6 text-zinc-600 dark:text-zinc-400 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};