import { Trophy, Package, GraduationCap, BookOpen } from "lucide-react";

interface InfoCard {
  title: string;
  detail: string;
  meta: string;
  icon: any;
}

export default function Certifications() {
  const achievements: InfoCard[] = [
    {
      title: "2nd Rank",
      detail: "University-level coding competition",
      meta: "Achievement",
      icon: Trophy,
    },
    {
      title: "react-tailwind-email-editor",
      detail: "Published an open-source npm package for a React email editor",
      meta: "npmjs.com/package/react-tailwind-email-editor",
      icon: Package,
    },
  ];

  const education: InfoCard[] = [
    {
      title: "B.Tech, Computer Science Engineering",
      detail: "GITAM University",
      meta: "CGPA: 8.97",
      icon: GraduationCap,
    },
    {
      title: "Intermediate (MPC)",
      detail: "Higher Secondary",
      meta: "927 / 1000",
      icon: BookOpen,
    },
    {
      title: "SSC",
      detail: "Secondary School",
      meta: "CGPA: 8.5",
      icon: BookOpen,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl dark:text-white font-bold text-slate-900 mb-4">
            Achievements & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A few milestones along the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg dark:text-white font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="dark:text-slate-300 text-slate-600 text-sm mb-1">
                    {item.detail}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                    {item.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Education
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 text-center"
            >
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-cyan-600 dark:text-cyan-400" size={28} />
              </div>
              <h3 className="text-base dark:text-white font-bold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="dark:text-slate-300 text-slate-600 text-sm mb-1">
                {item.detail}
              </p>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                {item.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
