import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = CONTENT[lang].testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % t.items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + t.items.length) % t.items.length);
  };

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [lang]); // Reset on language change

  return (
    <section className="py-24 bg-lexcora-blue text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lexcora-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
          <div className="w-16 h-1 bg-lexcora-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-lexcora-gold w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-lexcora-gold/20">
              <Quote size={32} className="text-lexcora-blue fill-current" />
            </div>

            {/* Carousel Content */}
            <div className="min-h-[250px] flex items-center justify-center">
              {t.items.map((item, idx) => (
                 <div 
                   key={idx}
                   className={`transition-all duration-700 ease-in-out absolute w-full text-center ${
                     idx === activeIndex 
                       ? 'opacity-100 translate-y-0 relative' 
                       : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                   }`}
                 >
                   <div className="flex justify-center gap-1 mb-6 text-lexcora-gold">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   
                   <p className="text-xl md:text-2xl font-serif leading-relaxed text-slate-100 mb-8 italic">
                     "{item.quote}"
                   </p>

                   <div className="flex flex-col items-center">
                     <h4 className="text-lg font-bold text-lexcora-gold">{item.author}</h4>
                     <p className="text-sm text-slate-400">{item.role}</p>
                     <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{item.firm}</p>
                   </div>
                 </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-8 absolute top-1/2 -translate-y-1/2 w-full left-0 px-4 md:-mx-12 md:w-[calc(100%+6rem)] pointer-events-none">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-lexcora-gold text-white flex items-center justify-center transition-all hover:bg-lexcora-gold hover:text-lexcora-blue shadow-lg pointer-events-auto"
                aria-label="Previous testimonial"
              >
                {lang === 'ar' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
              
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-lexcora-gold text-white flex items-center justify-center transition-all hover:bg-lexcora-gold hover:text-lexcora-blue shadow-lg pointer-events-auto"
                aria-label="Next testimonial"
              >
                {lang === 'ar' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {t.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-lexcora-gold' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};