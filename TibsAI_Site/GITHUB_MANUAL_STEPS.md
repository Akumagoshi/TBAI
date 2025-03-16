# Manual GitHub Setup for TiberiusAI

Since we're encountering some issues with automated scripts, here's a step-by-step manual guide to set up your GitHub repository:

## 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name: `tiberius-ai` (or your preferred name)
4. Description: "TiberiusAI business process automation website"
5. Set to Public or Private as needed
6. Do NOT initialize with README, .gitignore, or license files
7. Click "Create repository"

## 2. Set Up Your Local Git Repository

Open a PowerShell window and run these commands:

```powershell
# Navigate to the project directory
cd C:\Users\robad\Cline\TiberiusAI Website\tiberius-ai

# Reset the repository if needed (CAUTION: this will remove any existing git history)
# Delete the .git folder if it exists
rm -r -force .git
git init

# Configure your identity
git config --local user.email "your.email@example.com"
git config --local user.name "Your Name"

# Add all files (excluding .env)
git add .
git reset -- .env

# Verify what will be committed
git status

# Make the initial commit
git commit -m "Initial commit: TiberiusAI website ready for Hostinger deployment"
```

## 3. Connect to GitHub and Push

After GitHub shows you the repository setup instructions, run the following commands (replace the URL with your actual repository URL):

```powershell
# Add the remote repository
git remote add origin https://github.com/YourUsername/tiberius-ai.git

# Push your code to GitHub
git push -u origin master
```

You'll need to authenticate with GitHub when prompted.

## 4. Verify Your Repository

1. Refresh your GitHub repository page
2. You should see all your files and the commit message
3. Check that sensitive files like `.env` are not included

## 5. Next Steps for Hostinger Deployment

After successfully pushing to GitHub, refer to the `HOSTINGER_DEPLOYMENT.md` file for instructions on deploying to Hostinger, using either:

1. GitHub integration (recommended)
2. Manual FTP upload

## Troubleshooting

- If you encounter authentication issues, you may need to use a Personal Access Token (PAT)
- If you get an error about the repository already existing, try `git pull origin master --allow-unrelated-histories` and then push again
- For other issues, refer to GitHub's documentation or contact their support
