import ContactPageClient from './ContactPage';
import StaticContactPage from './StaticContactPage';

export const metadata = {
  title: 'Contact Us | Tiberius AI',
  description: 'Get in touch with Tiberius AI for business process automation, documentation, and AI solutions for your business.',
  keywords: 'contact, Tiberius AI, business automation, AI solutions',
};

// Required for static export compatibility
export const dynamic = "force-static";

export default function ContactPage() {
  // For static export (Hostinger) use the static contact page
  // In development or production with server, use the dynamic contact page
  const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true' || 
                         process.env.NEXT_PUBLIC_STATIC_MODE === 'true';
                         
  return isStaticExport ? <StaticContactPage /> : <ContactPageClient />;
}
