'use client';

import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-light-gray text-sm mb-4">
              AI-powered automation tools for SMEs
            </p>
            <div className="text-sm text-mid-gray">
              © {new Date().getFullYear()} Tiberius AI. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business-process-automation" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link href="/business-process-documentation" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Business Process Documentation
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="text-light-gray hover:text-neon-cyan transition-colors">
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business-process-automation/buckinghamshire" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Buckinghamshire
                </Link>
              </li>
              <li>
                <Link href="/business-process-automation/london" className="text-light-gray hover:text-neon-cyan transition-colors">
                  London
                </Link>
              </li>
              <li>
                <Link href="/business-process-automation/manchester" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Manchester
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-neon-cyan hover:text-vibrant-purple transition-colors">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-light-gray hover:text-neon-cyan transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
