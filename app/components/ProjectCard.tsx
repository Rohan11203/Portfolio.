import type { Project } from "@/app/types/project"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="w-[380px] h-[500px] rounded-3xl overflow-hidden relative group"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Project type */}
        <div className="text-white/80 text-lg mb-2">{project.type}</div>

        {/* Project title */}
        <h2 className="text-white text-4xl font-bold mb-4">{project.title}</h2>

        {/* Project description - only for featured projects */}
        {project.featured && <p className="text-white/70 mb-6">{project.description}</p>}

        {/* Project image container with gradient overlay */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden rounded-xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>

          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* View project button - appears on hover */}
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link 
            href={project.link}
            className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors">
              View Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

