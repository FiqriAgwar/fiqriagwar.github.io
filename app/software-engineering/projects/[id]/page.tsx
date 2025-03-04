import { notFound } from "next/navigation";
import Image from "next/legacy/image";
import { skillIcons } from "@/constants/skills";
import { projectDetails } from "@/constants/projects";
import { ZoomableImage } from "@/components/ZoomableImage";
import { SRC_DEFAULT_PROJECT_IMG } from "@/constants";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({ id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4">
      {/* Top section with thumbnail and project details */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/3 space-y-4">
          <Image
            src={project.thumbnail || SRC_DEFAULT_PROJECT_IMG}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full h-auto"
          />
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          )}
        </div>
        <div className="w-full lg:w-1/3 space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => {
              const Icon =
                skillIcons[skill as keyof typeof skillIcons] ||
                skillIcons.Javascript;
              return (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm flex items-center"
                >
                  <Icon className="mr-1" />
                  {skill}
                </span>
              );
            })}
          </div>
          <div className="space-y-2">
            <p>
              <strong>Studio:</strong> {project.studio}
            </p>
            <p>
              <strong>Platform:</strong> {project.platform}
            </p>
            <p>
              <strong>Project Length:</strong> {project.projectLength}
            </p>
            <p>{project.brief}</p>
          </div>
        </div>
      </div>

      {/* Project sections */}
      {project.sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.type === "text" && (
            <p className="text-gray-300">{section.contents}</p>
          )}
          {section.type === "list" && section.contents && (
            <ul className="list-disc list-inside">
              {section.contents.map((content, contentIndex) => (
                <li key={contentIndex} className="text-gray-300">
                  {content}
                </li>
              ))}
            </ul>
          )}
          {section.type === "gallery" && section.items && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="w-full h-50 flex items-center justify-center">
                {item.type === "image" ? (
                  <ZoomableImage
                    src={item.src || "/placeholder.svg"}
                    alt={`${section.title} image ${itemIndex + 1}`}
                    width={800}
                    height={600}
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={`${section.title} video ${itemIndex + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg aspect-video"
                  ></iframe>
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
