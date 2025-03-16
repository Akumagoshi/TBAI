// Deployment Checks for TiberiusAI Static Export
// This file contains checks to verify the site is ready for static export to Hostinger

const fs = require('fs');
const path = require('path');

// Check 1: Verify Next.js config has static export settings
const checkNextConfig = () => {
  try {
    const configPath = path.join(__dirname, 'next.config.mjs');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for required export settings
    const hasOutputExport = configContent.includes('output: "export"');
    const hasUnoptimizedImages = configContent.includes('unoptimized: true');
    const hasStaticMode = configContent.includes('NEXT_PUBLIC_STATIC_MODE');
    
    return {
      passed: hasOutputExport && hasUnoptimizedImages && hasStaticMode,
      details: {
        hasOutputExport,
        hasUnoptimizedImages,
        hasStaticMode
      }
    };
  } catch (error) {
    return {
      passed: false,
      error: error.message
    };
  }
};

// Check 2: Verify dynamic routes have force-static directive
const checkDynamicRoutes = () => {
  const routesToCheck = [
    'app/[service]/page.js',
    'app/[service]/[location]/page.js',
    'app/locations/page.js',
    'app/contact/page.js',
    'app/privacy-policy/page.js',
    'app/cookie-policy/page.js'
  ];
  
  const results = {};
  let allPassed = true;
  
  routesToCheck.forEach(route => {
    try {
      const routePath = path.join(__dirname, route);
      const routeContent = fs.readFileSync(routePath, 'utf8');
      
      const hasForceStatic = routeContent.includes('export const dynamic = "force-static"');
      results[route] = hasForceStatic;
      
      if (!hasForceStatic) allPassed = false;
    } catch (error) {
      results[route] = `Error: ${error.message}`;
      allPassed = false;
    }
  });
  
  return {
    passed: allPassed,
    details: results
  };
};

// Check 3: Verify .env file is in .gitignore
const checkEnvGitignore = () => {
  try {
    const gitignorePath = path.join(__dirname, '.gitignore');
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    
    const hasEnvIgnore = gitignoreContent.includes('.env') || 
                          gitignoreContent.includes('.env*');
    
    return {
      passed: hasEnvIgnore,
      details: {
        hasEnvIgnore
      }
    };
  } catch (error) {
    return {
      passed: false,
      error: error.message
    };
  }
};

// Check 4: Verify server components/actions are disabled
const checkServerActions = () => {
  try {
    const actionsPath = path.join(__dirname, 'app/contact/actions.js');
    const actionsContent = fs.readFileSync(actionsPath, 'utf8');
    
    const hasServerDirective = actionsContent.includes("'use server'");
    const isCommentedOut = actionsContent.includes("// 'use server'");
    
    return {
      passed: !hasServerDirective || isCommentedOut,
      details: {
        serverDirectiveCommentedOut: isCommentedOut
      }
    };
  } catch (error) {
    return {
      passed: false,
      error: error.message
    };
  }
};

// Run all checks
const runChecks = () => {
  console.log('Running TiberiusAI Static Export Deployment Checks...\n');
  
  const nextConfigCheck = checkNextConfig();
  const dynamicRoutesCheck = checkDynamicRoutes();
  const envGitignoreCheck = checkEnvGitignore();
  const serverActionsCheck = checkServerActions();
  
  console.log('1. Next.js Config Check:');
  console.log(`   Passed: ${nextConfigCheck.passed ? '✅' : '❌'}`);
  console.log(`   - output: "export" setting: ${nextConfigCheck.details?.hasOutputExport ? '✅' : '❌'}`);
  console.log(`   - unoptimized images: ${nextConfigCheck.details?.hasUnoptimizedImages ? '✅' : '❌'}`);
  console.log(`   - static mode env var: ${nextConfigCheck.details?.hasStaticMode ? '✅' : '❌'}`);
  
  console.log('\n2. Dynamic Routes Check:');
  console.log(`   Passed: ${dynamicRoutesCheck.passed ? '✅' : '❌'}`);
  Object.entries(dynamicRoutesCheck.details).forEach(([route, passed]) => {
    console.log(`   - ${route}: ${passed === true ? '✅' : '❌'}`);
  });
  
  console.log('\n3. .env in .gitignore Check:');
  console.log(`   Passed: ${envGitignoreCheck.passed ? '✅' : '❌'}`);
  
  console.log('\n4. Server Actions Check:');
  console.log(`   Passed: ${serverActionsCheck.passed ? '✅' : '❌'}`);
  
  const allPassed = nextConfigCheck.passed && 
                   dynamicRoutesCheck.passed && 
                   envGitignoreCheck.passed && 
                   serverActionsCheck.passed;
  
  console.log('\n==================================');
  console.log(`Overall Status: ${allPassed ? '✅ READY FOR DEPLOYMENT' : '❌ NOT READY FOR DEPLOYMENT'}`);
  console.log('==================================\n');
  
  if (!allPassed) {
    console.log('Please fix the issues above before committing to GitHub and deploying to Hostinger.');
  } else {
    console.log('The website is ready to be committed to GitHub and deployed to Hostinger!');
  }
};

runChecks();
