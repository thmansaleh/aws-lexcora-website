import React, { useState } from 'react';
import { X, Copy, Share2, Gift, QrCode, CheckCircle2, ArrowRight, Loader2, Mail } from 'lucide-react';
import { Button } from './Button';
import { Language } from '../types';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, lang }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API delay and code generation
    setTimeout(() => {
      const uniqueSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      setReferralCode(`LEX-${uniqueSuffix}`);
      setStep(2);
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://lexcora.ae/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Join LEXCORA',
      text: lang === 'en' 
        ? `Use my referral code ${referralCode} to get 15% off your first month on LEXCORA!` 
        : `استخدم رمز الإحالة الخاص بي ${referralCode} للحصول على خصم 15% على شهرك الأول في ليكسكورا!`,
      url: `https://lexcora.ae/signup?ref=${referralCode}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        handleCopy();
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handleClose = () => {
    setStep(1);
    setEmail('');
    onClose();
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lexcora.ae/signup?ref=${referralCode}&color=0F172A`;

  // Content Dictionary for this component
  const t = {
    en: {
      title: "Partner Referral Program",
      subtitle: "Join our network and earn rewards for every law firm you refer.",
      step1: {
        label: "Enter your work email to generate your unique link",
        placeholder: "name@firm.ae",
        btn: "Generate Referral Code",
        processing: "Generating..."
      },
      step2: {
        congrats: "You're enrolled!",
        desc: "Share this code or QR with your network.",
        codeLabel: "Your Unique Referral Code",
        copy: "Copy Link",
        copied: "Copied!",
        share: "Share",
        incentive1: "You Earn: 1 Free Month",
        incentive2: "They Get: 15% Discount",
        scan: "Scan to Join"
      }
    },
    ar: {
      title: "برنامج إحالة الشركاء",
      subtitle: "انضم إلى شبكتنا واكسب مكافآت مقابل كل مكتب محاماة تقوم بدعوته.",
      step1: {
        label: "أدخل بريد العمل لإنشاء رابطك الفريد",
        placeholder: "name@firm.ae",
        btn: "إنشاء رمز الإحالة",
        processing: "جارِ الإنشاء..."
      },
      step2: {
        congrats: "تم التسجيل بنجاح!",
        desc: "شارك هذا الرمز أو الباركود مع شبكتك.",
        codeLabel: "رمز الإحالة الفريد الخاص بك",
        copy: "نسخ الرابط",
        copied: "تم النسخ!",
        share: "مشاركة",
        incentive1: "أنت تكسب: شهر مجاني",
        incentive2: "هم يحصلون على: خصم 15%",
        scan: "امسح للانضمام"
      }
    }
  };

  const content = t[lang];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-lexcora-blue p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lexcora-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <button onClick={handleClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" aria-label="Close">
            <X size={20} />
          </button>
          <div className="w-12 h-12 bg-lexcora-gold rounded-full flex items-center justify-center mx-auto mb-4 text-lexcora-blue shadow-lg shadow-lexcora-gold/20 relative z-10">
            <Gift size={24} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white relative z-10">{content.title}</h3>
          <p className="text-slate-400 text-sm mt-2 max-w-xs mx-auto relative z-10">{content.subtitle}</p>
        </div>

        {/* Body */}
        <div className="p-8">
          {step === 1 ? (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{content.step1.label}</label>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20"
                    placeholder={content.step1.placeholder}
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              {/* Incentives Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-center">
                   <div className="text-lg font-bold text-lexcora-blue mb-1">1 {lang === 'en' ? 'Month' : 'شهر'}</div>
                   <div className="text-[10px] text-slate-500 uppercase tracking-wide">{lang === 'en' ? 'Free for you' : 'مجاناً لك'}</div>
                </div>
                <div className="bg-green-50 border border-green-100 p-3 rounded-lg text-center">
                   <div className="text-lg font-bold text-green-700 mb-1">15%</div>
                   <div className="text-[10px] text-slate-500 uppercase tracking-wide">{lang === 'en' ? 'Discount for them' : 'خصم لهم'}</div>
                </div>
              </div>

              <Button fullWidth disabled={loading}>
                {loading ? (
                  <><Loader2 className="animate-spin" size={18} /> {content.step1.processing}</>
                ) : (
                  <>{content.step1.btn} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} /></>
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-1 rounded-full text-sm mb-4">
                  <CheckCircle2 size={16} /> {content.step2.congrats}
                </div>
                <p className="text-slate-600 text-sm">{content.step2.desc}</p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 mb-4">
                  <img src={qrUrl} alt="Referral QR Code" className="w-32 h-32" />
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">{content.step2.codeLabel}</p>
                <div className="text-3xl font-mono font-bold text-lexcora-blue tracking-wider mb-2">{referralCode}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleCopy} className={copied ? '!border-green-500 !text-green-600' : ''}>
                   {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                   {copied ? content.step2.copied : content.step2.copy}
                </Button>
                <Button onClick={handleShare}>
                   <Share2 size={18} /> {content.step2.share}
                </Button>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Program Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-lexcora-gold/20 flex items-center justify-center text-lexcora-gold shrink-0">
                      <Gift size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{content.step2.incentive1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{content.step2.incentive2}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};