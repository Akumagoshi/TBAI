'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ className = '', size = 'md', useImage = true }) {
  // Size variants for text and image
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };
  
  const imageSizes = {
    sm: { width: 120, height: 40 },
    md: { width: 150, height: 50 },
    lg: { width: 180, height: 60 },
  };
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {useImage ? (
        <div className="relative">
          <Image 
            src="/images/general/logo-new.webp" 
            alt="Tiberius AI Logo"
            width={imageSizes[size].width}
            height={imageSizes[size].height}
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <div className={`font-bold ${sizeClasses[size]}`}>
          <span className="text-neon-cyan mr-1">Tiberius</span>
          <span className="text-vibrant-purple">AI</span>
        </div>
      )}
    </Link>
  );
}
