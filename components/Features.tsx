import React, { useState } from 'react';
import { Language, FeatureSection } from '../types';
import { CONTENT } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FeaturesProps {
  lang: Language;
}

const FeatureBlock: React.FC<{ section: FeatureSection; index: number; id?: string }> = ({ section, index, id }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id={id} className={`p-8 rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-lexcora-gold/30 shadow-xl' : 'bg-slate-50 border-transparent hover:bg-white'}`}>
      <button 
        className="w-full flex justify-between items-start cursor-pointer text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`feature-content-${index}`}
        id={`feature-header-${index}`}
      >
        <div>
          <h3 className="text-2xl font-serif font-bold text-lexcora-blue mb-2">{section.title}</h3>
          <p className="text-slate-500">{section.subtitle}</p>
        </div>
        <span className="text-lexcora-gold mt-1">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div 
          id={`feature-content-${index}`}
          role="region"
          aria-labelledby={`feature-header-${index}`}
          className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-in"
        >
          {section.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-100 hover:border-lexcora-gold/50 transition-colors duration-300 group hover:bg-white hover:shadow-sm">
                <div className="w-12 h-12 bg-lexcora-blue text-lexcora-gold rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-lexcora-gold group-hover:text-lexcora-blue group-hover:shadow-lg group-hover:shadow-lexcora-gold/20">
                  <Icon size={24} className="transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <h4 className="font-semibold text-lg text-lexcora-blue mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = CONTENT[lang].features;

  const featureList = [
    { data: t.productivity, id: 'features-productivity' },
    { data: t.client, id: 'features-client' },
    { data: t.governance, id: 'features-governance' },
    { data: t.intelligence, id: 'features-intelligence' },
    { data: t.integration, id: 'features-integration' }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-lexcora-gold font-bold tracking-widest text-sm uppercase">LEXCORA ERP</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mt-4">{t.sectionTitle}</h2>
          <div className="w-24 h-1 bg-lexcora-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {featureList.map((item, idx) => (
            <FeatureBlock key={idx} section={item.data} index={idx} id={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};