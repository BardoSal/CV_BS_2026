"use client";

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, FileText, GalleryVerticalEnd } from 'lucide-react';
import { socials } from '@/data/socials'; // Import your links

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Profile Pic & Badge Code remains the same... */}
        <div className="flex items-center gap-5 mb-8">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-zinc-100 dark:border-zinc-800">
                <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Abierto a colaboraciones
            </div>
        </div>

        {/* Text content... */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          <span className="text-blue-600"> Bardo Salgado</span>
        </h1>

        <h1 className="text-5xl md:text-4xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Especialista en planificación urbana y análisis territorial para la toma de decisiones basadas en evidencia
        </h1>

        {/* Updated Social Links Section */}
        <div className="flex flex-wrap gap-4 items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:text-blue-600  transition-all dark:bg-zinc-100 dark:text-zinc-900 shadow-lg"
          > Proyectos
          </button>
          
          <div className="flex gap-2">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 text-zinc-500 hover:text-blue-600 transition-all">
              <Linkedin size={22} />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 text-zinc-500 hover:text-blue-600 transition-all">
              <Github size={22} />
            </a>
            <a href="/resume_esp.pdf" target="_blank"
               className="p-3 text-zinc-500 hover:text-blue-600 transition-all">
              <FileText size={22} />
            </a>
            <a href="/portfolio_esp.pdf" target="_blank" rel="noopener noreferrer"
               className="p-3 text-zinc-500 hover:text-blue-600 transition-all">
              <GalleryVerticalEnd size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;