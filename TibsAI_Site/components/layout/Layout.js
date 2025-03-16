'use client';

import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { throttle, getPassiveEventOptions } from '../../utils/performanceUtils';

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effect with throttling
  useEffect(() => {
    // Throttle scroll handler to improve performance
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 50); // Execute at most once every 50ms
    
    // Get passive event options for better scroll performance
    const passiveOption = getPassiveEventOptions();
    
    window.addEventListener('scroll', handleScroll, passiveOption);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-deep-blue text-text-light">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0A0F25, #0F1B46 40%, #B026FF 100%)',
          backgroundSize: '100% 200%',
          backgroundPosition: `center ${40 - (scrollY * 0.05)}%`,
          transition: 'background-position 0.3s ease-out',
        }}
      />
      
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
