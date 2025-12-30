import { useState, useEffect } from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function UserGeneralDetails() {
  const roles = [
    "React Developer 💻",
    "Django Developer 🐍",
    "Full Stack Engineer 🚀",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Hi, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Hemanth Goud
            </h1>
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 transition-all duration-500">
                {roles[currentRole]}
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
              I craft scalable web applications that merge creativity and
              performance. Passionate about building user-focused designs and
              solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-white rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/hemanth-user13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
              >
                <Github
                  size={24}
                  className="text-slate-700 dark:text-slate-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/bolgum-hemanth-goud-722611247/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
              >
                <Linkedin
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              </a>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-2xl flex items-center justify-center">
                <div className="text-[200px]">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
