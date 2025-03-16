import { getServiceById, getAllServiceIds } from '../../../data/services';
import { getLocationById, getAllLocationIds } from '../../../data/locations';
import ServiceLocationContent from './ServiceLocationContent';
import { notFound } from 'next/navigation';

// Required for static export compatibility
export const dynamic = "force-static";

// Generate static parameters for all service+location combinations
export function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  const locationIds = getAllLocationIds();
  
  const params = [];
  
  // Generate all possible combinations
  serviceIds.forEach(serviceId => {
    locationIds.forEach(locationId => {
      params.push({
        service: serviceId,
        location: locationId
      });
    });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Need to handle params asynchronously
  const resolvedParams = await params;
  const serviceId = resolvedParams.service;
  const locationId = resolvedParams.location;
  
  const service = getServiceById(serviceId);
  const location = getLocationById(locationId);
  
  if (!service || !location) {
    return {
      title: 'Service Location Not Found',
    };
  }
  
  return {
    title: `${service.title} in ${location.title} | Tiberius AI`,
    description: `${service.title} services for businesses in ${location.title}. Improve efficiency and reduce costs with AI-powered solutions tailored for local businesses.`,
    keywords: `${service.title}, ${location.title}, business automation, AI solutions, ${service.id.replace(/-/g, ' ')}, ${location.title} businesses, local automation`,
  };
}

export default async function ServiceLocationPage({ params }) {
  // Need to handle params asynchronously
  const resolvedParams = await params;
  const serviceId = resolvedParams.service;
  const locationId = resolvedParams.location;
  
  const service = getServiceById(serviceId);
  const location = getLocationById(locationId);
  
  // If service or location doesn't exist, show 404
  if (!service || !location) {
    notFound();
  }
  
  return <ServiceLocationContent params={params} service={service} location={location} />;
}
