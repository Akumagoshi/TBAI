'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import AnimatedBackground from '../ui/AnimatedBackground';

export default function Hero({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonVariant = 'outline',
  backgroundVariant = 'default',
  imageUrl,
  imageAlt,
  imageSide = 'right',
  animated = false,
}) {
  // Background variants
  const backgrounds = {
    default: 'bg-deep-blue',
    gradient: 'bg-gradient-to-br from-deep-blue via-blue to-deep-blue',
    light: 'bg-light-gray text-dark-gray',
    animated: 'bg-transparent', // For use with AnimatedBackground
  };

  // Render with animated background if animated prop is true
  if (animated) {
    return (
      <AnimatedBackground variant={backgroundVariant} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${imageSide === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
            <div className="w-full md:w-1/2 space-y-6">
              {title && (
                <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-vibrant-purple">
                  {title}
                </h1>
              )}
              
              {subtitle && (
                <h2 className="text-xl md:text-2xl font-medium text-text-light">
                  {subtitle}
                </h2>
              )}
              
              {description && (
                <p className="text-light-gray text-lg">
                  {description}
                </p>
              )}
              
              {(primaryButtonText || secondaryButtonText) && (
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {primaryButtonText && (
                    <Button 
                      variant="primary"
                      size="lg"
                      onClick={() => window.location.href = primaryButtonLink}
                    >
                      {primaryButtonText}
                    </Button>
                  )}
                  
                  {secondaryButtonText && (
                    <Button 
                      variant={secondaryButtonVariant}
                      size="lg"
                      onClick={() => window.location.href = secondaryButtonLink}
                    >
                      {secondaryButtonText}
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {imageUrl && (
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
                  <Image 
                    src={imageUrl} 
                    alt={imageAlt || "Hero image"} 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimatedBackground>
    );
  }

  // Regular non-animated version
  return (
    <section className={`py-16 md:py-24 ${backgrounds[backgroundVariant]}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imageSide === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
          <div className="w-full md:w-1/2 space-y-6">
            {title && (
              <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-vibrant-purple">
                {title}
              </h1>
            )}
            
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-medium text-text-light">
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className="text-light-gray text-lg">
                {description}
              </p>
            )}
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryButtonText && (
                  <Button 
                    variant="primary"
                    size="lg"
                    onClick={() => window.location.href = primaryButtonLink}
                  >
                    {primaryButtonText}
                  </Button>
                )}
                
                {secondaryButtonText && (
                  <Button 
                    variant={secondaryButtonVariant}
                    size="lg"
                    onClick={() => window.location.href = secondaryButtonLink}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {imageUrl && (
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src={imageUrl} 
                  alt={imageAlt || "Hero image"} 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
