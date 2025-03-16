# GitHub Setup and Deployment Guide for TiberiusAI

This document provides step-by-step instructions for setting up a GitHub repository for the TiberiusAI website and preparing it for deployment to Hostinger.

## Prerequisites

- GitHub account
- Git installed on your local machine
- TiberiusAI website codebase ready for deployment (deployment-checks.js script passing all checks)

## Setting Up the GitHub Repository

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com/) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name: `tiberius-ai` (or your preferred name)
   - Description: "TiberiusAI business process automation website"
   - Set the repository to Public or Private as needed
   - Do not initialize with README, .gitignore, or license files
   - Click "Create repository"

2. **Initialize the local repository**
   - The repository has already been initialized with `git init`
   
3. **Add the GitHub repository as a remote**
   ```powershell
   cd tiberius-ai
   git remote add origin https://github.com/Akumagoshi/Website-4932.git
   ```
   
   Note: Replace `Akumagoshi/Website-4932` with your GitHub username and repository name

## Preparing Files for Commit

1. **Ensure .env file is not committed**
   - Verify that `.env` is in your `.gitignore` file
   - Run `git check-ignore -v .env` to confirm

2. **Add .env.example as a template**
   - The `.env.example` file has been created as a template

3. **Add all files to staging**
   ```powershell
   git add .
   ```

4. **Review what will be committed**
   ```powershell
   git status
   ```
   
   - Ensure that sensitive files (like `.env`) are not included
   - Ensure that the `out` directory (if it exists) is not included

## Making the Initial Commit

1. **Commit the files**
   ```powershell
   git commit -m "Initial commit: TiberiusAI website ready for Hostinger deployment"
   ```

2. **Push to the main branch**
   ```powershell
   git push -u origin master
   ```

## Deploying to Hostinger

Follow the instructions in the `HOSTINGER_DEPLOYMENT.md` file, using one of these methods:

### Method 1: Manual FTP Upload

After pushing to GitHub, build the project locally and upload to Hostinger:

```powershell
npm run build
```

Then upload the contents of the `out` directory to your Hostinger hosting using FTP.

### Method 2: GitHub Integration (Recommended)

1. In Hostinger hPanel, navigate to Websites → Manage → Git
2. Connect to your GitHub repository
3. Configure the deployment settings:
   - Branch: `master`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Trigger deployment

## Post-Deployment Verification

After deployment, verify:

1. All pages load correctly
2. Images display properly
3. Static contact form works as expected
4. Navigation is functional
5. Responsive design works on different devices

## Making Future Updates

For future updates:

1. Make changes locally
2. Run `node deployment-checks.js` to verify all is ready
3. Commit changes:
   ```powershell
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. If using GitHub integration, Hostinger will automatically rebuild and deploy
5. If using manual FTP, rebuild locally and upload the new `out` directory

## Important Notes

- **Environment Variables**: For production, you may need to set `BASE_PATH` and `URL` in Hostinger's environment configuration
- **Custom Domain**: Once deployed, set up your custom domain in Hostinger
- **SSL Certificate**: Enable SSL for HTTPS in Hostinger's control panel
