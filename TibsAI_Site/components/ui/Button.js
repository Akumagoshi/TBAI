import { useEffect, useState } from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) {
  const [isPulsing, setIsPulsing] = useState(variant === 'contact');
  
  // For the contact variant, create a pulsing effect
  useEffect(() => {
    if (variant === 'contact') {
      const interval = setInterval(() => {
        setIsPulsing(prev => !prev);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [variant]);
  
  const baseClasses = 'rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-75';
  
  // Different variants with improved contrast
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neon-cyan to-vibrant-purple text-text-light border-2 border-white/50 hover:bg-[#4E0D9A] hover:text-white hover:border-white hover:shadow-lg hover:scale-105',
    secondary: 'border-3 border-neon-cyan text-neon-cyan hover:bg-[#4E0D9A] hover:text-white hover:border-white',
    outline: 'border-3 border-text-light text-text-light hover:bg-[#4E0D9A] hover:text-white hover:border-white',
    text: 'text-neon-cyan hover:text-[#4E0D9A] font-bold hover:underline',
    contact: 'bg-gradient-to-r from-neon-cyan to-vibrant-purple text-text-light border-3 border-white shadow-lg shadow-neon-cyan/40 hover:bg-[#4E0D9A] hover:text-white hover:border-white hover:shadow-xl hover:shadow-white/30 hover:scale-105 font-bold text-xl',
  };
  
  // Different sizes
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'py-2 px-5',
    lg: 'text-lg py-3 px-8',
    xl: 'text-xl py-4 px-10',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Add pulsing animation for contact variant
  const animationClasses = variant === 'contact' && isPulsing 
    ? 'animate-pulse scale-105' 
    : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${animationClasses} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {variant === 'contact' ? (
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
