import Preloader from "./components/Preloader";
import NavbarEnhanced from "./components/NavbarEnhanced";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import ContactEnhanced from "./components/ContactEnhanced";
import Footer from "./components/Footer";
import ChatbotEnhanced from "./components/ChatbotEnhanced";
import EasterEgg from "./components/EasterEgg";
import CodeAnimation from "./components/CodeAnimation";
import { useTimeBasedTheme } from "./hooks/useTimeBasedTheme";
import UserGeneralDetails from "./components/Hero";

function App() {
  useTimeBasedTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Preloader />
      <NavbarEnhanced />
      <UserGeneralDetails />

      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet Hemanth Through Code
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Watch my introduction come alive, line by line
            </p>
          </div>
          <CodeAnimation />
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Certifications />
      <Blog />
      <Testimonials />
      <ContactEnhanced />
      <Footer />
      <ChatbotEnhanced />
      <EasterEgg />
    </div>
  );
}

export default App;
