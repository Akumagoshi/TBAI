# PowerShell script to:
# 1. Build the Next.js app
# 2. Make sure the /out directory is included in Git
# 3. Push to new TBAI GitHub repository

Write-Host "Starting the push to GitHub (TBAI) with out directory included..." -ForegroundColor Green

# Step 1: Build the Next.js app
Write-Host "`nStep 1: Building Next.js application..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting deployment." -ForegroundColor Red
    exit 1
}
Write-Host "Next.js build completed successfully" -ForegroundColor Green

# Step 2: Verify the output
Write-Host "`nStep 2: Verifying build output..." -ForegroundColor Cyan
if (Test-Path -Path "out/index.html") {
    Write-Host "✓ index.html exists in out directory" -ForegroundColor Green
    $indexSize = (Get-Item "out/index.html").Length
    Write-Host "  - Size: $indexSize bytes" -ForegroundColor Gray
} else {
    Write-Host "✗ index.html is missing! Build may have failed." -ForegroundColor Red
    exit 1
}

# Step 3: Make sure .gitignore doesn't exclude /out
Write-Host "`nStep 3: Updating .gitignore to include /out directory..." -ForegroundColor Cyan
$gitignore = Get-Content ".gitignore" -Raw
$gitignore = $gitignore -replace "/out/", "# /out/ - We need this directory for Hostinger PHP deployment"
Set-Content ".gitignore" $gitignore
Write-Host "✓ .gitignore updated" -ForegroundColor Green

# Step 4: Git operations - add, commit, and push including /out
Write-Host "`nStep 4: Git operations..." -ForegroundColor Cyan

# Reset existing git repository if needed to avoid conflicts
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
    Write-Host "✗ out/ directory is NOT included in staged files!" -ForegroundColor Red
    Write-Host "Trying to explicitly add out directory..." -ForegroundColor Yellow
    git add out/ --force
}

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Gray
git commit -m "Deploy TiberiusAI with PHP wrapper and static build files"
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

# Step 5: Instructions for Hostinger
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
