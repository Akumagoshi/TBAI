# TiberiusAI Next.js Deployment on Hostinger

This document provides instructions on how to properly deploy this Next.js application on Hostinger hosting.

## Important Configuration Files

- `.hostinger.yml`: Contains Node.js configuration for Hostinger
- `hostinger-build.sh`: Custom build script for the deployment process

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

To deploy using GitHub integration:

1. In Hostinger hPanel, go to Websites → Manage → Git
2. Connect to this GitHub repository (`https://github.com/Akumagoshi/TibsAI_Site`)
3. Configure the deployment settings:
   - Branch: `master`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 18.x
4. Trigger deployment

**Important**: Ensure that the "Skip PHP Build/Deployment" option is enabled in the deployment settings, as this is a Node.js application, not a PHP application.

### Method 2: Manual FTP Upload

If GitHub integration doesn't work, you can deploy manually:

1. Build the project locally:
   ```
   cd tiberius-ai
   npm install
   npm run build
   ```
2. Upload the contents of the `out` directory to your Hostinger hosting public directory (typically `public_html/`)

## Environment Variables

The following environment variables are important for this application:

- `NEXT_PUBLIC_STATIC_MODE`: Set to 'true' for static export (already set in next.config.mjs)
- `BASE_PATH`: If deploying to a subdirectory
- `URL`: Your domain URL (e.g., `https://yourdomain.com`)

## Troubleshooting

If you encounter deployment issues:

1. Verify that Hostinger supports Node.js applications
2. Ensure your hosting plan includes Node.js support
3. Check that the correct Node.js version (18+) is selected
4. Make sure the build command is correctly set to `npm run build`
5. Confirm the output directory is set to `out`

For further assistance, refer to the full `HOSTINGER_DEPLOYMENT.md` documentation.
