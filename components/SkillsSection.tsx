import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiDocker } from "react-icons/si";

export function SkillsSection() {
  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "Databases", icon: FaDatabase, color: "text-red-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  ];

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center p-2 bg-gray-800 rounded-lg"
          >
            <skill.icon className={`text-2xl mr-2 ${skill.color}`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
