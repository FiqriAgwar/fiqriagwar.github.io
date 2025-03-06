// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const App: React.FC = () => {
const [activeSection, setActiveSection] = useState('home');
const chartRef = useRef<HTMLDivElement>(null);
const [selectedProject, setSelectedProject] = useState<string | null>(null);

const projectsData = {
  'Software Engineering': [
    {
      title: 'Enterprise Cloud Platform',
      description: 'Led the development of a scalable cloud infrastructure platform serving 10,000+ users',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      impact: 'Reduced deployment time by 75% and improved system reliability by 99.9%',
      duration: '18 months',
      role: 'Technical Lead',
      image: 'https://public.readdy.ai/ai/img_res/e9882cdeb2ec15510a7a02806fcff32a.jpg'
    },
    {
      title: 'AI-Powered Analytics Suite',
      description: 'Developed an advanced analytics platform using machine learning algorithms',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Vue.js', 'FastAPI'],
      impact: 'Increased client insights accuracy by 85% and reduced analysis time by 60%',
      duration: '12 months',
      role: 'Senior Software Engineer',
      image: 'https://public.readdy.ai/ai/img_res/caa983c6f0f82c87d70e9483dc1c87cf.jpg'
    },
    {
      title: 'Microservices Architecture Migration',
      description: 'Successfully led the transformation of a monolithic system to microservices',
      technologies: ['Java Spring Boot', 'Kafka', 'MongoDB', 'Docker', 'Jenkins'],
      impact: 'Improved system scalability by 300% and reduced maintenance costs by 45%',
      duration: '24 months',
      role: 'Architecture Lead',
      image: 'https://public.readdy.ai/ai/img_res/0e78dc03ad7b7a0eb8b5430bc36a366c.jpg'
    }
  ]
};

useEffect(() => {
  if (activeSection === 'Software Engineering' && chartRef.current) {
    const chart = echarts.init(chartRef.current);
    const option = {
      animation: false,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      radar: {
        indicator: [
          { name: 'Backend Development', max: 100 },
          { name: 'Frontend Development', max: 100 },
          { name: 'DevOps', max: 100 },
          { name: 'Architecture Design', max: 100 },
          { name: 'Database Management', max: 100 },
          { name: 'Cloud Services', max: 100 }
        ]
      },
      series: [{
        type: 'radar',
        data: [{
          value: [95, 90, 85, 95, 88, 92],
          name: 'Skill Proficiency',
          areaStyle: {
            color: 'rgba(79, 70, 229, 0.2)'
          },
          lineStyle: {
            color: 'rgba(79, 70, 229, 1)'
          }
        }]
      }]
    };
    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }
}, [activeSection]);

const renderSkillContent = () => {
  if (activeSection === 'Software Engineering') {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Skill Overview */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Software Engineering Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              With over 10 years of experience in software engineering, I specialize in building scalable enterprise solutions,
              cloud architecture, and leading technical teams to deliver high-impact projects.
            </p>
          </div>

          {/* Skill Metrics */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Proficiency</h2>
              <div ref={chartRef} style={{ height: '400px' }}></div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">Led development of enterprise solutions serving 100,000+ users</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">Implemented CI/CD pipelines reducing deployment time by 75%</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">Architected microservices solutions improving scalability by 300%</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <p className="text-gray-700">Mentored 20+ junior developers in modern development practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projectsData['Software Engineering'].map((project, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => setSelectedProject(project.title)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap"
                    >
                      <i className="fa-solid fa-times text-xl"></i>
                    </button>
                  </div>
                  {projectsData['Software Engineering'].find(p => p.title === selectedProject) && (
                    <div className="space-y-6">
                      <img 
                        src={projectsData['Software Engineering'].find(p => p.title === selectedProject)?.image}
                        alt={selectedProject}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">
                        {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.description}
                      </p>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Impact</h4>
                        <p className="text-gray-600">
                          {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.impact}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Duration</h4>
                          <p className="text-gray-600">
                            {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.duration}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Role</h4>
                          <p className="text-gray-600">
                            {projectsData['Software Engineering'].find(p => p.title === selectedProject)?.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};
const [isMenuOpen, setIsMenuOpen] = useState(false);
const skillsData = {
'Software Engineering': 98,
'Teaching': 82,
'Broadcasting': 80,
'Video Editing': 78
};
return (
<div className="min-h-screen bg-white">
{renderSkillContent()}
{/* Navigation */}
<nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center h-16">
<div className="text-xl font-bold text-indigo-600">Alexander Wright</div>
{/* Desktop Menu */}
<div className="hidden md:flex space-x-8">
{['Software Engineering', 'Teaching & Lecturing', 'Esports Broadcasting', 'Video Editing'].map((item) => (
<button
key={item}
className="text-gray-600 hover:text-indigo-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
onClick={() => setActiveSection(item)}
>
{item}
</button>
))}
</div>
{/* Mobile Menu Button */}
<div className="md:hidden">
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer"
>
<i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
</button>
</div>
</div>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden bg-white border-t border-gray-100">
<div className="px-4 py-2 space-y-2">
{['Software Engineering', 'Teaching & Lecturing', 'Esports Broadcasting', 'Video Editing'].map((item) => (
<button
key={item}
className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
onClick={() => {
setActiveSection(item);
setIsMenuOpen(false);
}}
>
{item}
</button>
))}
</div>
</div>
)}
</nav>
{/* Hero Section */}
<div className="relative pt-16">
<div className="absolute inset-0 overflow-hidden">
<img
src="https://public.readdy.ai/ai/img_res/cf7a97e21823647328876ec5ab3b72bf.jpg"
className="w-full h-full object-cover object-top"
alt="Background"
/>
</div>
<div className="relative max-w-7xl mx-auto px-4 py-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="text-white">
<h1 className="text-5xl font-bold mb-6">Expert Software Engineer & Technical Leader</h1>
<p className="text-xl mb-8 opacity-90">
Specializing in software engineering and game development with a proven track record of delivering high-impact solutions. Leading technical innovation across education, esports, and content creation platforms with over a decade of experience.
</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors !rounded-button whitespace-nowrap cursor-pointer">
View Projects
</button>
</div>
<div className="flex justify-center">
<div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
<img
src="https://public.readdy.ai/ai/img_res/792abfd142d5625a71fa5fc95338eac2.jpg"
className="w-full h-full object-cover object-top"
alt="Profile"
/>
</div>
</div>
</div>
</div>
</div>
{/* Skills Navigation */}
<div className="max-w-7xl mx-auto px-4 py-20">
<h2 className="text-3xl font-bold text-center mb-12">Explore My Skills</h2>
<div className="grid md:grid-cols-3 gap-8">
{Object.entries(skillsData).map(([skill, level]) => (
<div
key={skill}
className={`group relative overflow-hidden rounded-xl cursor-pointer ${
skill === 'Software Engineering' ? 'md:col-span-3 h-96' : 'md:col-span-1 h-64'
}`}
onClick={() => setActiveSection(skill)}
>
<div className="absolute inset-0">
<img
src={`https://readdy.ai/api/search-image?query=modern minimalist illustration representing ${skill} with subtle technology elements and professional workspace background in cool tones&width=400&height=300&seq=${skill}&orientation=landscape`}
className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
alt={skill}
/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/40"></div>
</div>
<div className="relative p-8">
<h3 className={`${skill === 'Software Engineering' ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-2`}>{skill}</h3>
<div className="flex items-center">
<div className="flex-1 bg-white/20 h-2 rounded-full">
<div
className="bg-white h-full rounded-full"
style={{ width: `${level}%` }}
></div>
</div>
<span className="ml-3 text-white font-semibold">{level}%</span>
</div>
<p className="text-white/80 mt-4">Click to explore my {skill.toLowerCase()} projects and achievements</p>
<i className="fa-solid fa-arrow-right text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></i>
</div>
</div>
))}
</div>
</div>
{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col items-center justify-center">
<div className="text-2xl font-bold mb-8">Alexander Wright</div>
<div className="flex space-x-8 mb-8">
<a href="https://github.com/alexanderwright" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition-colors">
<i className="fa-brands fa-github"></i>
</a>
<a href="https://linkedin.com/in/alexanderwright" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition-colors">
<i className="fa-brands fa-linkedin"></i>
</a>
<a href="https://twitter.com/alexanderwright" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition-colors">
<i className="fa-brands fa-twitter"></i>
</a>
<a href="https://youtube.com/@alexanderwright" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition-colors">
<i className="fa-brands fa-youtube"></i>
</a>
<a href="https://twitch.tv/alexanderwright" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-400 transition-colors">
<i className="fa-brands fa-twitch"></i>
</a>
</div>
<div className="text-gray-400 text-sm">
© {new Date().getFullYear()} Alexander Wright. All rights reserved.
</div>
</div>
</div>
</footer>
</div>
);
};
export default App
