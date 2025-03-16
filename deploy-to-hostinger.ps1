# PowerShell script to prepare TiberiusAI for Hostinger deployment

# Ensure we're in the correct directory
Set-Location $PSScriptRoot

# Step 1: Build the Next.js application
Write-Host "Building Next.js application..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting deployment."
    exit 1
}
Write-Host "Next.js build completed successfully"

# Step 2: Create a new branch for Hostinger deployment
Write-Host "Creating php-hostinger branch..."
git checkout -b php-hostinger 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    # Branch may already exist
    git checkout php-hostinger
}
Write-Host "Switched to php-hostinger branch"

# Step 3: Ensure PHP files are up to date
Write-Host "Ensuring PHP files are up to date..."

# Verify php-app directory exists
if (-not (Test-Path "php-app")) {
    New-Item -ItemType Directory -Path "php-app" | Out-Null
    Write-Host "Created php-app directory"
}

# Add these files to git
Write-Host "Adding files to git..."
git add php-app/ index.php composer.json composer.lock .htaccess

# Step 4: Commit changes
Write-Host "Committing changes..."
git commit -m "Prepare PHP wrapper for Hostinger deployment"

# Step 5: Instructions for GitHub
Write-Host "`n=============================================="
Write-Host "Deployment preparation complete!"
Write-Host "=============================================="
Write-Host "`nTo push to GitHub and deploy on Hostinger:"
Write-Host "1. Push the branch to GitHub:"
Write-Host "   git push -u origin php-hostinger"
Write-Host "`n2. In Hostinger, connect to this repository with:"
Write-Host "   - Repository URL: Your GitHub repository URL"
Write-Host "   - Branch: php-hostinger"
Write-Host "   - Deploy path: /"
Write-Host "`nNote: Do not use the Node.js configuration in Hostinger,"
Write-Host "      as we're using a PHP wrapper instead."
