'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Hero from '../../../components/sections/Hero';
import Button from '../../../components/ui/Button';
import AnimatedBackground from '../../../components/ui/AnimatedBackground';

export default function ServiceLocationContent({ params, service, location }) {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Helper function to create location-specific content
  const localizeContent = (text) => {
    return text.replace(/businesses/g, `${location.title} businesses`)
              .replace(/SMEs/g, `${location.title} SMEs`);
  };
  
  // A selection of key industries for this location
  const keyIndustries = location.businessProfile.keyIndustries;
  
  return (
    <>
      {/* BLOCK 1: Hero Section with Location Context and animated background */}
      <Hero 
        title={`${service.title} in ${location.title}`}
        subtitle={`AI-Powered Solutions for ${location.title} Businesses`}
        description={`Our tailored ${service.title.toLowerCase()} services help ${location.title} businesses improve efficiency, reduce costs, and gain competitive advantage with cutting-edge AI technology.`}
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundVariant="default"
        animated={true}
      />
      
      {/* BLOCK 2: Local Business Challenges Section with parallax effect */}
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
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-4">Business Challenges in {location.title}</h2>
          <p className="text-center text-light-gray max-w-3xl mx-auto mb-12">
            {location.title} businesses face unique challenges that our {service.title.toLowerCase()} solutions can address.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.businessProfile.businessChallenges.map((challenge, index) => (
              <div key={index} className="bg-blue/80 backdrop-blur-sm p-8 rounded-lg hover-lift">
                <div className="text-neon-cyan text-4xl mb-4 glow">⚠️</div>
                <h3 className="text-xl font-bold mb-2">
                  {challenge}
                </h3>
                <p className="text-light-gray">
                  Our solutions help businesses in {location.title} overcome this challenge through intelligent automation and optimization.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* BLOCK 3: Service Features for Local Context with animated background */}
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-8">How We Help {location.title} Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-deep-blue/50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover-lift">
                <div className="text-neon-cyan text-4xl mb-4 glow">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-light-gray">
                  {localizeContent(feature.description)} This is particularly important in {location.title}'s competitive business environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBackground>
      
      {/* BLOCK 4: Local Industry Solutions with scale.com-style moving background */}
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
          <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">{service.title} for {location.title}'s Key Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyIndustries.slice(0, 3).map((industry, index) => (
              <div key={index} className={`bg-blue/30 backdrop-blur-sm p-8 rounded-lg border border-${index % 2 === 0 ? 'neon-cyan' : 'vibrant-purple'}/20 hover-lift float-item`} style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="text-xl font-bold mb-4">{industry}</h3>
                <p className="text-light-gray mb-4">
                  Our {service.title.toLowerCase()} solutions are tailored to address the specific challenges faced by {location.title}'s {industry.toLowerCase()} sector.
                </p>
                <ul className="text-light-gray space-y-2">
                  <li className="flex items-start group">
                    <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">✓</span>
                    <span className="group-hover:text-white transition-colors">Industry-specific workflows</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">✓</span>
                    <span className="group-hover:text-white transition-colors">Regulatory compliance</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">✓</span>
                    <span className="group-hover:text-white transition-colors">Specialized integrations</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* BLOCK 5: Local Business Benefits with animated background */}
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-8">Benefits for {location.title} Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {location.automationBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start group p-4 rounded-lg hover:bg-blue/30 transition-colors duration-300">
                <div className="text-neon-cyan mr-4 text-3xl group-hover:scale-110 transition-transform glow">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Benefit {index + 1}</h3>
                  <p className="text-light-gray group-hover:text-white transition-colors">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBackground>
      
      {/* BLOCK 6: Case Study Section (Simulated) with parallax effect */}
      <section className="py-16 relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue to-deep-blue opacity-90 -z-10"></div>
        <div 
          className="absolute inset-0 opacity-10 -z-5"
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 0a20 20 0 110 40 20 20 0 010-40zm0 5a15 15 0 100 30 15 15 0 000-30z\" fill=\"%23ffffff\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
            transform: `translateY(${scrollY * -0.03}px)` 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-deep-blue/70 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto border border-neon-cyan/20">
            <h2 className="gradient-text text-2xl font-bold mb-4">Case Study: {service.title} in {location.title}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-vibrant-purple">The Challenge</h3>
              <p className="text-light-gray">
                A leading {keyIndustries[0]} business in {location.title} was struggling with {location.businessProfile.businessChallenges[0].toLowerCase()}, 
                resulting in inefficiencies and lost revenue.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-vibrant-purple">Our Solution</h3>
              <p className="text-light-gray">
                We implemented a tailored {service.title.toLowerCase()} solution that addressed their specific needs, 
                focusing on {service.features[0].title.toLowerCase()} and {service.features[1].title.toLowerCase()}.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-vibrant-purple">The Results</h3>
              <ul className="text-light-gray space-y-2">
                <li className="flex items-start group">
                  <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">↗️</span>
                  <span className="group-hover:text-white transition-colors">40% increase in operational efficiency</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">↘️</span>
                  <span className="group-hover:text-white transition-colors">25% reduction in process-related errors</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-neon-cyan mr-2 group-hover:scale-110 transition-transform glow">💰</span>
                  <span className="group-hover:text-white transition-colors">£100,000+ annual savings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* BLOCK 7: Local Business Statistics with scale.com-style background */}
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
          <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">{location.title} Business Landscape</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg text-center border border-neon-cyan/20 hover-lift float-item">
              <div className="text-4xl font-bold text-neon-cyan mb-2 glow">{location.businessProfile.smeCount}</div>
              <p className="text-light-gray">Active businesses that could benefit from our solutions</p>
            </div>
            <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg text-center border border-vibrant-purple/20 hover-lift float-item" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-vibrant-purple mb-2 purple-glow">{keyIndustries.length}+</div>
              <p className="text-light-gray">Key industries we serve in {location.title}</p>
            </div>
            <div className="bg-blue/30 backdrop-blur-sm p-8 rounded-lg text-center border border-neon-cyan/20 hover-lift float-item" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-neon-cyan mb-2 glow">30%</div>
              <p className="text-light-gray">Average efficiency improvement with our solutions</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* BLOCK 8: Call to Action with animated background */}
      <AnimatedBackground variant="purple" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your {location.title} Business?</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our {service.title.toLowerCase()} solutions can be tailored to your specific needs in {location.title}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="hover-lift glow"
            >
              Get a Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = `/${params.service}`}
              className="hover-lift"
            >
              Learn More About {service.title}
            </Button>
          </div>
        </div>
      </AnimatedBackground>
    </>
  );
}
