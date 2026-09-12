import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import VisitorCounter from "./VisitorCounter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeMenuOpen, setIsResumeMenuOpen] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resumeMenuRef.current &&
        !resumeMenuRef.current.contains(e.target as Node)
      ) {
        setIsResumeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              HG
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  e.currentTarget?.blur();
                  scrollToSection(item.href);
                }}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
            <div className="relative" ref={resumeMenuRef}>
              <button
                onClick={() => setIsResumeMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Resume
                <ChevronDown size={14} />
              </button>
              {isResumeMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                  <a
                    href="/resume-fullstack.pdf"
                    download="Bolgum_Hemanth_Goud_FullStack_Resume.pdf"
                    onClick={() => setIsResumeMenuOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    Full Stack Resume
                  </a>
                  <a
                    href="/resume-frontend.pdf"
                    download="Bolgum_Hemanth_Goud_Frontend_Resume.pdf"
                    onClick={() => setIsResumeMenuOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors border-t border-slate-100 dark:border-slate-700"
                  >
                    Frontend Resume
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden text-slate-700 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t dark:border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="/resume-fullstack.pdf"
                download="Bolgum_Hemanth_Goud_FullStack_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Full Stack Resume
              </a>
              <a
                href="/resume-frontend.pdf"
                download="Bolgum_Hemanth_Goud_Frontend_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
              >
                <Download size={16} />
                Frontend Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
