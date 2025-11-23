import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with shopping cart, payment integration, and order management.",
      technologies: ["React", "Django", "PostgreSQL", "Stripe"],
      image: "🛒",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Redux", "Django REST", "WebSockets"],
      image: "✅",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and reporting.",
      technologies: ["React", "Django", "Chart.js", "Tailwind"],
      image: "📊",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, comments, and user authentication.",
      technologies: ["React", "Django", "MySQL", "Bootstrap"],
      image: "📝",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      technologies: ["React", "REST API", "Tailwind CSS"],
      image: "🌤️",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolio websites with drag-and-drop builder.",
      technologies: ["React", "Django", "PostgreSQL", "Redux"],
      image: "🎨",
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark:text-white text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-7xl relative z-10 transform group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:border-slate-400 transition-all"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
