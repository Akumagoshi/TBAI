# Git reset and setup script for TiberiusAI website

# Reset the git repository
Write-Host "Resetting git repository..."
Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
git init
Write-Host "Git repository initialized"

# Set local git identity
Write-Host "Setting up git identity..."
git config --local user.email "tiberiusai@example.com"
git config --local user.name "Tiberius AI"
Write-Host "Git identity configured"

# Add all files except .env
Write-Host "Adding files to git..."
git add .
git reset -- .env
git status
Write-Host "Files staged for commit"

# Commit the changes
Write-Host "Committing changes..."
git commit -m "Initial commit: TiberiusAI website ready for Hostinger deployment"
Write-Host "Changes committed"

# Show status and log
Write-Host "`n============ Git Status ============"
git status

Write-Host "`n============ Git Log ============"
git log --oneline

Write-Host "`n============ Next Steps ============"
Write-Host "Your local repository is now set up!"
Write-Host "To connect to GitHub, create a new repository and run:"
Write-Host "git remote add origin https://github.com/YourUsername/tiberius-ai.git"
Write-Host "git push -u origin master"
