# Verify if the Next.js build created output files
Write-Host "Verifying Next.js build output..." -ForegroundColor Green

# Check if out directory exists
if (Test-Path -Path "out") {
    Write-Host "✓ The 'out' directory exists" -ForegroundColor Green
    
    # Count files in out directory
    $fileCount = (Get-ChildItem -Path "out" -Recurse | Measure-Object).Count
    Write-Host "  - Found $fileCount files/directories in the 'out' directory" -ForegroundColor Green
    
    # Check for index.html
    if (Test-Path -Path "out/index.html") {
        Write-Host "✓ Found index.html file" -ForegroundColor Green
        $indexSize = (Get-Item "out/index.html").Length
        Write-Host "  - index.html size: $indexSize bytes" -ForegroundColor Green
    } else {
        Write-Host "✗ index.html is missing!" -ForegroundColor Red
    }
    
    # List top-level directories/files
    Write-Host "`nTop-level files/directories in 'out':" -ForegroundColor Cyan
    Get-ChildItem -Path "out" | ForEach-Object {
        Write-Host "  - $($_.Name)" -ForegroundColor Gray
    }
    
    # Try to find _next directory which is crucial for Next.js static export
    if (Test-Path -Path "out/_next") {
        Write-Host "`n✓ Found _next directory (contains Next.js assets)" -ForegroundColor Green
        $nextFileCount = (Get-ChildItem -Path "out/_next" -Recurse | Measure-Object).Count
        Write-Host "  - Found $nextFileCount files/directories in the _next directory" -ForegroundColor Green
    } else {
        Write-Host "`n✗ The _next directory is missing! This indicates a build problem." -ForegroundColor Red
    }
} else {
    Write-Host "✗ The 'out' directory does not exist!" -ForegroundColor Red
    Write-Host "  This suggests that the Next.js build failed or wasn't run." -ForegroundColor Red
}

# Check for necessary build commands in package.json
Write-Host "`nChecking build configuration in package.json..." -ForegroundColor Cyan
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
Write-Host "  Build script: $($packageJson.scripts.build)" -ForegroundColor Gray

Write-Host "`nBuild verification complete." -ForegroundColor Green
