import { ExternalLink, Github, Lock } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  internal?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Admin Compliance Master",
      subtitle: "Compliance Platform — Admin Panel",
      description:
        "Admin panel for a multi-tenant compliance management platform covering partner onboarding, customer account management, and user role configuration. Localized into 4 languages so partner firms can operate in their preferred language.",
      technologies: ["React", "Redux", "RBAC", "Tailwind", "i18n"],
      image: "🛠️",
      internal: true,
    },
    {
      title: "Customer Compliance Master",
      subtitle: "Compliance Platform — Customer Portal",
      description:
        "Customer-facing portal for managing regulatory tasks, questionnaires, and compliance workflows with role-based permissions. Optimized performance on screens listing large volumes of regulations/tasks and added document preview and reporting.",
      technologies: [
        "React",
        "Django REST Framework",
        "REST API",
        "Performance Tuning",
      ],
      image: "📋",
      internal: true,
    },
    {
      title: "Omnics Manager",
      subtitle: "Internal Employee Management System — Full Stack",
      description:
        "End-to-end internal tool: designed the authentication module (login, token/session handling, role-based permissions) and REST APIs for the employee directory, project tracking, file management, and leave workflow. Built the React front end including private/group messaging, account settings, and a multi-step onboarding wizard.",
      technologies: [
        "React",
        "Python",
        "Django REST Framework",
        "JWT Auth",
        "MySQL",
      ],
      image: "🏢",
      internal: true,
    },
    {
      title: "react-tailwind-email-editor",
      subtitle: "Open-Source npm Package",
      description:
        "A reusable drag-and-drop email template builder originally built for internal products, later published as an open-source npm package for the React community.",
      technologies: ["React", "Tailwind CSS", "Drag & Drop", "npm"],
      image: "📦",
      liveUrl: "https://www.npmjs.com/package/react-tailwind-email-editor",
      githubUrl: "https://github.com/hemanth-user13",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark:text-white text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real work from my time at Omnics Technologies, plus an open-source
            package built along the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-600 dark:to-black p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-7xl relative z-10 transform group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {project.subtitle}
                </p>
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

                {project.internal ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-sm">
                    <Lock size={16} />
                    Enterprise / internal project — code and demo are private
                  </div>
                ) : (
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                      >
                        <ExternalLink size={16} />
                        View on npm
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:border-slate-400 transition-all"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
