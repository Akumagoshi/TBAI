'use client';

import Hero from '../../components/sections/Hero';

export default function PrivacyPolicyContent() {
  return (
    <>
      <Hero 
        title="Privacy Policy"
        subtitle="How We Protect Your Data"
        description="At Tiberius AI, we are committed to protecting your privacy and ensuring the security of your personal information."
        backgroundVariant="gradient"
      />
      
      <section className="py-16 bg-deep-blue">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
            <p>
              This Privacy Policy describes how Tiberius AI ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website or use our services.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out forms on our website, including the contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Contact us via email or other communication channels</li>
            </ul>
            
            <p>
              The types of information we collect may include:
            </p>
            <ul>
              <li>Name and contact information, including email address, phone number, and business address</li>
              <li>Business information, such as company name, job title, and industry</li>
              <li>Information about your business needs and requirements</li>
              <li>Communications and interactions with us</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your requests, comments, and questions</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicate with you about our services, offers, promotions, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>Data Retention</h2>
            <p>
              We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, which may include:
            </p>
            <ul>
              <li>The right to access, correct, update, or request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            
            <h2>Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you through our website or by other means.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: privacy@tiberiusai.com<br />
              Address: 123 Business Avenue, London, EC1A 1BB, United Kingdom<br />
              Phone: +44 (0) 123 456 7890
            </p>
            
            <p className="text-sm mt-8">
              Last updated: March 15, 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
