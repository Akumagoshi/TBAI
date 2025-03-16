# Git setup script for TiberiusAI website

# Set local git identity
git config --local user.email "tiberiusai@example.com"
git config --local user.name "Tiberius AI"

# Add all files except .env
git add .env.example
git add DEPLOYMENT_CHECKLIST.md
git add GITHUB_SETUP.md
git add app/[service]/[location]/page.js
git add app/[service]/page.js
git add app/contact/actions.js
git add app/cookie-policy/page.js
git add app/locations/page.js
git add app/privacy-policy/page.js
git add deployment-checks.js

# Commit the changes
git commit -m "Initial commit: TiberiusAI website ready for Hostinger deployment"

# Show status and log
Write-Host "============ Git Status ============"
git status

Write-Host "`n============ Git Log ============"
git log --oneline
