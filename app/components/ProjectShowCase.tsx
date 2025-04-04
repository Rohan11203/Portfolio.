"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ProjectCard from "@/app/components/ProjectCard"
import { projects } from "@/app/data/project"
import { useRouter } from "next/navigation"

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3))

  const router = useRouter();

  const handleClick = () => {
    router.push("/")
  }
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 3 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === projects.length - 3 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    // Update visible projects when currentIndex changes
    setVisibleProjects(projects.slice(currentIndex, currentIndex + 3))
  }, [currentIndex])

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-12 ">
      {/* Back button */}
      <div className="absolute top-12 left-12 z-10 ">
        <button 
        onClick={handleClick}
        className="bg-white hover:bg-gray-100 p-3 cursor-pointer rounded-md transition-colors">
          <ArrowLeft className="h-5 w-5 text-black " />
        </button>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-12 right-12 z-10 flex space-x-2">
        <button onClick={goToPrevious} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <button onClick={goToNext} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Projects container */}
      <div className="flex justify-center items-center h-full mt-16">
        <div className="flex space-x-6 px-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: projects.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectShowcase

