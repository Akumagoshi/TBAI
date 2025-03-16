'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-deep-blue text-text-light py-2 border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-neon-cyan">Tiberius AI</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-[#4E0D9A] transition-all duration-200">
            Home
          </Link>
          <Link href="/business-process-automation" className="hover:text-[#4E0D9A] transition-all duration-200">
            Process Automation
          </Link>
          <Link href="/business-process-documentation" className="hover:text-[#4E0D9A] transition-all duration-200">
            Process Documentation
          </Link>
          <Link href="/ai-automation" className="hover:text-[#4E0D9A] transition-all duration-200">
            AI Automation
          </Link>
          <Link href="/contact" className="hover:text-[#4E0D9A] transition-all duration-200">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-light"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-blue px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="block py-2 px-4 hover:bg-[#4E0D9A] hover:text-white rounded transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/business-process-automation" 
              className="block py-2 px-4 hover:bg-[#4E0D9A] hover:text-white rounded transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process Automation
            </Link>
            <Link 
              href="/business-process-documentation" 
              className="block py-2 px-4 hover:bg-[#4E0D9A] hover:text-white rounded transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process Documentation
            </Link>
            <Link 
              href="/ai-automation" 
              className="block py-2 px-4 hover:bg-[#4E0D9A] hover:text-white rounded transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Automation
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 px-4 hover:bg-[#4E0D9A] hover:text-white rounded transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
