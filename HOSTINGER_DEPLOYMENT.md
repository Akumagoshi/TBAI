# TiberiusAI Deployment Guide for Hostinger

This guide provides step-by-step instructions for deploying the TiberiusAI website to Hostinger hosting.

## Prerequisites

- Node.js (version 18.x or higher)
- Git
- Hostinger hosting account (Business or Cloud hosting plan recommended for Node.js support)

## Static Export Implementation

This project has been specially configured for static hosting on Hostinger. Here are the important adaptations made:

1. **Next.js Configuration**: 
   ```javascript
   const nextConfig = {
     output: "export",  // Generate static files for Hostinger
     basePath: process.env.BASE_PATH || "",
     assetPrefix: process.env.URL || "",
     images: {
       unoptimized: true  // Required for static export with images
     },
     env: {
       // This tells the app we're running in static export mode
       NEXT_PUBLIC_STATIC_MODE: 'true'
     }
   };
   ```

2. **Server Actions Handling**:
   - Server-side actions (like contact form submission) have been replaced with client-side alternatives
   - Static forms have been created that simulate submission without requiring a server
   - Components detect whether they're running in static mode and use the appropriate implementation

3. **Route Handling**:
   - All dynamic routes have been configured with `export const dynamic = "force-static"`
   - Sitemap generation is now compatible with static export

## Step 1: Build the Project

1. Clone the repository (if not already done):
   ```bash
   git clone https://github.com/Akumagoshi/Website-4932.git
   cd Website-4932
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the static export:
   ```bash
   npm run build
   ```

   This will generate a folder named `out` containing all static files.

## Step 2: Upload to Hostinger

### Method 1: Manual Upload via FTP (Recommended for Initial Setup)

1. In Hostinger hPanel, go to Files → File Manager or use an FTP client
2. Navigate to your domain's public directory (typically `public_html/`)
3. Upload all files from the local `out` directory to this folder
4. For subdirectory deployment, create the subdirectory first, then upload files there

### Method 2: GitHub Integration (Recommended for Ongoing Updates)

1. In Hostinger hPanel, navigate to Websites → Manage → Git
2. Connect to your GitHub repository (`https://github.com/Akumagoshi/Website-4932`)
3. Configure the deployment settings:
   - Branch: `master` 
   - Build command: `npm run build`
   - Build output directory: `out`
4. Trigger deployment

### Method 3: Using Hostinger's File Manager

1. Create a ZIP archive of your `out` directory
2. Log in to Hostinger hPanel
3. Go to File Manager and navigate to your website's directory
4. Upload the ZIP file
5. Extract the ZIP file in the target directory

## Step 3: Domain and SSL Configuration

1. Ensure your domain points to Hostinger nameservers
2. Set up SSL certificate for HTTPS (highly recommended):
   - In hPanel, go to SSL/TLS → Install
   - Select Let's Encrypt or AutoSSL
   - Follow the wizard to complete installation

## Important Notes and Troubleshooting

- **Contact Form**: The contact form in static mode is for demonstration only. For a working form:
  - Consider using a third-party form service (Formspree, Netlify Forms)
  - Or implement a serverless function to handle form submissions

- **Images**: If images don't load correctly, check:
  - That `assetPrefix` is correctly set
  - All image paths are relative and match the production URL structure

- **Environment Variables**: For production deployment, set:
  - `BASE_PATH`: If deploying to a subdirectory (e.g., `/website`)
  - `URL`: Your domain URL (e.g., `https://yourdomain.com`)

- **Build Errors**: If you encounter build errors, check for:
  - Server components or actions that need static alternatives
  - Missing `dynamic = "force-static"` directives in dynamic routes

## Maintenance and Updates

After successful deployment, you can update the website by:

1. Making changes locally
2. Rebuilding with `npm run build`
3. Uploading the new `out` directory contents or pushing to GitHub for automatic deployment
