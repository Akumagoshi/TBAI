# Simple PowerShell script to commit Router.php fix and push to GitHub

# Stage the modified Router.php file
git add php-app/Router.php

# Commit the changes
git commit -m "Fix content-type headers for service pages"

# Push to GitHub
git push origin master

Write-Host "Router.php changes pushed to GitHub."
Write-Host "To deploy to Hostinger, go to the Hostinger control panel and trigger a new deployment."
