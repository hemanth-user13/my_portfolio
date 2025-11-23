import { Award, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "Jan 2024",
      icon: "⚛️",
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "Dec 2023",
      icon: "🐍",
    },
    {
      title: "Django Web Framework",
      issuer: "Udemy",
      date: "Nov 2023",
      icon: "🌐",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "Oct 2023",
      icon: "💻",
    },
    {
      title: "REST API Development",
      issuer: "Coursera",
      date: "Sep 2023",
      icon: "🔌",
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "Udemy",
      date: "Aug 2023",
      icon: "📚",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl dark:text-white font-bold text-slate-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-white max-w-2xl mx-auto">
            Continuous learning and professional development through certified
            courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl  flex-shrink-0 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg dark:text-white font-bold text-slate-900 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 dark:text-white text-slate-600 text-sm mb-1">
                    <Award size={16} className="text-blue-600" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center dark:text-white gap-2 text-slate-500 text-sm">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
