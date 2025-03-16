<?php
// Set global headers for HTML content
header('Content-Type: text/html; charset=UTF-8');
header('Content-Disposition: inline');
header('X-Content-Type-Options: nosniff');

// Include bootstrap
require_once __DIR__ . '/php-app/bootstrap.php';

// Initialize router
$router = new App\Router();
$router->dispatch();