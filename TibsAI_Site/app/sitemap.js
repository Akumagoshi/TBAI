import { getAllServiceIds } from '../data/services';
import { getAllLocationIds } from '../data/locations';

// Required for static export
export const dynamic = "force-static";

export default async function sitemap() {
  const baseUrl = 'https://tiberiusai.com';
  
  // Get all service IDs and location IDs
  const serviceIds = getAllServiceIds();
  const locationIds = getAllLocationIds();
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
  
  // Service routes
  const serviceRoutes = serviceIds.map((serviceId) => ({
    url: `${baseUrl}/${serviceId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  
  // Service+Location routes
  const serviceLocationRoutes = [];
  serviceIds.forEach((serviceId) => {
    locationIds.forEach((locationId) => {
      serviceLocationRoutes.push({
        url: `${baseUrl}/${serviceId}/${locationId}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });
  
  return [...staticRoutes, ...serviceRoutes, ...serviceLocationRoutes];
}
