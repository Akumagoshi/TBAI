# PowerShell script to push TiberiusAI website to the new GitHub repository

Write-Host "Starting push to new GitHub repository: https://github.com/Akumagoshi/TibsAI" -ForegroundColor Green

# Step 1: Reset the existing Git repository and initialize a new one
Write-Host "`nStep 1: Resetting Git repository..." -ForegroundColor Cyan
Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error initializing Git repository. Exiting." -ForegroundColor Red
    exit 1
}
Write-Host "New Git repository initialized successfully." -ForegroundColor Green

# Step 2: Configure Git user
Write-Host "`nStep 2: Configuring Git user..." -ForegroundColor Cyan
git config --local user.name "Akumagoshi"
git config --local user.email "robad9999@hotmail.com"
Write-Host "Git user configured." -ForegroundColor Green

# Step 3: Stage all files
Write-Host "`nStep 3: Staging files..." -ForegroundColor Cyan
git add .
git reset -- .env
Write-Host "All files staged (excluding .env)" -ForegroundColor Green

# Step 4: Commit changes
Write-Host "`nStep 4: Committing changes..." -ForegroundColor Cyan
git commit -m "Initial commit with PHP wrapper for TiberiusAI website"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error committing changes. Exiting." -ForegroundColor Red
    exit 1
}
Write-Host "Changes committed successfully." -ForegroundColor Green

# Step 5: Add remote and push
Write-Host "`nStep 5: Adding remote and pushing to GitHub..." -ForegroundColor Cyan
git remote add origin https://github.com/Akumagoshi/TibsAI.git
git push -u origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error pushing to GitHub. Check error messages above." -ForegroundColor Red
    exit 1
}
Write-Host "Successfully pushed to GitHub repository!" -ForegroundColor Green

# Step 6: Instructions for Hostinger
Write-Host "`n`n==========================================================" -ForegroundColor Yellow
Write-Host "Next Steps for Hostinger Deployment:" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "1. Go to Hostinger's control panel"
Write-Host "2. Update the GitHub repository URL to: https://github.com/Akumagoshi/TibsAI.git"
Write-Host "3. Set branch to 'master'"
Write-Host "4. Ensure PHP deployment mode is selected"
Write-Host "5. Set deploy path to '/'"
Write-Host "6. Trigger a new deployment"
Write-Host "`nThis should resolve the 404 error for index.html" -ForegroundColor Green
