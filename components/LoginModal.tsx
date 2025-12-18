import React from 'react';
import { X, Lock, User, Briefcase } from 'lucide-react';
import { Button } from './Button';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" aria-modal="true" role="dialog" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-lexcora-blue p-6 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white" aria-label="Close modal">
            <X size={20} />
          </button>
          <h2 id="modal-title" className="text-2xl font-serif font-bold text-white tracking-widest">LEXCORA</h2>
          <p className="text-lexcora-gold text-sm mt-1 uppercase tracking-wide">Secure Access Portal</p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <a 
              href="https://app.lexcora-mbh.com/login"
              className="w-full flex items-center justify-between p-4 border border-slate-200 rounded hover:border-lexcora-gold hover:bg-slate-50 transition-all group" 
              aria-label="Login as Attorney or Staff"
            >
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded group-hover:bg-lexcora-gold/20 group-hover:text-lexcora-blue">
                   <Briefcase size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lexcora-blue">Attorney / Staff</div>
                  <div className="text-xs text-slate-500">Access Firm Dashboard</div>
                </div>
              </div>
              <Lock size={16} className="text-slate-300 group-hover:text-lexcora-gold" />
            </a>

            <a 
              href="https://client.lexcora-mbh.com/login" 
              className="w-full flex items-center justify-between p-4 border border-slate-200 rounded hover:border-lexcora-gold hover:bg-slate-50 transition-all group" 
              aria-label="Login to Client Portal"
            >
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded group-hover:bg-lexcora-gold/20 group-hover:text-lexcora-blue">
                   <User size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lexcora-blue">Client Portal</div>
                  <div className="text-xs text-slate-500">View Cases & Invoices</div>
                </div>
              </div>
              <Lock size={16} className="text-slate-300 group-hover:text-lexcora-gold" />
            </a>
          </div>

          <div className="text-center text-xs text-slate-400 mt-6">
            <p className="flex justify-center items-center gap-1">
              <Lock size={12} aria-hidden="true" /> 256-bit End-to-End Encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};