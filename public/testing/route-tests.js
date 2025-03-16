'use client';

/**
 * Route validation testing script for TiberiusAI Website
 * This script tests all possible service+location combinations to ensure they load correctly
 */

// List of all services and locations to test
const services = ['business-process-automation', 'business-process-documentation', 'ai-automation'];
const locations = [
  'london', // Our newly added location
  'buckinghamshire', 'hertfordshire', 'essex', 'berkshire', 'surrey',
  'kent', 'sussex', 'middlesex', 'birmingham', 'manchester',
  'leeds', 'newcastle', 'sheffield', 'edinburgh', 'glasgow',
  'cardiff', 'newport', 'dublin'
];

// Test all route combinations
export const testAllRoutes = async () => {
  console.log('🧪 Starting route validation testing...');
  
  const results = {
    totalRoutes: services.length * locations.length + services.length + locations.length + 1,
    testedRoutes: 0,
    successfulRoutes: 0,
    failedRoutes: [],
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null
  };
  
  const startTime = performance.now();
  
  // Show visual progress indicator
  const progressElement = document.getElementById('route-test-progress');
  if (progressElement) {
    progressElement.innerHTML = `Testing routes: 0/${results.totalRoutes} (0%)`;
    progressElement.style.display = 'block';
  }
  
  // Update progress
  const updateProgress = () => {
    results.testedRoutes++;
    const percentage = Math.floor((results.testedRoutes / results.totalRoutes) * 100);
    
    if (progressElement) {
      progressElement.innerHTML = `Testing routes: ${results.testedRoutes}/${results.totalRoutes} (${percentage}%)`;
    }
  };
  
  // Test homepage
  try {
    console.log('Testing route: /');
    const homeResponse = await fetch('/', { method: 'HEAD' });
    if (homeResponse.ok) {
      results.successfulRoutes++;
    } else {
      results.failedRoutes.push({ 
        path: '/', 
        status: homeResponse.status,
        statusText: homeResponse.statusText 
      });
    }
  } catch (error) {
    results.failedRoutes.push({ 
      path: '/', 
      error: error.message 
    });
  }
  updateProgress();
  
  // Test service pages
  for (const service of services) {
    try {
      console.log(`Testing route: /${service}`);
      const serviceResponse = await fetch(`/${service}`, { method: 'HEAD' });
      if (serviceResponse.ok) {
        results.successfulRoutes++;
      } else {
        results.failedRoutes.push({ 
          path: `/${service}`, 
          status: serviceResponse.status,
          statusText: serviceResponse.statusText 
        });
      }
    } catch (error) {
      results.failedRoutes.push({ 
        path: `/${service}`, 
        error: error.message 
      });
    }
    updateProgress();
  }
  
  // Test location pages
  for (const location of locations) {
    try {
      console.log(`Testing route: /locations/${location}`);
      const locationResponse = await fetch(`/locations/${location}`, { method: 'HEAD' });
      if (locationResponse.ok) {
        results.successfulRoutes++;
      } else {
        results.failedRoutes.push({ 
          path: `/locations/${location}`, 
          status: locationResponse.status,
          statusText: locationResponse.statusText
        });
      }
    } catch (error) {
      results.failedRoutes.push({ 
        path: `/locations/${location}`, 
        error: error.message 
      });
    }
    updateProgress();
  }
  
  // Test service+location combination pages
  for (const service of services) {
    for (const location of locations) {
      try {
        console.log(`Testing route: /${service}/${location}`);
        const comboResponse = await fetch(`/${service}/${location}`, { method: 'HEAD' });
        if (comboResponse.ok) {
          results.successfulRoutes++;
        } else {
          results.failedRoutes.push({ 
            path: `/${service}/${location}`, 
            status: comboResponse.status,
            statusText: comboResponse.statusText
          });
        }
      } catch (error) {
        results.failedRoutes.push({ 
          path: `/${service}/${location}`, 
          error: error.message 
        });
      }
      updateProgress();
    }
  }
  
  const endTime = performance.now();
  results.endTime = new Date().toISOString();
  results.duration = `${((endTime - startTime) / 1000).toFixed(2)} seconds`;
  
  // Generate summary
  console.log('🏁 Route testing completed!');
  console.log(`✅ Successful routes: ${results.successfulRoutes}/${results.totalRoutes}`);
  console.log(`❌ Failed routes: ${results.failedRoutes.length}`);
  
  // Store results
  try {
    localStorage.setItem('routeTestResults', JSON.stringify(results));
    console.log('💾 Test results saved to localStorage');
  } catch (error) {
    console.error('Error saving test results:', error);
  }
  
  return results;
};

// Generate HTML report
export const generateRouteTestReport = (results) => {
  if (!results) {
    // Try to load from localStorage
    try {
      const savedResults = localStorage.getItem('routeTestResults');
      if (savedResults) {
        results = JSON.parse(savedResults);
      } else {
        return '<p>No test results available. Run the test first.</p>';
      }
    } catch (error) {
      return `<p>Error loading test results: ${error.message}</p>`;
    }
  }
  
  // Calculate success rate
  const successRate = Math.floor((results.successfulRoutes / results.totalRoutes) * 100);
  
  // Determine overall status
  let statusColor, statusText;
  if (successRate === 100) {
    statusColor = 'bg-green-500';
    statusText = 'All routes working';
  } else if (successRate >= 90) {
    statusColor = 'bg-yellow-500';
    statusText = 'Most routes working';
  } else {
    statusColor = 'bg-red-500';
    statusText = 'Multiple route issues';
  }
  
  let html = `
    <div class="mt-4 mb-6">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-bold">Route Test Summary</h3>
        <span class="px-3 py-1 rounded-full text-sm ${statusColor} text-white">${statusText}</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div class="bg-black/30 p-4 rounded-lg">
          <div class="text-2xl font-bold">${results.successfulRoutes}/${results.totalRoutes}</div>
          <div class="text-sm opacity-70">Successful Routes</div>
        </div>
        
        <div class="bg-black/30 p-4 rounded-lg">
          <div class="text-2xl font-bold">${successRate}%</div>
          <div class="text-sm opacity-70">Success Rate</div>
        </div>
        
        <div class="bg-black/30 p-4 rounded-lg">
          <div class="text-2xl font-bold">${results.duration}</div>
          <div class="text-sm opacity-70">Test Duration</div>
        </div>
      </div>
      
      <div class="mb-4">
        <div class="w-full bg-gray-700 rounded-full h-2.5">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${successRate}%"></div>
        </div>
      </div>
  `;
  
  // Add failed routes if any
  if (results.failedRoutes.length > 0) {
    html += `
      <div class="mt-6">
        <h4 class="text-md font-bold text-red-400 mb-2">Failed Routes (${results.failedRoutes.length})</h4>
        <div class="bg-black/30 rounded-lg overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="py-2 px-4 text-left">Path</th>
                <th class="py-2 px-4 text-left">Status</th>
                <th class="py-2 px-4 text-left">Error</th>
              </tr>
            </thead>
            <tbody>
    `;
    
    results.failedRoutes.forEach(route => {
      html += `
        <tr class="border-b border-gray-700">
          <td class="py-2 px-4">${route.path}</td>
          <td class="py-2 px-4">${route.status || 'N/A'}</td>
          <td class="py-2 px-4">${route.error || route.statusText || 'Unknown error'}</td>
        </tr>
      `;
    });
    
    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  
  html += `
    <div class="mt-4 text-xs opacity-50">
      Test started: ${results.startTime}<br>
      Test completed: ${results.endTime}
    </div>
  `;
  
  return html;
};

// If running in browser context, attach to window
if (typeof window !== 'undefined') {
  window.testAllRoutes = testAllRoutes;
  window.generateRouteTestReport = generateRouteTestReport;
}
