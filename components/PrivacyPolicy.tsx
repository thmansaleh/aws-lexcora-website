import React, { useEffect } from 'react';
import { Language, View } from '../types';
import { CONTENT } from '../constants';
import { ArrowLeft, ArrowRight, Shield, Mail } from 'lucide-react';
import { Button } from './Button';

interface PrivacyPolicyProps {
  lang: Language;
  onNavigate: (view: View, sectionId?: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang, onNavigate }) => {
  const t = CONTENT[lang].privacyPolicy;
  const Arrow = lang === 'ar' ? ArrowRight : ArrowLeft;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2 text-slate-500 hover:text-lexcora-blue transition-colors mb-8 font-medium"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-lexcora-gold group-hover:text-lexcora-blue transition-colors">
            <Arrow size={16} />
          </div>
          {lang === 'en' ? 'Back to Home' : 'العودة للصفحة الرئيسية'}
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8 animate-fade-in-up">
          <div className="w-16 h-16 bg-lexcora-blue rounded-2xl flex items-center justify-center text-lexcora-gold mb-6 shadow-lg shadow-lexcora-blue/20">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mb-4">
            {t.title}
          </h1>
          <p className="text-slate-500 font-medium">
            {t.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-lg text-slate-700 leading-relaxed mb-8">
              {t.intro}
            </p>

            <div className="space-y-12">
              {t.sections.map((section, idx) => (
                <section key={idx} className="border-t border-slate-100 pt-8 first:border-0 first:pt-0">
                  <h2 className="text-2xl font-bold text-lexcora-blue mb-6">
                    {section.heading}
                  </h2>
                  <ul className="space-y-4">
                    {section.content.map((point, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-lexcora-gold mt-2.5 shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-12 p-8 bg-lexcora-blue rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="text-lexcora-gold" size={24} />
                {t.contact.heading}
              </h3>
              <p className="text-slate-300 mb-4">{t.contact.text}</p>
              <a 
                href={`mailto:${t.contact.email}`} 
                className="inline-block text-lexcora-gold font-bold hover:text-white transition-colors border-b-2 border-lexcora-gold hover:border-white pb-1"
              >
                {t.contact.email}
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};