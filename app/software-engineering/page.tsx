import { Timeline } from "@/components/Timeline"
import { ProjectGrid } from "@/components/ProjectGrid"
import { softwareEngineerExp } from "@/constants/workExperiences"
import { professionalProjects, personalProjects } from "@/constants/projects"

export default function SoftwareEngineering() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Software Engineering Portfolio</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Timeline items={softwareEngineerExp} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Projects</h2>
        <ProjectGrid projects={professionalProjects} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
        <ProjectGrid projects={personalProjects} />
      </section>
    </div>
  )
}

