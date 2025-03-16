/**
 * Image Configuration File
 * 
 * This file contains path mappings for images used throughout the site.
 * To change an image, simply update the path here, and it will be reflected everywhere.
 * 
 * Image Size Requirements:
 * - Service card images: 600px × 400px
 * - Hero section images: 1920px × 1080px
 * - Location images: 800px × 600px
 */

export const imageConfig = {
  // Service images
  services: {
    'business-process-automation': {
      // Default image for this service
      default: '/images/services/business-process-automation/default.jpg',
      // Alternative images for easy swapping
      alternatives: [
        '/images/services/business-process-automation/alt-1.jpg',
        '/images/services/business-process-automation/alt-2.jpg',
      ]
    },
    'business-process-documentation': {
      default: '/images/services/business-process-documentation/default.jpg',
      alternatives: [
        '/images/services/business-process-documentation/alt-1.jpg',
        '/images/services/business-process-documentation/alt-2.jpg',
      ]
    },
    'ai-automation': {
      default: '/images/services/ai-automation/default.jpg',
      alternatives: [
        '/images/services/ai-automation/alt-1.jpg',
        '/images/services/ai-automation/alt-2.jpg',
      ]
    }
  },
  
  // Hero section images
  hero: {
    main: '/images/general/hero-background.jpg',
    alternatives: [
      '/images/general/hero-alt-1.jpg',
      '/images/general/hero-alt-2.jpg',
    ]
  },
  
  // Location images
  locations: {
    // Example: 'location-id': '/images/locations/location-name.jpg'
    'london': '/images/locations/london.jpg',
    'manchester': '/images/locations/manchester.jpg',
    'birmingham': '/images/locations/birmingham.jpg',
    'glasgow': '/images/locations/glasgow.jpg',
    'edinburgh': '/images/locations/edinburgh.jpg',
    'dublin': '/images/locations/dublin.jpg',
  }
};

/**
 * Get the image path for a service
 * @param {string} serviceId - The service ID
 * @param {number} alternativeIndex - Optional index for alternative images
 * @returns {string} The image path
 */
export function getServiceImage(serviceId, alternativeIndex = null) {
  if (!imageConfig.services[serviceId]) {
    return null;
  }
  
  if (alternativeIndex !== null && 
      imageConfig.services[serviceId].alternatives && 
      imageConfig.services[serviceId].alternatives[alternativeIndex]) {
    return imageConfig.services[serviceId].alternatives[alternativeIndex];
  }
  
  return imageConfig.services[serviceId].default;
}

/**
 * Get the image path for a location
 * @param {string} locationId - The location ID
 * @returns {string} The image path
 */
export function getLocationImage(locationId) {
  return imageConfig.locations[locationId] || null;
}

/**
 * Get the hero image path
 * @param {number} alternativeIndex - Optional index for alternative images
 * @returns {string} The image path
 */
export function getHeroImage(alternativeIndex = null) {
  if (alternativeIndex !== null && 
      imageConfig.hero.alternatives && 
      imageConfig.hero.alternatives[alternativeIndex]) {
    return imageConfig.hero.alternatives[alternativeIndex];
  }
  
  return imageConfig.hero.main;
}
