# Fix nested repository issue and push to GitHub
# This script:
# 1. Removes the .git directory from TibsAI_Site
# 2. Rebuilds the Next.js app
# 3. Sets up a clean Git repository
# 4. Pushes to GitHub correctly

Write-Host "Starting nested repository fix and GitHub push..." -ForegroundColor Green

# Step 1: Remove the .git directory from TibsAI_Site
Write-Host "`nStep 1: Removing nested .git directory from TibsAI_Site..." -ForegroundColor Cyan
$nestedGitPath = Join-Path -Path "TibsAI_Site" -ChildPath ".git"
if (Test-Path -Path $nestedGitPath) {
    Remove-Item -Path $nestedGitPath -Recurse -Force
    Write-Host "✓ Removed nested .git directory from TibsAI_Site" -ForegroundColor Green
} else {
    Write-Host "No .git directory found in TibsAI_Site" -ForegroundColor Yellow
}

# Step 2: Build the Next.js app
Write-Host "`nStep 2: Building Next.js application..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting deployment." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Next.js build completed successfully" -ForegroundColor Green

# Step 3: Make sure .gitignore doesn't exclude /out
Write-Host "`nStep 3: Updating .gitignore to include /out directory..." -ForegroundColor Cyan
$gitignore = Get-Content ".gitignore" -Raw
$gitignore = $gitignore -replace "/out/", "# /out/ - We need this directory for Hostinger PHP deployment"
Set-Content ".gitignore" $gitignore
Write-Host "✓ .gitignore updated to include /out directory" -ForegroundColor Green

# Step 4: Git operations - clean setup
Write-Host "`nStep 4: Setting up clean Git repository..." -ForegroundColor Cyan

# Reset existing git repository completely
Write-Host "Initializing fresh Git repository..." -ForegroundColor Gray
Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error initializing Git repository. Exiting." -ForegroundColor Red
    exit 1
}

# Configure Git user
git config --local user.name "Akumagoshi"
git config --local user.email "robad9999@hotmail.com"
Write-Host "Git user configured." -ForegroundColor Gray

# Stage all files including the /out directory
Write-Host "Staging files (including /out directory)..." -ForegroundColor Gray
git add .
git reset -- .env
Write-Host "✓ All files staged (excluding .env)" -ForegroundColor Green

# Verify out directory is included
$stagedFiles = git status --porcelain
if ($stagedFiles -match "out/") {
    Write-Host "✓ out/ directory is included in staged files" -ForegroundColor Green
} else {
    Write-Host "! out/ directory is NOT included in staged files!" -ForegroundColor Red
    Write-Host "Trying to explicitly add out directory..." -ForegroundColor Yellow
    git add out/ --force
}

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Gray
git commit -m "Deploy TiberiusAI with PHP wrapper and static build files (fixed nested repository)"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error committing changes. Exiting." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Changes committed successfully" -ForegroundColor Green

# Add remote and push
Write-Host "Adding remote and pushing to GitHub..." -ForegroundColor Gray
git remote add origin https://github.com/Akumagoshi/TBAI.git
git push -u origin master --force
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error pushing to GitHub. Check error messages above." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Successfully pushed to https://github.com/Akumagoshi/TBAI.git!" -ForegroundColor Green

# Final instructions
Write-Host "`n`n==========================================================" -ForegroundColor Yellow
Write-Host "Next Steps for Hostinger Deployment:" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "1. Go to Hostinger's control panel"
Write-Host "2. Update the GitHub repository URL to: https://github.com/Akumagoshi/TBAI.git"
Write-Host "3. Set branch to 'master'"
Write-Host "4. Ensure PHP deployment mode is selected"
Write-Host "5. Set deploy path to '/'"
Write-Host "6. Trigger a new deployment"
Write-Host "`nThis should resolve the 404 error for index.html as the build files are now included" -ForegroundColor Green
