export interface Project {
  title: string;
  description: string;
  link: string;
  github?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description: "A real-time inventory management system with Stripe integration.",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["Next.js", "Prisma", "Tailwind"]
  },
  {
    title: "AI Portfolio Generator",
    description: "An app that generates professional portfolios using GPT-4.",
    link: "https://example.com",
    tags: ["OpenAI", "React", "Node.js"]
  }
];