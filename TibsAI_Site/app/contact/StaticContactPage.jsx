'use client';

import Hero from '../../components/sections/Hero';
import StaticContactForm from './StaticContactForm';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

// Static version of the contact page for Hostinger deployment
export default function StaticContactPage() {
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in Touch With Our Team"
        description="Have questions about our services or want to discuss how we can help your business? Fill out the form below and we'll get back to you promptly."
        backgroundVariant="gradient"
      />
      
      <AnimatedBackground variant="blue" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Static Contact Form */}
            <div className="bg-blue p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <StaticContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="bg-blue p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Office Hours</h3>
                  <p className="text-light-gray">Monday - Friday: 9:00 AM - 5:30 PM</p>
                  <p className="text-light-gray">Saturday - Sunday: Closed</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Email</h3>
                  <p className="text-light-gray">info@tiberiusai.com</p>
                  <p className="text-light-gray">support@tiberiusai.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Phone</h3>
                  <p className="text-light-gray">+44 (0) 123 456 7890</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Headquarters</h3>
                  <address className="text-light-gray not-italic">
                    Tiberius AI<br />
                    123 Business Avenue<br />
                    London, EC1A 1BB<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>
      
      <AnimatedBackground variant="purple" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-deep-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How quickly can you implement automation solutions?</h3>
              <p className="text-light-gray">Implementation timelines vary based on the complexity of your processes, but our typical projects take 2-6 weeks from initial consultation to deployment.</p>
            </div>
            
            <div className="bg-deep-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do you offer ongoing support after implementation?</h3>
              <p className="text-light-gray">Yes, we provide comprehensive support and maintenance packages to ensure your automation solutions continue to perform optimally.</p>
            </div>
            
            <div className="bg-deep-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can you integrate with our existing systems?</h3>
              <p className="text-light-gray">Absolutely. Our solutions are designed to integrate seamlessly with your existing software and workflows, including CRMs, ERPs, and custom applications.</p>
            </div>
            
            <div className="bg-deep-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is our business data secure?</h3>
              <p className="text-light-gray">Security is our top priority. We implement enterprise-grade security measures and comply with all relevant data protection regulations.</p>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </>
  );
}
