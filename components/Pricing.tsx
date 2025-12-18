import React, { useState } from 'react';
import { Language, PricingTier, View } from '../types';
import { CONTENT } from '../constants';
import { Check, Star, Users, Gift, BadgePercent, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { PaymentModal } from './PaymentModal';
import { ReferralModal } from './ReferralModal';

interface PricingProps {
  lang: Language;
  onNavigate: (view: View, sectionId?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ lang, onNavigate }) => {
  const t = CONTENT[lang].pricing;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleTierClick = (tier: PricingTier, key: string) => {
    // Logic to route based on tier type
    if (key === 'starter') {
      // Starter usually redirects to free trial sign up
      onNavigate('trial');
    } else if (key === 'professional') {
      // Professional opens payment gateway
      setSelectedTier(tier);
      setIsPaymentOpen(true);
    } else if (key === 'enterprise') {
      // Enterprise redirects to contact
      onNavigate('home', 'footer');
    }
  };

  const renderTier = (tier: PricingTier, key: string) => {
    const isAnnual = billingCycle === 'annually';
    const price = isAnnual ? tier.priceAnnually : tier.priceMonthly;
    
    return (
      <div 
        key={key}
        className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
          tier.highlight 
            ? 'bg-lexcora-blue text-white shadow-2xl scale-105 z-10 border-2 border-lexcora-gold' 
            : 'bg-white text-slate-800 shadow-xl border border-slate-100 hover:border-lexcora-gold/30'
        }`}
      >
        {tier.highlight && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lexcora-gold text-lexcora-blue text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Most Popular
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(tier.stars)].map((_, i) => (
              <Star key={i} size={16} className="text-lexcora-gold fill-current" />
            ))}
          </div>
          <h3 className={`text-2xl font-serif font-bold ${tier.highlight ? 'text-white' : 'text-lexcora-blue'}`}>
            {tier.name}
          </h3>
          <p className={`text-sm mt-2 ${tier.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
            {tier.minUsers}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{price}</span>
            <span className={`text-sm ${tier.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
               {tier.periodLabel}
            </span>
          </div>
          {isAnnual && tier.priceAnnually !== "Custom" && tier.priceAnnually !== "مخصص" && (
            <div className="text-xs text-green-500 font-semibold mt-2 flex items-center gap-1">
              <BadgePercent size={14} /> {t.saveLabel}
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4 mb-8">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
              <div className={`mt-0.5 min-w-[16px] ${tier.highlight ? 'text-lexcora-gold' : 'text-green-600'}`}>
                <Check size={16} />
              </div>
              <span className={tier.highlight ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          variant={tier.highlight ? 'primary' : 'secondary'} 
          fullWidth
          className={!tier.highlight ? '!bg-slate-100 !text-lexcora-blue hover:!bg-slate-200 !border-slate-200' : ''}
          onClick={() => handleTierClick(tier, key)}
        >
          {tier.cta} <Arrow size={16} />
        </Button>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-lexcora-gold font-bold tracking-widest text-sm uppercase mb-2 block animate-fade-in-up">
            {lang === 'en' ? 'Pricing Plans' : 'باقات الأسعار'}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.pageSubtitle}
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-lexcora-blue text-white shadow-md' 
                  : 'text-slate-500 hover:text-lexcora-blue'
              }`}
            >
              {t.toggleMonthly}
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingCycle === 'annually' 
                  ? 'bg-lexcora-blue text-white shadow-md' 
                  : 'text-slate-500 hover:text-lexcora-blue'
              }`}
            >
              {t.toggleAnnual}
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                -16%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto items-start">
          {renderTier(t.tiers.starter, 'starter')}
          {renderTier(t.tiers.professional, 'professional')}
          {renderTier(t.tiers.enterprise, 'enterprise')}
        </div>

        {/* Additional Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Discounts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-lexcora-blue rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lexcora-blue">{t.discounts.title}</h3>
                <p className="text-sm text-slate-500">{t.discounts.subtitle}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-500 font-semibold">
                  <tr>
                    <th className="px-6 py-3">{t.discounts.tableHeadUser}</th>
                    <th className="px-6 py-3">{t.discounts.tableHeadDiscount}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {t.discounts.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-slate-700">{item.range}</td>
                      <td className="px-6 py-3 text-green-600 font-bold">{item.discount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-4 italic">{t.discounts.note}</p>
          </div>

          {/* Referral */}
          <div className="bg-lexcora-blue rounded-2xl p-8 shadow-xl text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-lexcora-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-white/10 text-lexcora-gold rounded-lg backdrop-blur-sm">
                <Gift size={24} />
              </div>
              <h3 className="font-bold text-lg">{t.referral.title}</h3>
            </div>

            <ul className="space-y-4 relative z-10">
              <li className="flex gap-4 items-start">
                <div className="mt-1 min-w-[20px] text-lexcora-gold">
                  <Check size={20} />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{t.referral.item1}</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 min-w-[20px] text-lexcora-gold">
                  <Check size={20} />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{t.referral.item2}</p>
              </li>
            </ul>

            <Button 
              variant="primary" 
              className="mt-8 relative z-10 self-start"
              onClick={() => setIsReferralOpen(true)}
            >
              {lang === 'en' ? 'Join Referral Program' : 'انضم لبرنامج الإحالة'}
            </Button>
          </div>

        </div>
      </div>
      
      <PaymentModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        tier={selectedTier}
        billingCycle={billingCycle}
        lang={lang}
      />

      <ReferralModal
        isOpen={isReferralOpen}
        onClose={() => setIsReferralOpen(false)}
        lang={lang}
      />
    </div>
  );
};