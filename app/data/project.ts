import type { Project } from "@/app/types/project"

export const projects: Project[] = [
  {
    title: "CodeArena",
    type: "Coding Platform",
    description: "A dynamic coding platform for developers.",
    image: "/codeArena.png",
    bgColor: "#111111",
    technologies: ["React", "NodeJs", "Express", "Framer-Motion", "DaisyUi", "Tailwindcss", "MongoDB"],
    featured: true,
    link: "/codeArena",
  },
  {
    title: "Millennial Studio",
    type: "Landing Page",
    image: "/images/millennial.png",
    bgColor: "#4A0082",
    technologies: ["Nextjs", "Framer-Motion", "Shadon", "Tailwindcss"],
    featured: false,
    link: "",
  },
  {
    title: "Socialzz",
    type: "Share your photos here",
    image: "/images/socialzz.png",
    bgColor: "#1A2B4B",
    technologies: ["Vitejs", "Tailwindcss", "Shadon", "TanstackQuery", "Appwrite"],
    featured: false,
    link: "",
  },
  {
    title: "RotoS",
    type: "Questions & Answers",
    image: "/images/rotos.png",
    bgColor: "#A9A9A9",
    technologies: ["Nextjs", "MongoDB", "Clerk Authentication"],
    featured: false,
    link: "",
  },
  {
    title: "Fintech Dashboard",
    type: "Admin Panel",
    image: "/images/fintech.png",
    bgColor: "#0F4C75",
    technologies: ["React", "Redux", "Material UI", "Chart.js"],
    featured: false,
    link: "",
  },
]

