import { Code, Lightbulb, Target } from "lucide-react";
import MyPic from "../media/hemanth_pic.png";
export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "React.js front ends paired with Python/Django REST Framework back ends",
    },
    {
      icon: Lightbulb,
      title: "Role-Based Access & API Security",
      description:
        "Designing token/JWT authentication and RBAC for multi-tenant platforms",
    },
    {
      icon: Target,
      title: "Performance-Focused",
      description:
        "Optimizing high-volume listing screens and backend queries for speed",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <img src={MyPic} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a Full Stack Developer with{" "}
              <span className="font-semibold text-blue-600">
                2.4 years of experience
              </span>{" "}
              building scalable web applications end-to-end — from{" "}
              <span className="font-semibold text-blue-600">React.js</span>{" "}
              front ends to{" "}
              <span className="font-semibold text-blue-600">
                Python / Django REST Framework
              </span>{" "}
              back ends. I currently work as a Software Developer at{" "}
              <span className="font-semibold text-blue-600">
                Omnics Technologies Pvt Ltd
              </span>
              , where I build role-based, multi-tenant compliance platforms
              and internal productivity tools.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My day-to-day work spans designing REST APIs, implementing
              token/JWT-based authentication and role-based access control
              (RBAC), and building both the admin and customer-facing sides of
              multi-tenant products — with a strong focus on performance,
              security, and clean, maintainable code across the stack.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond my day job, I've published an open-source npm package for
              a React email editor, and I secured 2nd rank in a
              university-level coding competition. I'm constantly learning
              and exploring new technologies to stay at the forefront of web
              development.
            </p>

            <div className="grid gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
