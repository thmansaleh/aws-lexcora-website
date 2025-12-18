import React, { useEffect } from 'react';
import { Language, InsightArticle } from '../types';
import { CONTENT } from '../constants';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Printer, Bookmark } from 'lucide-react';
import { Button } from './Button';

interface ArticleDetailProps {
  lang: Language;
  articleId: string;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ lang, articleId, onBack }) => {
  const t = CONTENT[lang].insightsPage;
  const article = t.items.find(item => item.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const handleSubscribeClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-slate-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-lexcora-blue mb-4">Article Not Found</h2>
        <Button onClick={onBack} variant="outline">{t.backButton}</Button>
      </div>
    );
  }

  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <article className="min-h-screen pt-24 pb-20 bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="h-full bg-lexcora-gold w-0" id="reading-progress"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-lexcora-blue transition-colors mb-8 font-medium"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-lexcora-gold group-hover:text-lexcora-blue transition-colors">
            <BackArrow size={16} />
          </div>
          {t.backButton}
        </button>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-lexcora-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            {article.tags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-lexcora-blue leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-lexcora-gold rounded-full flex items-center justify-center text-lexcora-blue font-bold text-lg">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lexcora-blue text-sm flex items-center gap-2">
                  <User size={14} className="text-lexcora-gold" /> {article.author}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-lexcora-blue hover:bg-slate-50 rounded-full transition-colors" title="Share">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-lexcora-blue hover:bg-slate-50 rounded-full transition-colors" title="Save">
                <Bookmark size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-lexcora-blue hover:bg-slate-50 rounded-full transition-colors" title="Print" onClick={() => window.print()}>
                <Printer size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <img src={article.image} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="lead text-xl text-slate-600 font-serif italic mb-8 border-l-4 border-lexcora-gold pl-6">
            {article.excerpt}
          </p>
          
          {article.content && article.content.length > 0 ? (
            article.content.map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))
          ) : (
            <div className="p-8 bg-slate-50 rounded-lg text-center text-slate-400 italic border border-dashed border-slate-300">
              Content placeholder. Real article content would be rendered here.
            </div>
          )}
        </div>

        {/* Footer / Call to Action */}
        <div className="mt-16 bg-lexcora-blue rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lexcora-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold mb-4">
              {lang === 'en' ? 'Stay Updated with LEXCORA' : 'ابق على اطلاع مع ليكسكورا'}
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              {lang === 'en' 
                ? "Subscribe to our newsletter for the latest legal insights and regulatory updates delivered to your inbox."
                : "اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى القانونية والتحديثات التنظيمية في صندوق الوارد الخاص بك."}
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary" onClick={handleSubscribeClick}>
                {lang === 'en' ? 'Subscribe Now' : 'اشترك الآن'}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};