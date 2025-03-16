'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useIsMobile, usePrefersReducedMotion } from '../../utils/mediaQueries';

export default function AnimatedBackground({ children, className = '', variant = 'default' }) {
  const canvasRef = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Using Intersection Observer to detect if component is in view
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Merge refs
  const setRefs = (element) => {
    canvasRef.current = element;
    inViewRef(element);
  };
  
  // Initialize animation on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2; // Extra height for scrolling effect
    };
    
    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      
      // Reduce particle count on mobile and for reduced motion preference
      let densityFactor = 15000; // default
      if (isMobile) densityFactor = 25000;
      if (prefersReducedMotion) densityFactor = 40000;
      
      const particleCount = Math.floor(canvas.width * canvas.height / densityFactor);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: getRandomColor(),
          speed: prefersReducedMotion ? 
                (Math.random() * 0.2 + 0.1) : // slower for reduced motion
                (Math.random() * 0.5 + 0.2),  // normal speed
          direction: Math.random() * Math.PI * 2
        });
      }
    };
    
    // Get random color based on variant
    const getRandomColor = () => {
      const colors = {
        default: ['rgba(0, 229, 255, 0.5)', 'rgba(176, 38, 255, 0.4)', 'rgba(0, 82, 61, 0.4)'],
        blue: ['rgba(0, 229, 255, 0.5)', 'rgba(15, 27, 70, 0.4)', 'rgba(10, 15, 37, 0.4)'],
        purple: ['rgba(176, 38, 255, 0.5)', 'rgba(120, 0, 170, 0.4)', 'rgba(80, 0, 120, 0.4)']
      };
      
      const variantColors = colors[variant] || colors.default;
      return variantColors[Math.floor(Math.random() * variantColors.length)];
    };
    
    // Animation loop with performance optimizations
    let animationFrameId;
    const animate = () => {
      // Only animate if in view
      // Skip animation frames if not in view or if reduced motion is preferred
      if (!inView) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // For reduced motion preferences, reduce animation frame rate
      if (prefersReducedMotion && Date.now() % 3 !== 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      if (variant === 'default') {
        gradient.addColorStop(0, '#0A0F25');
        gradient.addColorStop(0.4, '#0F1B46');
        gradient.addColorStop(0.8, '#0F1B46'); 
        gradient.addColorStop(1, '#0A0F25');
      } else if (variant === 'blue') {
        gradient.addColorStop(0, '#0A0F25');
        gradient.addColorStop(0.4, '#0F1B46');
        gradient.addColorStop(1, '#0F1B46');
      } else if (variant === 'purple') {
        gradient.addColorStop(0, '#0A0F25');
        gradient.addColorStop(0.4, '#400080');  // Purple mid-tone
        gradient.addColorStop(1, '#B026FF');    // Vibrant purple
      } else if (variant === 'scrolling') {
        // Special variant for scrolling sections to prevent purple
        gradient.addColorStop(0, '#0A0F25');
        gradient.addColorStop(0.4, '#0F1B46');
        gradient.addColorStop(0.8, '#0F1B46');
        gradient.addColorStop(1, '#0A0F25');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Add subtle wave effect (skip for reduced motion preference)
      if (!prefersReducedMotion) {
        drawWaves(ctx, canvas.width, canvas.height);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Draw wave patterns
    const drawWaves = (ctx, width, height) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Create horizontal waves
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const amplitude = 15;
          const period = 0.02;
          const offsetY = Math.sin((x * period) + time) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y + offsetY);
          } else {
            ctx.lineTo(x, y + offsetY);
          }
        }
        ctx.stroke();
      }
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    // Initialize and start animation
    resizeCanvas();
    initParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant, inView, isMobile, prefersReducedMotion]);
  
  return (
    <div className={`relative ${className}`}>
      <canvas 
        ref={setRefs} 
        className="absolute inset-0 w-full h-full -z-10"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1 
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
