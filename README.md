# TiberiusAI Website

A corporate website for TiberiusAI, built with Next.js and optimized for Hostinger deployment.

## Technology Stack

- **Frontend**: Next.js 15
- **Styling**: TailwindCSS 4
- **Database**: Supabase

## Deployment Instructions for Hostinger

### Prerequisites

- Node.js (version 18.x or higher)
- npm or yarn
- Git (optional but recommended)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Akumagoshi/Website-4932.git
   cd Website-4932
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

To create a production build for Hostinger:

```bash
npm run build
```

This will create a static export in the `out` directory, which can be uploaded to Hostinger.

### Deploying to Hostinger

#### Method 1: Manual Upload (FTP)

1. Build the project: `npm run build`
2. Using FTP, upload the contents of the `out` directory to your Hostinger hosting (usually to the `public_html` or a subdomain folder).

#### Method 2: Via Git (Recommended)

1. In Hostinger hPanel, go to Websites → Manage → Git.
2. Connect to this GitHub repository.
3. Configure automatic deployments from the main branch.

#### Method 3: Node.js App (For Hostinger Business or Cloud Hosting)

1. In Hostinger hPanel, go to Websites → Manage → Advanced → Node.js.
2. Create a new application with:
   - Node version: 18.x or higher
   - Startup file: server.js (if you've set up a server) or follow Hostinger's instructions
   - Application Mode: Production

## Environment Variables

For production deployment, make sure to configure these environment variables in Hostinger:

- `BASE_PATH`: If deploying to a subdirectory
- `URL`: Your domain URL (for asset prefixing)

## Support

For any issues or questions, please contact the development team.
