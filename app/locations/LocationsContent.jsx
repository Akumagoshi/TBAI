'use client';

import { getLocationsByRegion } from '../../data/locations';
import Hero from '../../components/sections/Hero';
import Link from 'next/link';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

export default function LocationsContent() {
  // Get locations grouped by region
  const locationsByRegion = getLocationsByRegion();
  
  return (
    <>
      <Hero 
        title="Our Service Locations"
        subtitle="Business Automation Services Across the UK & Ireland"
        description="Tiberius AI provides tailored business process automation and AI solutions to businesses in major cities and regions throughout the UK and Ireland."
        backgroundVariant="gradient"
      />
      
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-light-gray max-w-3xl mx-auto mb-12">
            We understand the unique challenges and requirements of businesses in different regions. 
            Our local expertise ensures that our automation solutions are tailored to your specific business environment.
          </p>
          
          {/* Display locations by region */}
          <div className="space-y-16 floating-section">
            {Object.entries(locationsByRegion).map(([region, locations]) => (
              <div key={region}>
                <h2 className="text-2xl font-bold mb-6 text-neon-cyan">{region}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locations.map((location, index) => (
                    <div 
                      key={location.id}
                      className="bg-blue p-6 rounded-lg border border-transparent hover:border-neon-cyan transition-all duration-300 hover:shadow-glow hover-lift float-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                      <p className="text-light-gray mb-4">{location.shortDescription}</p>
                      
                      <h4 className="text-sm font-semibold text-neon-cyan mb-2">Key Industries:</h4>
                      <ul className="text-light-gray text-sm mb-6">
                        {location.businessProfile.keyIndustries.slice(0, 3).map((industry, index) => (
                          <li key={index} className="mb-1 transition-all duration-300 hover:text-neon-cyan hover:translate-x-1">• {industry}</li>
                        ))}
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-neon-cyan mb-2">Our Services:</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href={`/business-process-automation/${location.id}`}
                            className="text-sm text-text-light hover:text-neon-cyan transition-all duration-300 hover:translate-x-1 inline-block"
                          >
                            Business Process Automation in {location.title}
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/business-process-documentation/${location.id}`}
                            className="text-sm text-text-light hover:text-neon-cyan transition-colors"
                          >
                            Business Process Documentation in {location.title}
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={`/ai-automation/${location.id}`}
                            className="text-sm text-text-light hover:text-neon-cyan transition-colors"
                          >
                            AI Automation in {location.title}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBackground>
      
      <AnimatedBackground variant="purple" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find Your Location?</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            We serve businesses throughout the UK and Ireland, even if your specific location isn't listed.
            Contact us to discuss how we can tailor our solutions to your business needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block rounded-full font-medium transition-colors bg-gradient-to-r from-neon-cyan to-vibrant-purple text-text-light hover:shadow-lg py-3 px-8 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </AnimatedBackground>
    </>
  );
}
