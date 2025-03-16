# TiberiusAI Deployment Checklist

Use this checklist before committing to GitHub and deploying to Hostinger.

## Pre-Deployment Checks

- [x] Next.js configured for static export (`output: "export"` in next.config.mjs)
- [x] Images configured for static export (`unoptimized: true` in next.config.mjs)
- [x] Static mode environment variable set (`NEXT_PUBLIC_STATIC_MODE: 'true'` in next.config.mjs)
- [x] All dynamic routes have `export const dynamic = "force-static"` added
- [x] Server actions properly disabled (commented out `'use server'` directive)
- [x] Static alternatives implemented for dynamic features (StaticContactForm, etc.)
- [x] `.env` file properly excluded in `.gitignore`
- [x] `.env.example` created as a template for required environment variables

## Build and Verification

- [ ] Run deployment checks script to verify all requirements are met:
  ```powershell
  cd tiberius-ai
  node deployment-checks.js
  ```
- [ ] Build the project to verify it compiles successfully:
  ```powershell
  cd tiberius-ai
  npm run build
  ```
- [ ] Verify the `out` directory is generated with all static files

## GitHub Setup

- [ ] Create GitHub repository (if not already done)
- [ ] Configure repository as described in GITHUB_SETUP.md
- [ ] Add remote origin:
  ```powershell
  git remote add origin https://github.com/Akumagoshi/Website-4932.git
  ```
- [ ] Commit all files (excluding .env):
  ```powershell
  git add .
  git commit -m "Initial commit: TiberiusAI website ready for Hostinger deployment"
  ```
- [ ] Push to master branch:
  ```powershell
  git push -u origin master
  ```

## Hostinger Deployment

Choose one of the following deployment methods:

### Method 1: GitHub Integration (Recommended)

- [ ] In Hostinger hPanel, go to Websites → Manage → Git
- [ ] Connect to your GitHub repository (`https://github.com/Akumagoshi/Website-4932`)
- [ ] Configure deployment settings:
  - Branch: `master`
  - Build command: `npm run build`
  - Build output directory: `out`
- [ ] Trigger deployment

### Method 2: Manual FTP Upload

- [ ] Build the project locally:
  ```powershell
  cd tiberius-ai
  npm run build
  ```
- [ ] In Hostinger hPanel, go to Files → File Manager
- [ ] Navigate to your domain's public directory (typically `public_html/`)
- [ ] Upload all files from the local `out` directory to this folder

## Post-Deployment Verification

- [ ] Verify all pages load correctly on the live site
- [ ] Check all images are displaying properly
- [ ] Test the static contact form functionality
- [ ] Verify all links and navigation work correctly
- [ ] Check responsive design on different device sizes

## Notes

- Remember that the contact form in static mode is for demonstration only
- If you need a functional form, consider using a third-party form service like Formspree
- For future updates, remember to run the deployment checks script before committing changes
