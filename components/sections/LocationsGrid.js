import Card from '../ui/Card';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';

export default function LocationsGrid({ 
  locations, 
  title, 
  description, 
  service = 'business-process-automation', 
  displayCount = 6 
}) {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Limit displayed locations if needed
  const displayedLocations = locations.slice(0, displayCount);
  
  return (
    <section className="py-16 relative overflow-hidden scrolling-section">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue to-deep-blue opacity-90 -z-10"></div>
      <div 
        className="absolute inset-0 opacity-10 -z-5"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 0a20 20 0 110 40 20 20 0 010-40zm0 5a15 15 0 100 30 15 15 0 000-30z\" fill=\"%23ffffff\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
          transform: `translateY(${scrollY * -0.03}px)` 
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedLocations.map((location, index) => (
            <Card
              key={index}
              title={location.title}
              description={`${location.title} business process automation services`}
              link={`/${service}/${location.id}`}
              variant={index % 3 === 0 ? "glowing" : index % 3 === 1 ? "gradient" : "elevated"}
              className="h-full text-text-light"
              animated={true}
            />
          ))}
        </div>
        
        {locations.length > displayCount && (
          <div className="text-center mt-12">
            <Link 
              href="/locations" 
              className="inline-flex items-center px-6 py-3 border border-neon-cyan/30 rounded-full 
                       text-neon-cyan hover:text-text-light hover:border-neon-cyan/50 
                       transition-all duration-300 backdrop-blur-sm hover:shadow-glow"
            >
              <span>View all {locations.length} locations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
