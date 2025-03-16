# TiberiusAI Website Image Management System

This document outlines the image management system implemented for the TiberiusAI website, providing instructions on how to add, replace, or modify images throughout the site.

## Directory Structure

Images are organized in a structured directory hierarchy:

```
/public/images/
├── services/
│   ├── business-process-automation/
│   ├── business-process-documentation/
│   └── ai-automation/
├── locations/
└── general/
```

## Image Configuration System

The image configuration is managed through the `imageConfig.js` file located in the `data` directory. This system allows for easy swapping of images without modifying component code.

### How It Works

1. All image paths are defined in the `imageConfig.js` file
2. Components access images through helper functions: `getServiceImage()`, `getLocationImage()`, etc.
3. To change an image, you only need to update the path in the configuration file

## Image Size Requirements

For optimal performance and appearance, use the following image dimensions:

- **Service card images**: 600px × 400px
- **Hero section images**: 1920px × 1080px
- **Location images**: 800px × 600px

## How to Change Images

### Replacing a Service Image

1. Add your new image to the appropriate service directory (e.g., `/public/images/services/business-process-automation/`)
2. Update the path in `imageConfig.js` or use one of the pre-defined alternatives

**Example**: To switch to an alternative image for Business Process Automation:

```javascript
// In a component that needs to use a different service image:
import { getServiceImage } from '../../data/imageConfig';

// Default image
const imageUrl = getServiceImage('business-process-automation');

// Alternative image (index 0 refers to the first alternative)
const altImageUrl = getServiceImage('business-process-automation', 0);
```

### Adding New Alternative Images

1. Add the image file to the appropriate directory
2. Update the `imageConfig.js` file to include the new alternative:

```javascript
services: {
  'business-process-automation': {
    default: '/images/services/business-process-automation/default.jpg',
    alternatives: [
      '/images/services/business-process-automation/alt-1.jpg',
      '/images/services/business-process-automation/alt-2.jpg',
      '/images/services/business-process-automation/new-alt.jpg', // Added new alternative
    ]
  },
}
```

## Image Optimization

All images used in the website should be:

1. Properly sized according to their usage
2. Compressed to reduce file size
3. In JPG or WebP format for photos
4. In SVG or PNG format for icons or graphics with transparency

## Testing Different Images

To test different images and see how they look on the site:

1. Add alternative images to the appropriate directories
2. Modify the configuration in `imageConfig.js`
3. Use the helper functions with an alternative index to test the new images

For quick testing without modifying code, simply replace the image files directly, keeping the same filenames.
