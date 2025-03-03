import Image from "next/image";

export default function VideoEditing() {
  const projects = [
    {
      title: "Action Movie Trailer",
      type: "Trailer",
      image: "/placeholder.svg",
    },
    {
      title: "Esports Tournament Highlights",
      type: "Game Montage",
      image: "/placeholder.svg",
    },
    {
      title: "Travel Vlog - Japan",
      type: "Fun Videography",
      image: "/placeholder.svg",
    },
    {
      title: "Product Launch Video",
      type: "Trailer",
      image: "/placeholder.svg",
    },
    {
      title: "Music Video - Indie Band",
      type: "Fun Videography",
      image: "/placeholder.svg",
    },
    {
      title: "Game Release Trailer",
      type: "Game Montage",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Video Editing Portfolio</h1>
      <p className="text-xl">Page is under construction, will be back soon</p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              width={300}
              height={200}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.type}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
