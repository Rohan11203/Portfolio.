import type { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    title: "CodeArena",
    type: "Coding Platform",
    description: "A dynamic coding platform for developers.",
    image: "/codeArena.png",
    bgColor: "#111111",
    technologies: [
      "React",
      "NodeJs",
      "Express",
      "Framer-Motion",
      "DaisyUi",
      "Tailwindcss",
      "MongoDB",
    ],
    featured: true,
    link: "https://codearena-frontend.onrender.com/",
  },
  {
    title: "ChatterBox",
    type: "Share your photos here",
    image: "/chatterbox1.png",
    bgColor: "#0D0D0D",
    technologies: [
      "Vitejs",
      "Tailwindcss",
      "Shadon",
      "TanstackQuery",
      "Appwrite",
    ],
    featured: false,
    link: "https://chatspace-cktr.onrender.com",
  },
  {
    title: "QurRux",
    type: "Dermatology & Skin Care",
    image: "/QurRux.png",
    bgColor: "#4B1E26",
    technologies: ["Nextjs", "Framer-Motion", "Shadon", "Tailwindcss"],
    featured: false,
    link: "https://qurrux.onrender.com",
  },
  {
    title: "Tower Of Sol",
    type: "Questions & Answers",
    image: "/towerOfSol.png",
    bgColor: "#1A2B4B",
    technologies: ["Nextjs", "MongoDB", "Clerk Authentication"],
    featured: false,
    link: "https://tower-of-sol.vercel.app/",
  },
  {
    title: "Brain Box",
    type: "Admin Panel",
    image: "/brainbox.png",
    bgColor: "#0F4C75",
    technologies: ["React", "Redux", "Material UI", "Chart.js"],
    featured: false,
    link: "",
  },
];
