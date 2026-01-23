"use client";
import React from 'react';
import { skills } from '@/data/skills';

const Skills = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    // Changed bg-white to bg-zinc-950 and border-zinc-100 to border-zinc-900
    <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        {/* Changed text-zinc-900 to text-white */}
        <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
          Expertise
          <div className="h-px flex-1 bg-zinc-900"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat}>
              {/* text-zinc-400 is already good for dark mode subheaders */}
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === cat)
                  .map(skill => (
                    // Updated pill: bg-zinc-900, border-zinc-800, and light text
                    <span 
                      key={skill.name} 
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-blue-500/50 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;