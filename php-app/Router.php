<?php
namespace App;

class Router {
  public function dispatch() {
    $uri = $_SERVER['REQUEST_URI'];
    $path = parse_url($uri, PHP_URL_PATH);
    
    // Remove trailing slash if present
    $path = rtrim($path, '/');
    
    // Handle root path
    if ($path === '') {
      $this->serveFile('/index.html');
      return;
    }
    
    // Check if file exists in static directory with extension
    if (file_exists(STATIC_PATH . $path)) {
      $this->serveFile($path);
      return;
    }
    
    // Handle .html files
    if (file_exists(STATIC_PATH . $path . '.html')) {
      $this->serveFile($path . '.html');
      return;
    }
    
    // Handle static assets in _next directory
    if (strpos($path, '/_next/') === 0 && file_exists(STATIC_PATH . $path)) {
      $this->serveFile($path);
      return;
    }
    
    // Handle dynamic routes for services
    if (preg_match('|^/([^/]+)$|', $path, $matches)) {
      // This could be a [service] route
      $service = $matches[1];
      if (file_exists(STATIC_PATH . '/' . $service . '.html')) {
        // Explicitly set the content type and ensure inline display for service pages
        header('Content-Type: text/html; charset=UTF-8');
        header('Content-Disposition: inline');
        $this->serveFile('/' . $service . '.html');
        return;
      }
    }
    
    // Handle dynamic routes for service locations
    if (preg_match('|^/([^/]+)/([^/]+)$|', $path, $matches)) {
      // This could be a [service]/[location] route
      $service = $matches[1];
      $location = $matches[2];
      
      if (file_exists(STATIC_PATH . '/' . $service . '/' . $location . '.html')) {
        // Explicitly set the content type and ensure inline display for location pages
        header('Content-Type: text/html; charset=UTF-8');
        header('Content-Disposition: inline');
        $this->serveFile('/' . $service . '/' . $location . '.html');
        return;
      }
    }
    
    // 404 - Not found
    header("HTTP/1.0 404 Not Found");
    if (file_exists(STATIC_PATH . '/404.html')) {
      $this->serveFile('/404.html');
    } else {
      echo "404 - Page not found";
    }
  }
  
  private function serveFile($path) {
    $fullPath = STATIC_PATH . $path;
    
    if (!file_exists($fullPath)) {
      header("HTTP/1.0 404 Not Found");
      echo "404 - File not found: " . htmlspecialchars($path);
      return;
    }
    
    $ext = pathinfo($fullPath, PATHINFO_EXTENSION);
    
    // Set the appropriate content type
    switch ($ext) {
      case 'html':
        header('Content-Type: text/html; charset=UTF-8');
        // Force HTML to display inline in browser, not as a download
        header('Content-Disposition: inline');
        break;
      case 'css':
        header('Content-Type: text/css; charset=UTF-8');
        break;
      case 'js':
        header('Content-Type: application/javascript; charset=UTF-8');
        break;
      case 'json':
        header('Content-Type: application/json; charset=UTF-8');
        break;
      case 'svg':
        header('Content-Type: image/svg+xml');
        break;
      case 'png':
        header('Content-Type: image/png');
        break;
      case 'jpg':
      case 'jpeg':
        header('Content-Type: image/jpeg');
        break;
      case 'webp':
        header('Content-Type: image/webp');
        break;
      case 'ico':
        header('Content-Type: image/x-icon');
        break;
      default:
        // Check if file is actually HTML despite missing extension
        if (is_readable($fullPath) && filesize($fullPath) > 0) {
          $content = file_get_contents($fullPath, false, null, 0, 15);
          if (stripos($content, '<!DOCTYPE html') === 0 || stripos($content, '<html') === 0) {
            header('Content-Type: text/html; charset=UTF-8');
            header('Content-Disposition: inline');
            // Avoid falling through to default application/octet-stream
            $ext = 'html';
          } else {
            header('Content-Type: application/octet-stream');
          }
        } else {
          header('Content-Type: application/octet-stream');
        }
    }
    
    // Set caching headers for static assets
    if (strpos($path, '/_next/') === 0 || in_array($ext, ['css', 'js', 'png', 'jpg', 'jpeg', 'webp', 'svg', 'ico'])) {
      header('Cache-Control: public, max-age=31536000, immutable');
    } else {
      header('Cache-Control: no-cache, must-revalidate');
    }
    
    // Output the file
    readfile($fullPath);
  }
}
