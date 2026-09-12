import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Redux", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "Django", level: 88 },
        { name: "Django REST Framework", level: 88 },
        { name: "JWT / Token Auth", level: 85 },
      ],
    },
    {
      category: "Database",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Query Optimization", level: 80 },
        { name: "ORM Data Modeling", level: 85 },
      ],
    },
    {
      category: "Tools & Practices",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Agile / Scrum", level: 85 },
        { name: "Unit Testing & Debugging", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl dark:text-white font-bold text-slate-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
