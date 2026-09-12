import {
  Building2,
  Code2,
  MapPin,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

interface Role {
  title: string;
  company: string;
  employmentType: "Full-time" | "Internship";
  location: string;
  workMode: string;
  period: string;
  duration: string;
  current: boolean;
  highlights: string[];
  technologies: string[];
}

export default function Experience() {
  const roles: Role[] = [
    {
      title: "Software Developer",
      company: "Omnics Technologies Pvt Ltd",
      employmentType: "Full-time",
      location: "India",
      workMode: "On-site",
      period: "Jun 2024 — Present",
      duration: "",
      current: true,
      highlights: [
        "Developed admin and customer-facing interfaces for a multi-tenant compliance management platform, implementing partner onboarding, customer account management, and regulation/task workflows with role-based access control (RBAC)",
        "Worked as backend developer on an internal employee management system, designing and building REST APIs with Python and Django REST Framework for authentication, employee directory, project tracking, and file management modules",
        "Designed a token-based authentication and authorization system (login, session/JWT handling, and role-based permissions) consumed by both web and admin interfaces",
        "Built the leave request and approval workflow end-to-end, including manager actions and status tracking",
        "Created a reusable drag-and-drop email template builder adopted across multiple products; later published it as an open-source npm package",
        "Built an in-app bug-reporting tool with screenshot capture, helping the support team resolve issues faster",
        "Delivered multilingual support (4 languages) for the compliance platform, and added private/group messaging, account settings, and a multi-step onboarding wizard to the internal employee tool",
        "Improved page-load performance on high-volume regulation/task listing screens and optimized backend queries to reduce response times",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Python",
        "Django REST Framework",
        "MySQL",
        "JWT Auth",
        "RBAC",
        "Tailwind CSS",
      ],
    },
    {
      title: "Python Developer",
      company: "Cyient",
      employmentType: "Internship",
      location: "Hyderabad, Telangana, India",
      workMode: "On-site",
      period: "May 2023 — Jul 2023",
      duration: "3 mos",
      current: false,
      highlights: [
        "Worked as a Python Developer, building and maintaining web applications using Django",
      ],
      technologies: ["Python", "Django", "HTML5"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From a Python internship to full-stack ownership — hands-on
            experience building production web applications since 2023
          </p>
        </div>

        <div className="relative">
          <div className="space-y-10">
            {roles.map((role, index) => (
              <div
                key={`${role.company}-${role.title}`}
                className="relative sm:pl-16"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-0 top-1 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg z-10">
                  {role.employmentType === "Internship" ? (
                    <Code2 className="text-white" size={20} />
                  ) : (
                    <Building2 className="text-white" size={20} />
                  )}
                </div>

                {/* Connector to the next entry — omitted after the last one
                    so the line never dangles past the final card */}
                {index < roles.length - 1 && (
                  <div className="hidden sm:block absolute left-6 top-14 -bottom-10 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500"></div>
                )}

                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                        {role.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {role.company}
                        <span className="text-slate-400 dark:text-slate-500 font-normal">
                          {" "}
                          · {role.employmentType}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {role.period}
                        {role.duration && (
                          <span className="text-slate-400 dark:text-slate-500">
                            · {role.duration}
                          </span>
                        )}
                        {role.current && (
                          <span className="ml-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {role.location} · {role.workMode}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {role.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-slate-700 border border-blue-100 dark:border-slate-600 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
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
      </div>
    </section>
  );
}
