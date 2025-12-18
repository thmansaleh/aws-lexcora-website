import React, { useState } from 'react';
import { Language, View } from '../types';
import { CONTENT } from '../constants';
import { Button } from './Button';
import { getLegalAssistantResponse, AssistantResponse } from '../services/geminiService';
import { Search, Loader2, Sparkles, ExternalLink, Scale } from 'lucide-react';

interface InsightsProps {
  lang: Language;
  onNavigate: (view: View) => void;
  onArticleClick?: (id: string) => void;
}

export const Insights: React.FC<InsightsProps> = ({ lang, onNavigate, onArticleClick }) => {
  const t = CONTENT[lang].insights;
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AssistantResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const res = await getLegalAssistantResponse(query, lang);
    setResponse(res);
    setLoading(false);
  };

  const handleArticleClick = (id: string) => {
    if (onArticleClick) {
      onArticleClick(id);
    } else {
      onNavigate('insights');
    }
  };

  return (
    <section id="insights" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-lexcora-blue mb-4">{t.title}</h2>
            <p className="text-lg text-slate-600">{t.subtitle}</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => onNavigate('insights')}
            aria-label="View all insights articles"
          >
            {lang === 'en' ? 'View All Insights' : 'عرض جميع الرؤى'}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Articles */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {t.articles.map((article, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group border border-slate-100 flex flex-col">
                <div 
                  className="h-48 overflow-hidden relative cursor-pointer" 
                  onClick={() => handleArticleClick(article.id)}
                >
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-lexcora-gold uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs text-slate-400">{article.date}</span>
                  </div>
                  <h3 
                    className="font-serif text-xl font-bold text-lexcora-blue mb-2 leading-snug cursor-pointer hover:text-lexcora-gold transition-colors"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    {article.title}
                  </h3>
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleArticleClick(article.id)}
                      className="inline-block mt-2 text-sm font-semibold text-slate-500 hover:text-lexcora-blue underline decoration-lexcora-gold/50 bg-transparent border-none p-0 cursor-pointer"
                      aria-label={`Read analysis about ${article.title}`}
                    >
                      {lang === 'en' ? 'Read Analysis' : 'اقرأ التحليل'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Demo Widget */}
          <div className="lg:col-span-1">
            <div className="bg-lexcora-blue rounded-2xl p-8 text-white h-full relative overflow-hidden shadow-2xl flex flex-col">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-lexcora-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6 text-lexcora-gold">
                  <Sparkles size={24} />
                  <h3 className="text-xl font-bold">{t.demoTitle}</h3>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex-1 overflow-y-auto min-h-[200px]" aria-live="polite">
                    {loading ? (
                       <div className="flex items-center justify-center h-full text-lexcora-gold">
                         <Loader2 className="animate-spin mr-2" /> {lang === 'en' ? 'Analyzing UAE Legislation...' : 'جارٍ تحليل التشريعات...'}
                       </div>
                    ) : response ? (
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">{response.text}</p>
                        
                        {response.sources.length > 0 && (
                          <div className="pt-3 border-t border-white/10">
                            <p className="text-xs text-lexcora-gold mb-2 font-bold flex items-center gap-1">
                              <Scale size={12} /> {lang === 'en' ? 'Verified Sources' : 'مصادر موثقة'}
                            </p>
                            <ul className="space-y-1">
                              {response.sources.map((source, i) => (
                                <li key={i}>
                                  <a 
                                    href={source.uri} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-slate-300 hover:text-white flex items-center gap-1 truncate transition-colors"
                                  >
                                    <ExternalLink size={10} /> {source.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center mt-12 opacity-50">
                        <Scale size={32} className="mx-auto mb-2 text-lexcora-gold" />
                        <p className="text-sm italic">{lang === 'en' ? 'Ask about UAE regulations, labour laws, or judicial processes.' : 'اسأل عن اللوائح الإماراتية، قوانين العمل، أو الإجراءات القضائية.'}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative mt-auto">
                    <input 
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 pr-12 text-sm focus:outline-none focus:border-lexcora-gold transition-colors"
                      placeholder={t.demoPlaceholder}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                      aria-label="Ask about UAE Labour Law"
                    />
                    <button 
                      onClick={handleAsk}
                      className="absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-lexcora-gold text-lexcora-blue rounded hover:bg-yellow-400 transition-colors"
                      disabled={loading}
                      aria-label="Submit query"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center">
                    {lang === 'en' 
                      ? "Powered by official UAE Ministry of Justice data." 
                      : "مدعوم ببيانات وزارة العدل الإماراتية الرسمية."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};