// Define the structure of a Job object for better coding safety
export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const jobs: Job[] = [
  {
    company: "Future Tech Solutions",
    role: "Lead Developer",
    period: "2024 — Present",
    description: "Architecting modern web applications using Next.js and Cloudflare Workers. Leading a team of 4 developers to deliver high-quality codebases.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"]
  },
  {
    company: "Digital Dreams Agency",
    role: "Frontend Developer",
    period: "2022 — 2024",
    description: "Built high-speed landing pages and integrated headless CMS systems for international clients. Focused on performance and accessibility.",
    tech: ["React", "Framer Motion", "Sanity", "GraphQL"]
  },
  {
    company: "Startup Hub",
    role: "Junior Developer",
    period: "2020 — 2022",
    description: "Developed and maintained internal tools and dashboards. Collaborated with design teams to implement pixel-perfect user interfaces.",
    tech: ["JavaScript", "HTML/CSS", "Git", "Figma"]
  }
];