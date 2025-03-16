# PHP Wrapper Deployment Guide for Next.js on Hostinger

This guide explains how to deploy your Next.js application to Hostinger using a PHP wrapper approach.

## Overview

We've created a PHP wrapper around your Next.js static export that allows the website to be deployed on Hostinger's PHP hosting, even though it's a Next.js application. The wrapper consists of:

1. PHP router that serves static files from the Next.js build
2. Composer configuration files recognized by Hostinger
3. Apache configuration via .htaccess
4. Scripts to help with deployment

## Deployment Steps

### Option 1: Using the Deployment Script (Recommended)

1. Open a PowerShell terminal in the project root directory
2. Run the deployment script:
   ```
   cd tiberius-ai
   .\deploy-to-hostinger.ps1
   ```
3. Push the created branch to GitHub:
   ```
   git push -u origin php-hostinger
   ```
4. In Hostinger's hPanel, go to Websites → Manage → Git
5. Connect to your GitHub repository using:
   - Repository URL: `https://github.com/Akumagoshi/TibsAI_Site`
   - Branch: `php-hostinger`
   - Deploy path: `/`
   - Deployment mode: PHP (not Node.js)
6. Click "Deploy" to start the deployment

### Option 2: Manual Deployment

If you prefer a manual approach:

1. Build the Next.js application:
   ```
   cd tiberius-ai
   npm run build
   ```
2. Create a new Git branch:
   ```
   git checkout -b php-hostinger
   ```
3. Ensure all PHP wrapper files are added to Git:
   ```
   git add php-app/ index.php composer.json composer.lock .htaccess
   ```
4. Commit and push:
   ```
   git commit -m "Prepare PHP wrapper for Hostinger deployment"
   git push -u origin php-hostinger
   ```
5. Follow steps 4-6 from Option 1 to configure Hostinger

## Understanding the PHP Wrapper

The PHP wrapper works as follows:

1. User requests a URL like `https://yourdomain.com/services`
2. Apache .htaccess rules route all requests to index.php
3. index.php initializes the PHP router
4. The router analyzes the requested URL path
5. If the path corresponds to a static file from Next.js, it serves that file
6. For dynamic routes like `/[service]` or `/[service]/[location]`, it finds the correct HTML file
7. Proper content types and cache headers are set for each file type

## Troubleshooting

If you encounter issues with the deployment:

### File Not Found Errors

Check that the static files in the `/out` directory are properly included in the Git repository. You might need to:

```
git add out/
git commit -m "Add build output files"
git push
```

### PHP Errors

Check the Hostinger error logs. Common issues:

1. Permissions: Ensure all files, especially PHP files, have proper read permissions
2. PHP version: Hostinger should use PHP 7.4 or higher
3. Missing directories: The `/out` directory must exist on the server

### Routing Issues

If some pages work but others don't:

1. Check for proper handling of dynamic routes in `php-app/Router.php`
2. Inspect the .htaccess rules to ensure all requests are correctly routed

## Maintenance

When you make changes to your Next.js application:

1. Build the application: `npm run build`
2. Test locally (if possible)
3. Commit all changes, including files in the `/out` directory
4. Push to the `php-hostinger` branch
5. Hostinger should automatically deploy the updates

## Local Testing

You can test the PHP wrapper locally if you have PHP installed:

1. Navigate to your project directory
2. Run PHP's built-in server:
   ```
   cd tiberius-ai
   php -S localhost:8000
   ```
3. Open http://localhost:8000 in your browser
