import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Linkedin } from 'lucide-react';
import { portfolioAPI, Testimonial } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const data = await portfolioAPI.getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, currentIndex]);

  if (loading) {
    return null;
  }

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Testimonials from colleagues, clients, and mentors
          </p>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <Quote className="text-blue-600 dark:text-blue-400 mb-6" size={48} />

            <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold">
                {currentTestimonial.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </p>
              </div>
              {currentTestimonial.linkedin_url && (
                <a
                  href={currentTestimonial.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-50 dark:bg-slate-700 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                >
                  <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-slate-700 dark:text-slate-300" size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-slate-700 dark:text-slate-300" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
