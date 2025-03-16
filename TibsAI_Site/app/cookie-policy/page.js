import CookiePolicyContent from './CookiePolicyContent';

// Required for static export compatibility
export const dynamic = "force-static";

export const metadata = {
  title: 'Cookie Policy | Tiberius AI',
  description: 'Cookie Policy for Tiberius AI - Learn how we use cookies and similar technologies on our website.',
  keywords: 'cookie policy, Tiberius AI, cookies, tracking technologies, website analytics',
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
