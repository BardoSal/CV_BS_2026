import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact'; // Import it

export default function Home() {
  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> {/* Place it at the end */}
    </main>
  );
}