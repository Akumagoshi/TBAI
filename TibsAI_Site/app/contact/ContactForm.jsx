'use client';

import { useState, useRef } from 'react';
import Button from '../../components/ui/Button';
import { submitContactForm } from './actions';

export default function ContactForm() {
  // Form status state
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });
  
  // Form reference
  const formRef = useRef(null);
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      error: null
    });
    
    try {
      // Get form data
      const formData = new FormData(formRef.current);
      
      // Submit to server action
      const result = await submitContactForm(formData);
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      // Success status
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      formRef.current.reset();
    } catch (error) {
      // Error status
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: error.message || 'Something went wrong. Please try again.'
      });
    }
  };
  
  // Form fields configuration
  const formFields = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Smith',
      required: true
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'john@example.com',
      required: true
    },
    {
      id: 'businessName',
      label: 'Business Name',
      type: 'text',
      placeholder: 'Your Company Ltd',
      required: false
    }
  ];
  
  return (
    <div>
      {/* Success message */}
      {status.submitted && status.success && (
        <div className="bg-deep-green p-4 rounded-lg mb-6 text-text-light form-success">
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      )}
      
      {/* Error message */}
      {status.submitted && !status.success && (
        <div className="bg-red-700 p-4 rounded-lg mb-6 text-text-light form-error">
          <p className="font-medium">Sorry, there was a problem submitting your form.</p>
          <p>{status.error}</p>
        </div>
      )}
      
      {/* Contact form */}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label 
              htmlFor={field.id} 
              className="text-sm font-medium mb-1"
            >
              {field.label} {field.required && <span className="text-neon-cyan">*</span>}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              required={field.required}
              className="form-input text-text-light"
            />
          </div>
        ))}
        
        {/* Message field */}
        <div className="flex flex-col">
          <label 
            htmlFor="message" 
            className="text-sm font-medium mb-1"
          >
            Message <span className="text-neon-cyan">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your business process automation needs..."
            required
            rows={5}
            className="form-input text-text-light resize-none"
          />
        </div>
        
        {/* Privacy policy agreement */}
        <div className="flex items-start mt-4">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="mt-1 mr-3"
          />
          <label htmlFor="privacy" className="text-sm text-light-gray">
            I agree that my data will be processed according to the <a href="/privacy-policy" className="text-neon-cyan hover:underline">Privacy Policy</a>. <span className="text-neon-cyan">*</span>
          </label>
        </div>
        
        {/* Submit button */}
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full submit-button"
            disabled={status.submitting}
          >
            {status.submitting ? 'Submitting...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
}
