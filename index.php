<?php
// Main entry point for the application
require_once __DIR__ . '/php-app/bootstrap.php';

// Initialize the router
$router = new App\Router();

// Route the request to the appropriate static file
$router->dispatch();
