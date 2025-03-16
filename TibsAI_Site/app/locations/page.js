import LocationsContent from './LocationsContent';

// Required for static export compatibility
export const dynamic = "force-static";

export const metadata = {
  title: 'Service Locations | Tiberius AI',
  description: 'Tiberius AI provides business process automation and AI solutions across the UK and Ireland. Find services in your location.',
  keywords: 'business automation locations, AI solutions UK, process automation services, location-based business services',
};

export default function LocationsPage() {
  return <LocationsContent />;
}
