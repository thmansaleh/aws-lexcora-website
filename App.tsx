import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Insights } from './components/Insights';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { ChatWidget } from './components/ChatWidget';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { TrialSignup } from './components/TrialSignup';
import { InsightsPage } from './components/InsightsPage';
import { ArticleDetail } from './components/ArticleDetail';
import { Pricing } from './components/Pricing';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Language, View } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    // Handle RTL/LTR document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Switch font based on language
    if (lang === 'ar') {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [lang]);

  // Handle scrolling when navigation occurs
  const handleNavigate = (view: View, sectionId?: string) => {
    setCurrentView(view);
    // If navigating away from article, clear selection (optional, but good for cleanliness)
    if (view !== 'article') {
      setSelectedArticleId(null);
    }
    
    // Defer scrolling to next tick to ensure render updates
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleArticleClick = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        lang={lang} 
        setLang={setLang} 
        onLoginClick={() => setLoginOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero lang={lang} onNavigate={handleNavigate} />
            <Features lang={lang} />
            <Testimonials lang={lang} />
            <Insights lang={lang} onNavigate={handleNavigate} onArticleClick={handleArticleClick} />
          </>
        )}
        {currentView === 'case-studies' && (
          <CaseStudies lang={lang} onNavigate={handleNavigate} />
        )}
        {currentView === 'trial' && (
          <TrialSignup lang={lang} />
        )}
        {currentView === 'pricing' && (
          <Pricing lang={lang} onNavigate={handleNavigate} />
        )}
        {currentView === 'privacy' && (
          <PrivacyPolicy lang={lang} onNavigate={handleNavigate} />
        )}
        {currentView === 'insights' && (
          <InsightsPage lang={lang} onArticleClick={handleArticleClick} />
        )}
        {currentView === 'article' && selectedArticleId && (
          <ArticleDetail 
            lang={lang} 
            articleId={selectedArticleId} 
            onBack={() => handleNavigate('insights')}
          />
        )}
      </main>

      <Footer lang={lang} onNavigate={handleNavigate} />
      
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} lang={lang} />
      <ChatWidget lang={lang} />
    </div>
  );
}

export default App;