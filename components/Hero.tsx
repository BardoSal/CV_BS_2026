"use client";

import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          I'm <span className="text-blue-600 dark:text-blue-500">Your Name</span>. <br />
          Full-stack Developer.
        </h1>

        {/* Short Bio */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          I specialize in building high-performance, accessible web applications using 
          <span className="text-zinc-900 dark:text-zinc-200 font-medium"> Next.js</span>, 
          <span className="text-zinc-900 dark:text-zinc-200 font-medium"> TypeScript</span>, and 
          <span className="text-zinc-900 dark:text-zinc-200 font-medium"> Node.js</span>. 
          I love turning complex problems into simple, beautiful digital experiences.
        </p>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap gap-6 items-center">
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-200 dark:shadow-none"
          >
            View My Work
          </button>
          
          <div className="flex gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all" title="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="/resume.pdf" target="_blank"
               className="p-3 text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all" title="Resume">
              <FileText size={22} />
            </a>
            <a href="mailto:your-email@example.com"
               className="p-3 text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all" title="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;