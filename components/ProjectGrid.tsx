import Link from "next/link"
import Image from "next/image"
import { ProjectDetail } from "@/interfaces"
import { SRC_DEFAULT_PROJECT_IMG } from "@/constants"

interface ProjectDetailProps {
  projects: ProjectDetail[]
}

export function ProjectGrid({projects} : ProjectDetailProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link key={project.id} href={`/software-engineering/projects/${project.id}`} className="block">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
            <div className="relative h-48">
              <Image src={project.thumbnail || SRC_DEFAULT_PROJECT_IMG} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

