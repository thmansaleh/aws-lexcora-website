import React, { useState } from 'react';
import { Language, InsightArticle } from '../types';
import { CONTENT } from '../constants';
import { Search, Clock, Calendar, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { Button } from './Button';

interface InsightsPageProps {
  lang: Language;
  onArticleClick?: (id: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ lang, onArticleClick }) => {
  const t = CONTENT[lang].insightsPage;
  const [activeCategory, setActiveCategory] = useState(t.categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleReadMore = (id: string) => {
    if (onArticleClick) {
      onArticleClick(id);
    }
  };

  // Filter Logic
  const filteredArticles = t.items.filter((article: InsightArticle) => {
    const matchesCategory = activeCategory === t.categories[0] || 
                            (activeCategory === "Regulatory" && article.category === "Regulatory") ||
                            (activeCategory === "تنظيمي" && article.category === "تنظيمي") ||
                            // Simplified logic for demo purposes, robust apps would use IDs
                            article.category === activeCategory;
    
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-lexcora-gold font-bold tracking-widest text-sm uppercase mb-2 block animate-fade-in-up">
            {lang === 'en' ? 'Knowledge Base' : 'قاعدة المعرفة'}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.pageSubtitle}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" size={18} />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {t.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-lexcora-blue text-white' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, idx) => (
              <article 
                key={article.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full animate-fade-in-up"
                style={{ animationDelay: `${400 + (idx * 100)}ms` }}
              >
                {/* Image */}
                <div 
                  className="h-48 overflow-hidden relative cursor-pointer"
                  onClick={() => handleReadMore(article.id)}
                >
                   <div className="absolute inset-0 bg-lexcora-blue/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <span className="absolute top-4 left-4 z-20 bg-lexcora-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>

                  <h3 
                    className="font-serif text-xl font-bold text-lexcora-blue mb-3 leading-snug group-hover:text-lexcora-gold transition-colors cursor-pointer"
                    onClick={() => handleReadMore(article.id)}
                  >
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 flex items-center gap-1">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-500">
                      By <span className="text-lexcora-blue">{article.author}</span>
                    </div>
                    <button 
                      onClick={() => handleReadMore(article.id)}
                      className="text-sm font-bold text-lexcora-gold hover:text-yellow-500 flex items-center gap-1 transition-colors"
                    >
                      {t.readMore} <Arrow size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-24">
               <p className="text-slate-400 text-lg">No articles found matching your criteria.</p>
               <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(''); setActiveCategory(t.categories[0]); }}>
                 Clear Filters
               </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};