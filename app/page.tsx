import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects'; 

export default function Home() {
  return (
    // The "main" tag helps with accessibility/SEO
    // "bg-white" and "dark:bg-zinc-950" ensure the background looks good in both modes
    <main className="bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* The Hero section (Your intro) */}
      <Hero />

      {/* The Experience section (Your dynamic job list) */}
      <Experience />

      {/* You can add more sections here later, like <Projects /> or <Contact /> */}
      <Projects />   {/* 2. Add it here */}

      {/* Footer (Simple credit line) */}
      <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-900">
        <p>© {new Date().getFullYear()} — Built with Next.js & Tailwind</p>
      </footer>
      
    </main>
  );
}