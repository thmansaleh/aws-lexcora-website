import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm tracking-wide uppercase flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-lexcora-gold text-lexcora-blue hover:bg-yellow-400 shadow-lg shadow-yellow-500/20",
    secondary: "bg-lexcora-blue text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 border border-slate-700",
    outline: "bg-transparent border border-lexcora-gold text-lexcora-gold hover:bg-lexcora-gold/10"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};