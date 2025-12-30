import { Code, Lightbulb, Target } from "lucide-react";
import MyPic from "../media/hemanth_pic.png";
export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: Target,
      title: "User Focused",
      description: "Building applications with exceptional user experience",
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
              I'm a passionate Full Stack Developer specializing in{" "}
              <span className="font-semibold text-blue-600">React</span> and{" "}
              <span className="font-semibold text-blue-600">Django</span>. I
              love solving complex problems and turning ideas into elegant
              digital solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              With a strong foundation in both frontend and backend
              technologies, I create scalable web applications that deliver
              exceptional user experiences. My approach combines technical
              expertise with creative problem-solving to build products that
              make a real impact.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay at
              the forefront of web development. Whether it's crafting intuitive
              interfaces or architecting robust backend systems, I'm driven by
              the challenge of building something meaningful.
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
