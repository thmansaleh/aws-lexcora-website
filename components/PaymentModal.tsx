import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck, Loader2, Mail, Phone, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { Language, PricingTier } from '../types';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here');

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: PricingTier | null;
  billingCycle: 'monthly' | 'annually';
  lang: Language;
}

type Step = 'contact' | 'otp' | 'payment' | 'success';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

const PaymentForm: React.FC<{
  lang: Language;
  contactInfo: ContactInfo;
  tier: PricingTier;
  billingCycle: 'monthly' | 'annually';
}> = ({ lang, contactInfo, tier, billingCycle }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const price = billingCycle === 'annually' ? tier.priceAnnually : tier.priceMonthly;

  const handleCheckout = async () => {
    setProcessing(true);
    setError(null);

    try {
      // Call backend to create Stripe Checkout Session
      const response = await fetch('http://localhost:8080/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: contactInfo.email,
          name: contactInfo.name,
          phone: contactInfo.phone,
          tier: tier.name,
          billingCycle: billingCycle,
          priceId: billingCycle === 'annually' ? tier.stripePriceIdAnnually : tier.stripePriceIdMonthly,
          successUrl: `${window.location.origin}?payment=success`,
          cancelUrl: `${window.location.origin}?payment=cancel`,
        }),
      });

      const data = await response.json();

      if (data.success && data.sessionId) {
        // Redirect to Stripe Checkout
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });
          
          if (error) {
            throw new Error(error.message);
          }
        }
      } else {
        throw new Error(data.message || 'Failed to create checkout session');
      }
    } catch (err: any) {
      setError(err.message || 'Payment failed. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Summary */}
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-slate-600 mb-1">
              {lang === 'en' ? 'Total Amount' : 'المبلغ الإجمالي'}
            </p>
            <p className="text-3xl font-bold text-lexcora-blue">AED {price}</p>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <CreditCard className="text-lexcora-gold" size={28} />
          </div>
        </div>
        <p className="text-xs text-slate-500">
          {lang === 'en' 
            ? `Billed ${billingCycle === 'annually' ? 'annually' : 'monthly'}` 
            : `يتم الدفع ${billingCycle === 'annually' ? 'سنوياً' : 'شهرياً'}`}
        </p>
      </div>

      {/* Payment Method Info */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-700 mb-2 font-medium">
          {lang === 'en' ? 'Accepted Payment Methods:' : 'طرق الدفع المقبولة:'}
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-white rounded-md text-xs font-medium text-slate-600 border border-slate-200">
            Visa
          </span>
          <span className="px-3 py-1 bg-white rounded-md text-xs font-medium text-slate-600 border border-slate-200">
            Mastercard
          </span>
          <span className="px-3 py-1 bg-white rounded-md text-xs font-medium text-slate-600 border border-slate-200">
            Amex
          </span>
          <span className="px-3 py-1 bg-white rounded-md text-xs font-medium text-slate-600 border border-slate-200">
            Apple Pay
          </span>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <Button fullWidth onClick={handleCheckout} disabled={processing}>
        {processing ? (
          <><Loader2 className="animate-spin" size={18} /> {lang === 'en' ? 'Redirecting...' : 'جار التحويل...'}</>
        ) : (
          <>{lang === 'en' ? 'Continue to Payment' : 'متابعة إلى الدفع'} <ShieldCheck size={18} /></>
        )}
      </Button>
      
      <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
        <Lock size={10} /> 
        {lang === 'en' 
          ? 'Secure payment powered by Stripe. You will be redirected to complete payment.' 
          : 'دفع آمن بواسطة Stripe. سيتم تحويلك لإكمال عملية الدفع.'}
      </p>
    </div>
  );
};

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, tier, billingCycle, lang }) => {
  const [step, setStep] = useState<Step>('contact');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: '', email: '', phone: '' });
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  if (!isOpen || !tier) return null;

  const price = billingCycle === 'annually' ? tier.priceAnnually : tier.priceMonthly;
  const period = billingCycle === 'annually' ? (lang === 'en' ? 'Year' : 'سنة') : (lang === 'en' ? 'Month' : 'شهر');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError('');

    try {
      // Call backend to send OTP
      const response = await fetch('http://localhost:8080/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: contactInfo.email,
          name: contactInfo.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedOtp(data.otp); // In production, don't return OTP to frontend
        setStep('otp');
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
      console.error('OTP error:', err);
    } finally {
      setProcessing(false);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError('');

    // Verify OTP (in production, verify on backend)
    setTimeout(() => {
      if (otp === generatedOtp || otp === '123456') { // Allow test OTP
        setStep('payment');
      } else {
        setError(lang === 'en' ? 'Invalid OTP code' : 'رمز التحقق غير صحيح');
      }
      setProcessing(false);
    }, 500);
  };

  const handleClose = () => {
    setStep('contact');
    setContactInfo({ name: '', email: '', phone: '' });
    setOtp('');
    setGeneratedOtp('');
    setError('');
    onClose();
  };

  const isContactValid = contactInfo.name && contactInfo.email && contactInfo.phone;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fade-in-up">
        {step === 'success' ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-lexcora-blue mb-2">
              {lang === 'en' ? 'Payment Successful' : 'تم الدفع بنجاح'}
            </h3>
            <p className="text-slate-500 mb-8">
              {lang === 'en' 
                ? 'Thank you for your subscription. Your account has been upgraded.' 
                : 'شكراً لاشتراكك. تم ترقية حسابك بنجاح.'}
            </p>
            <Button onClick={handleClose} fullWidth>
              {lang === 'en' ? 'Continue to Dashboard' : 'الذهاب إلى لوحة التحكم'}
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lexcora-blue text-lg flex items-center gap-2">
                  <Lock size={16} className="text-lexcora-gold" />
                  {lang === 'en' ? 'Secure Checkout' : 'دفع آمن'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {step === 'contact' && (lang === 'en' ? 'Step 1 of 3: Contact Info' : 'الخطوة 1 من 3: معلومات التواصل')}
                  {step === 'otp' && (lang === 'en' ? 'Step 2 of 3: Verify Email' : 'الخطوة 2 من 3: تحقق من البريد')}
                  {step === 'payment' && (lang === 'en' ? 'Step 3 of 3: Payment' : 'الخطوة 3 من 3: الدفع')}
                </p>
              </div>
              <button onClick={handleClose} className="text-slate-400 hover:text-slate-600" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              {/* Summary */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lexcora-blue">{tier.name}</p>
                  <p className="text-xs text-slate-500 capitalize">{billingCycle} Plan</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-lexcora-blue">AED {price}</p>
                  <p className="text-xs text-slate-500">/ {period}</p>
                </div>
              </div>

              {/* Step 1: Contact Information */}
              {step === 'contact' && (
                <form onSubmit={handleSendOtp} className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      {lang === 'en' ? 'Full Name' : 'الاسم الكامل'}
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        placeholder={lang === 'en' ? "Ahmed Al-Mansoori" : "أحمد المنصوري"}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      {lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                    </label>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        placeholder="name@firm.ae"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      {lang === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        required
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        placeholder="+971 50 123 4567"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20"
                      />
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <Button fullWidth disabled={!isContactValid || processing}>
                    {processing ? (
                      <><Loader2 className="animate-spin" size={18} /> {lang === 'en' ? 'Sending...' : 'جار الإرسال...'}</>
                    ) : (
                      <>{lang === 'en' ? 'Continue' : 'متابعة'} <Arrow size={18} /></>
                    )}
                  </Button>

                  <p className="text-[10px] text-center text-slate-400">
                    {lang === 'en' 
                      ? 'We will send a verification code to your email' 
                      : 'سنرسل رمز التحقق إلى بريدك الإلكتروني'}
                  </p>
                </form>
              )}

              {/* Step 2: OTP Verification */}
              {step === 'otp' && (
                <form onSubmit={handleVerifyOtp} className="space-y-5 animate-fade-in">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="text-lexcora-blue" size={28} />
                    </div>
                    <p className="text-sm text-slate-600">
                      {lang === 'en' 
                        ? `Enter the 6-digit code sent to ${contactInfo.email}` 
                        : `أدخل الرمز المكون من 6 أرقام المرسل إلى ${contactInfo.email}`}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2 text-center">
                      {lang === 'en' ? 'Verification Code' : 'رمز التحقق'}
                    </label>
                    <input 
                      type="text" 
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="123456"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20 text-center text-2xl font-mono tracking-widest"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setStep('contact')}
                      type="button"
                    >
                      {lang === 'en' ? 'Back' : 'رجوع'}
                    </Button>
                    <Button fullWidth className="flex-1" disabled={otp.length !== 6 || processing}>
                      {processing ? (
                        <><Loader2 className="animate-spin" size={18} /></>
                      ) : (
                        <>{lang === 'en' ? 'Verify' : 'تحقق'} <Arrow size={18} /></>
                      )}
                    </Button>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full text-center text-xs text-lexcora-blue hover:text-lexcora-gold font-medium"
                  >
                    {lang === 'en' ? "Didn't receive code? Resend" : 'لم تستلم الرمز؟ إعادة إرسال'}
                  </button>
                </form>
              )}

              {/* Step 3: Payment with Stripe */}
              {step === 'payment' && (
                <div className="animate-fade-in">
                  <PaymentForm 
                    lang={lang}
                    contactInfo={contactInfo}
                    tier={tier}
                    billingCycle={billingCycle}
                  />
                  
                  <button
                    onClick={() => setStep('otp')}
                    className="w-full text-center text-xs text-slate-500 hover:text-lexcora-blue font-medium mt-4"
                  >
                    {lang === 'en' ? '← Back to verification' : 'العودة إلى التحقق ←'}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};