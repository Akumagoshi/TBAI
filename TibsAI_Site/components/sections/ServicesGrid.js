import Card from '../ui/Card';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ServicesGrid({ services, title, description }) {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="py-16 relative overflow-hidden scrolling-section">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-blue to-deep-blue opacity-90 -z-10"></div>
      <div 
        className="absolute inset-0 opacity-10 -z-5"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z\" fill=\"%23ffffff\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
          transform: `translateY(${scrollY * 0.03}px)` 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {title && (
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
        )}
        
        {description && (
          <p className="text-center text-light-gray max-w-3xl mx-auto mb-12">
            {description}
          </p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.title}
              link={service.link}
              variant={index % 2 === 0 ? "glowing" : "gradient"}
              className="h-full text-text-light"
              animated={true}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-neon-cyan/30 rounded-full 
                       text-neon-cyan hover:text-text-light hover:border-neon-cyan/50 
                       transition-all duration-300 backdrop-blur-sm hover:shadow-glow"
          >
            <span>Contact us to learn more about our services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
