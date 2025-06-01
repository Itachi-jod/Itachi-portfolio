
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics platform for social media managers to track performance, schedule posts, and analyze engagement metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["React", "D3.js", "Python", "Redis"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-indigo-100 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
