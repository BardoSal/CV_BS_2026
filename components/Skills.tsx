"use client";
import React from 'react';
import { skills } from '@/data/skills';

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-4">
          Tech Stack
          <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-blue-500 transition-colors cursor-default"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;