import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import { Language, View } from '../types';
import { CONTENT } from '../constants';
import { Button } from './Button';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onLoginClick: () => void;
  currentView: View;
  onNavigate: (view: View, sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onLoginClick, currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (view: View, sectionId?: string) => {
    onNavigate(view, sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.home, view: 'home' as const, sectionId: undefined },
    { label: t.features, view: 'home' as const, sectionId: 'features' },
    { label: t.caseStudies, view: 'case-studies' as const, sectionId: undefined },
    { label: t.pricing, view: 'pricing' as const, sectionId: undefined },
    { label: t.insights, view: 'insights' as const, sectionId: undefined },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-lexcora-blue/95 backdrop-blur-md shadow-xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group"
          aria-label="Go to Homepage"
        >
          <div className="w-10 h-10 bg-lexcora-gold rounded-sm flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
             <span className="text-lexcora-blue font-serif font-bold text-2xl">L</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-white' : 'text-lexcora-blue'}`}>
            LEXCORA
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleNavClick(item.view, item.sectionId)}
              className={`text-sm font-medium hover:text-lexcora-gold transition-colors relative group ${isScrolled ? 'text-gray-300' : 'text-lexcora-blue'}`}
            >
              {item.label}
              {/* Active Indicator */}
              {currentView === item.view && (!item.sectionId || isScrolled) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lexcora-gold transform scale-x-100 transition-transform duration-300"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-lexcora-gold ${isScrolled ? 'text-white' : 'text-lexcora-blue'}`}
            aria-label={lang === 'en' ? "Switch to Arabic" : "Switch to English"}
          >
            <Globe size={16} />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          
          <Button 
            variant="outline" 
            className={`!py-2 !px-4 ${!isScrolled && '!border-lexcora-blue !text-lexcora-blue hover:!bg-lexcora-blue/5'}`}
            onClick={onLoginClick}
            aria-label="Open Client Portal Login"
          >
            <User size={16} />
            {t.portal}
          </Button>

          <Button 
            variant="primary" 
            className="!py-2 !px-4" 
            aria-label="Start Free Trial"
            onClick={() => handleNavClick('trial')}
          >
            {t.freeTrial}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-lexcora-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-lexcora-blue border-t border-gray-800 p-6 flex flex-col gap-4 shadow-2xl lg:hidden animate-fade-in-up">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleNavClick(item.view, item.sectionId)}
              className="text-left text-gray-300 hover:text-lexcora-gold text-lg py-2 border-b border-gray-800"
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-gray-700 my-2"></div>
          <button 
            onClick={toggleLang} 
            className="text-left text-gray-300 hover:text-lexcora-gold flex items-center gap-2 py-2"
            aria-label={lang === 'en' ? "Switch to Arabic" : "Switch to English"}
          >
            <Globe size={18} /> {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <Button onClick={onLoginClick} variant="outline" fullWidth aria-label="Open Client Portal Login">{t.portal}</Button>
          <Button variant="primary" fullWidth aria-label="Start Free Trial" onClick={() => handleNavClick('trial')}>{t.freeTrial}</Button>
        </div>
      )}
    </header>
  );
};