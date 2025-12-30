import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Code2, Mail } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Profiles", href: "#profiles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                HG
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Full Stack Developer specializing in React and Django. Building
              scalable web applications with passion and precision.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/hemanth-user13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bolgum-hemanth-goud-722611247/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="http://leetcode.com/u/hemanth-123/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Code2 size={20} />
              </a>
              <a
                href="bhemanthgoud7878@gmail.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>Hyderabad, India</p>
              <p>bhemanthgoud7878@gmail.com</p>
              <p>+1 (234) 567-890</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            Built with React & Tailwind CSS
          </p>
          <p className="text-slate-400 text-sm text-center">
            2025 Hemanth Goud. All rights reserved.
          </p>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}
