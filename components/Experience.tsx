"use client";
import React from 'react';
import { jobs } from '@/data/experience'; // Importing your dynamic data

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-4">
          Experiencia profesional
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </h2>

        {/* Timeline Container */}
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-last:bg-transparent"></div>
              
              {/* Animated Dot */}
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300"></div>

              {/* Job Header: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {job.role} <span className="text-zinc-400 font-normal">en</span> {job.company}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500 font-mono">
                  {job.period}
                </span>
              </div>

              {/* Job Description */}
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-2xl">
                {job.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                  >
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

export default Experience;