'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Hero from '../../components/sections/Hero';
import Button from '../../components/ui/Button';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

export default function ServiceContent({ params, service }) {
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
    <>
      {/* Hero Section with animated background */}
      <Hero 
        title={service.title}
        subtitle="Business Efficiency Through Automation"
        description={service.longDescription}
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        backgroundVariant="default"
        animated={true}
      />
      
      {/* Features Section with animated background */}
      <section className="py-16 relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-blue to-deep-blue opacity-90 -z-10"></div>
        <div 
          className="absolute inset-0 opacity-10 -z-5"
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z\" fill=\"%23ffffff\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
            transform: `translateY(${scrollY * 0.03}px)` 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-8">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-blue/80 backdrop-blur-sm p-8 rounded-lg hover-lift">
                <div className="text-neon-cyan text-4xl mb-4 glow">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-light-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section with animated background */}
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-8">Benefits</h2>
          
          <div className="max-w-3xl mx-auto bg-blue/30 backdrop-blur-sm p-8 rounded-lg">
            <ul className="space-y-6">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-neon-cyan mr-3 mt-1 text-xl transform group-hover:scale-110 transition-transform glow">✓</span>
                  <span className="text-light-gray group-hover:text-white transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedBackground>
      
      {/* Process Section with scale.com-style moving background */}
      <section className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full animated-bg -z-10"></div>
        <div 
          className="absolute inset-0 w-full h-full -z-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative float-item">
              <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg h-full border border-neon-cyan/20 hover-lift">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4 glow">
                  <span className="text-neon-cyan text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessment</h3>
                <p className="text-light-gray">We analyze your current processes to identify automation opportunities.</p>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-vibrant-purple text-2xl">→</div>
            </div>
            
            {/* Step 2 */}
            <div className="relative float-item">
              <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg h-full border border-vibrant-purple/20 hover-lift">
                <div className="w-12 h-12 rounded-full bg-vibrant-purple/20 flex items-center justify-center mb-4 purple-glow">
                  <span className="text-vibrant-purple text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-light-gray">We develop and deploy customized automation solutions for your business.</p>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-vibrant-purple text-2xl">→</div>
            </div>
            
            {/* Step 3 */}
            <div className="float-item">
              <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg h-full border border-neon-cyan/20 hover-lift">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4 glow">
                  <span className="text-neon-cyan text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimization</h3>
                <p className="text-light-gray">We continuously monitor and improve the performance of your automated processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with animated background */}
      <AnimatedBackground variant="purple" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            Let's discuss how our {service.title} services can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="hover-lift glow"
            >
              Contact Us Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/'}
              className="hover-lift"
            >
              Explore More Services
            </Button>
          </div>
        </div>
      </AnimatedBackground>
    </>
  );
}
