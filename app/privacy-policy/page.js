import PrivacyPolicyContent from './PrivacyPolicyContent';

// Required for static export compatibility
export const dynamic = "force-static";

export const metadata = {
  title: 'Privacy Policy | Tiberius AI',
  description: 'Privacy Policy for Tiberius AI - Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, Tiberius AI, data protection, GDPR compliance',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
