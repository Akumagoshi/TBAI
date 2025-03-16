'use client';

import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import LocationsGrid from '../components/sections/LocationsGrid';
import { services } from '../data/services';
import { locations } from '../data/locations';
import Button from '../components/ui/Button';
import Image from 'next/image';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Convert services data into the format expected by ServicesGrid
  const servicesData = services.map(service => ({
    title: service.title,
    description: service.shortDescription,
    icon: service.features[0].icon,
    link: `/${service.id}`
  }));

  // Filter locations for display on homepage
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      {/* Hero Section with animated background */}
      <Hero 
        title="Power Your Business With AI Automation"
        subtitle="AI-powered solutions for SMEs"
        description="Tiberius AI provides cutting-edge business process automation, documentation, and AI solutions tailored specifically for small and medium-sized enterprises across the UK and Ireland."
        primaryButtonText="Explore Our Services"
        primaryButtonLink="/business-process-automation"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        secondaryButtonVariant="contact"
        backgroundVariant="default"
        animated={true}
      />
      
      {/* Scale.com style moving background section */}
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
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Revolutionize Your Business Processes
            </h2>
            <p className="text-text-light text-xl mb-12 leading-relaxed">
              We combine industry expertise with cutting-edge AI technology to streamline operations, 
              reduce costs, and drive growth for small and medium-sized enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center rounded-full px-6 py-3 border border-neon-cyan/20 bg-deep-blue/50 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-neon-cyan mr-3 glow"></div>
                <span>Increase Efficiency</span>
              </div>
              <div className="flex items-center rounded-full px-6 py-3 border border-neon-cyan/20 bg-deep-blue/50 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-neon-cyan mr-3 glow"></div>
                <span>Reduce Manual Tasks</span>
              </div>
              <div className="flex items-center rounded-full px-6 py-3 border border-neon-cyan/20 bg-deep-blue/50 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-neon-cyan mr-3 glow"></div>
                <span>Scale Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesGrid 
        services={servicesData}
        title="Our Services"
        description="We help SMEs automate their business processes, document their operations, and leverage AI for competitive advantage."
      />
      
      {/* Key Features Section */}
      <section className="py-16 bg-deep-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-light">
            Why Choose Tiberius AI
          </h2>
          <p className="text-center text-light-gray max-w-3xl mx-auto mb-12">
            Our approach combines industry expertise with cutting-edge AI technology to deliver measurable results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue p-8 rounded-lg">
              <div className="text-neon-cyan text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Rapid Implementation</h3>
              <p className="text-light-gray">
                Get up and running quickly with our streamlined implementation process designed specifically for SMEs.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-blue p-8 rounded-lg">
              <div className="text-neon-cyan text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
              <p className="text-light-gray">
                Your business data is protected with the highest levels of security and compliance standards.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue p-8 rounded-lg">
              <div className="text-neon-cyan text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Measurable ROI</h3>
              <p className="text-light-gray">
                Track performance improvements with clear metrics and see tangible returns on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <LocationsGrid 
        locations={featuredLocations}
        title="We Serve Businesses Across the UK & Ireland"
        description="Our local expertise means we understand the unique challenges of businesses in your area."
      />
      
      {/* CTA Section with animated background */}
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Tiberius AI can help automate and optimize your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="hover-lift"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/business-process-automation'}
              className="hover-lift"
            >
              Learn About Our Services
            </Button>
          </div>
        </div>
      </AnimatedBackground>
    </>
  );
}
