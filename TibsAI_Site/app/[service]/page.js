import { notFound } from 'next/navigation';
import { getServiceById, getAllServiceIds } from '../../data/services';
import ServiceContent from './ServiceContent';

// Required for static export compatibility
export const dynamic = "force-static";

// Generate static parameters for all service pages
export function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  return serviceIds.map((id) => ({
    service: id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Need to handle params asynchronously
  const resolvedParams = await params;
  const serviceId = resolvedParams.service;
  const service = getServiceById(serviceId);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: `${service.title} | Tiberius AI`,
    description: service.shortDescription,
    keywords: `${service.title}, Tiberius AI, business automation, ${service.id.replace(/-/g, ' ')}`,
  };
}

export default async function ServicePage({ params }) {
  // Need to handle params asynchronously
  const resolvedParams = await params;
  const serviceId = resolvedParams.service;
  const service = getServiceById(serviceId);
  
  // If service doesn't exist, show 404
  if (!service) {
    notFound();
  }
  
  return <ServiceContent params={params} service={service} />;
}
