'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Card({ 
  title, 
  description, 
  icon, 
  link, 
  className = '',
  variant = 'default',
  imageUrl,
  imageAlt,
  animated = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  // Handle card animation effects
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const cardContent = (
    <>
      {icon && (
        <div className={`mb-4 ${animated ? 'transition-all duration-500' : ''}`} 
             style={{ 
               color: isHovered ? '#4E0D9A' : '#00E5FF',
               transform: isHovered && animated ? 'translateY(-5px)' : 'translateY(0)',
               filter: isHovered && animated ? 'drop-shadow(0 0 8px var(--deep-purple))' : 'none'
             }}>
          {icon}
        </div>
      )}
      
      {imageUrl && (
        <div className="mb-4 relative h-40 w-full overflow-hidden rounded-t-lg">
          <Image 
            src={imageUrl} 
            alt={imageAlt || title} 
            fill 
            className={`object-cover transition-transform duration-700 ${isHovered && animated ? 'scale-110' : 'scale-100'}`}
          />
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-2 ${isHovered && animated ? 'gradient-text' : ''}`}>{title}</h3>
      
      {description && (
        <p className="text-light-gray mb-4">{description}</p>
      )}
    </>
  );

  const baseClasses = 'rounded-lg overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-blue p-6 border-2 border-transparent hover:shadow-lg hover:border-white',
    outlined: 'border-2 border-mid-gray p-6 hover:border-white hover:bg-[#4E0D9A]',
    elevated: 'bg-blue p-6 shadow-md border-2 border-transparent hover:shadow-xl hover:border-white',
    minimal: 'p-6 border-2 border-transparent hover:bg-[#4E0D9A] hover:border-white',
    glowing: 'bg-blue/80 backdrop-blur-sm p-6 border-2 border-transparent hover:shadow-lg hover:border-white',
    gradient: 'bg-gradient-to-br from-blue to-deep-blue p-6 border-2 border-transparent hover:shadow-lg hover:border-white',
  };

  const hoverEffects = animated ? 'hover-lift' : '';
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverEffects} ${className}`;
  
  const cardProps = {
    className: cardClasses,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: isHovered && animated ? {
      boxShadow: variant === 'glowing' ? '0 0 20px rgba(255, 255, 255, 0.3)' : '',
      backgroundColor: isHovered ? 'var(--deep-purple)' : '',
      color: isHovered ? 'white' : ''
    } : {}
  };

  if (link) {
    return (
      <Link href={link} {...cardProps}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div {...cardProps}>
      {cardContent}
    </div>
  );
}
