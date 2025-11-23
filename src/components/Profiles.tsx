import { Github, Code2, Award, Linkedin } from "lucide-react";

interface Profile {
  name: string;
  icon: any;
  stats: string;
  description: string;
  url: string;
  color: string;
}

export default function Profiles() {
  const profiles: Profile[] = [
    {
      name: "GitHub",
      icon: Github,
      stats: "50+ Repositories",
      description: "Open source contributions and personal projects",
      url: "https://github.com/hemanthgoud",
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "LeetCode",
      icon: Code2,
      stats: "500+ Problems Solved",
      description: "Consistent problem solving and algorithm practice",
      url: "https://leetcode.com/hemanthgoud",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "HackerRank",
      icon: Award,
      stats: "5 Star Python",
      description: "Certified in Python and problem solving",
      url: "https://hackerrank.com/hemanthgoud",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      stats: "500+ Connections",
      description: "Professional network and industry insights",
      url: "https://linkedin.com/in/hemanthgoud",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <section id="profiles" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark:text-white text-slate-900 mb-4">
            Coding Profiles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-white max-w-2xl mx-auto">
            Active on multiple platforms, continuously improving skills and
            contributing to the developer community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${profile.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <profile.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {profile.name}
              </h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {profile.stats}
              </p>
              <p className="text-slate-600 dark:text-white text-sm">
                {profile.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              GitHub Contribution Activity
            </h3>
            <p className="text-slate-600 dark:text-white">
              Consistent contributor with regular commits and open source
              involvement
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-slate-600 dark:text-white">
                Visit my GitHub profile to see my contribution graph and pinned
                repositories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
