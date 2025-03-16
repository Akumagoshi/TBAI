# PowerShell script to commit Router.php fix and push to GitHub

Write-Host "Committing Router.php fix and pushing to GitHub..." -ForegroundColor Green

# Navigate to the repository directory
cd "$(Get-Location)"

# Check if we're in a git repository
if (-not (Test-Path -Path ".git")) {
    Write-Host "Not in a git repository. Please run this script from the repository root." -ForegroundColor Red
    exit 1
}

# Stage the modified Router.php file
Write-Host "Staging Router.php changes..." -ForegroundColor Cyan
git add php-app/Router.php
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error staging changes. Exiting." -ForegroundColor Red
    exit 1
}

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "Fix service pages content-type issue to prevent download prompt"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error committing changes. Exiting." -ForegroundColor Red
    exit 1
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error pushing to GitHub. Check if the remote exists and your credentials are correct." -ForegroundColor Red
    Write-Host "To add the remote, use: git remote add origin https://github.com/Akumagoshi/TBAI.git" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n✓ Changes pushed successfully to GitHub" -ForegroundColor Green
Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "1. Go to Hostinger control panel"
Write-Host "2. Trigger a new deployment from the GitHub repository"
Write-Host "3. After deployment, check if service pages now display correctly instead of downloading"

Write-Host "`nThis fix should resolve the issue with service pages prompting downloads instead of displaying in the browser." -ForegroundColor Green
