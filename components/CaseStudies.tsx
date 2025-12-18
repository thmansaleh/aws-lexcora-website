import React from 'react';
import { Language, View } from '../types';
import { CONTENT } from '../constants';
import { ArrowRight, ArrowLeft, Trophy, Target, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface CaseStudiesProps {
  lang: Language;
  onNavigate: (view: View, sectionId?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang, onNavigate }) => {
  const t = CONTENT[lang].caseStudies;
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-lexcora-gold font-bold tracking-widest text-sm uppercase mb-2 block animate-fade-in-up">
            {lang === 'en' ? 'Client Success' : 'نجاح العملاء'}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.pageSubtitle}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {t.items.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row animate-fade-in-up group`}
              style={{ animationDelay: `${300 + (index * 150)}ms` }}
            >
              {/* Image Section */}
              <div className={`lg:w-2/5 relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-lexcora-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.firmName} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-lexcora-blue font-bold text-sm shadow-lg border border-white/50">
                   {item.firmName}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                <div className={`absolute top-0 w-1 h-full bg-lexcora-gold ${index % 2 === 1 ? 'right-0 lg:left-0 lg:right-auto' : 'left-0'}`}></div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-lexcora-blue mb-6">
                  {item.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-red-500 font-semibold uppercase text-xs tracking-wider">
                      <Target size={16} /> {lang === 'en' ? 'The Challenge' : 'التحدي'}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-3 text-green-600 font-semibold uppercase text-xs tracking-wider">
                      <CheckCircle size={16} /> {lang === 'en' ? 'The Solution' : 'الحل'}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200 rtl:divide-x-reverse">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center px-2">
                        <div className="text-3xl md:text-4xl font-bold text-lexcora-gold mb-1 font-serif">
                          {metric.value}
                        </div>
                        <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center bg-lexcora-blue rounded-3xl p-12 relative overflow-hidden text-white shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-lexcora-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
             <Trophy size={48} className="text-lexcora-gold mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.ctaTitle}</h2>
             <Button 
               variant="primary" 
               className="mx-auto" 
               aria-label={t.ctaButton}
               onClick={() => onNavigate('case-studies', 'footer')}
             >
               {t.ctaButton} <Arrow size={18} />
             </Button>
           </div>
        </div>

      </div>
    </div>
  );
};