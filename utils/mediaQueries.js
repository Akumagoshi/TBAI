'use client';

import { useState, useEffect } from 'react';
import { isMobileDevice } from './performanceUtils';

/**
 * Custom hook to detect if the screen is mobile width
 * @param {number} breakpoint - The max width in pixels to be considered mobile (default: 767)
 * @returns {boolean} - True if the screen width is less than or equal to the breakpoint
 */
export function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Initialize on client-side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= breakpoint);
      };
      
      // Initial check
      checkMobile();
      
      // Add resize listener
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [breakpoint]);
  
  return isMobile;
}

/**
 * Custom hook to detect if the device has reduced motion preference enabled
 * @returns {boolean} - True if the user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Initialize on client-side
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      // Initial check
      setPrefersReducedMotion(mediaQuery.matches);
      
      // Add change listener
      const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', onChange);
      
      // Cleanup
      return () => mediaQuery.removeEventListener('change', onChange);
    }
  }, []);
  
  return prefersReducedMotion;
}

/**
 * Custom hook to detect browser viewport dimensions
 * @returns {Object} - Object containing viewport width and height
 */
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return viewport;
}

/**
 * CSS media query breakpoints
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

/**
 * Helper function to generate CSS media query strings
 * @param {string} key - The breakpoint key (sm, md, lg, xl, 2xl)
 * @returns {string} - CSS media query string
 */
export const mediaQuery = (key) => {
  return `@media (min-width: ${breakpoints[key]}px)`;
};
