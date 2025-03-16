# PowerShell script for git commit and push

Write-Host "Current Status:"
git status

Write-Host "`nAdding Hostinger configuration files..."
git add .hostinger.yml .htaccess .node-version .user.ini HOSTINGER_README.md hostinger-build.sh index.php static.json package.json app/contact/actions.js app/[service]/page.js app/[service]/[location]/page.js app/locations/page.js app/privacy-policy/page.js app/cookie-policy/page.js

Write-Host "`nStatus after adding files:"
git status

Write-Host "`nCommitting changes..."
git commit -m "Add Hostinger deployment configuration files"

Write-Host "`nSetting up remote for TibsAI_Site..."
git remote -v
# If the remote doesn't exist already
git remote add origin https://github.com/Akumagoshi/TibsAI_Site.git

Write-Host "`nPushing to GitHub..."
git push -u origin master

Write-Host "`nFinished deployment to GitHub"
