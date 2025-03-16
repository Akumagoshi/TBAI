<?php
// Bootstrap file to set up the PHP environment

// Define base paths
define('BASE_PATH', __DIR__ . '/..');
define('STATIC_PATH', BASE_PATH . '/out');

// Error reporting in development, comment out in production
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Load classes
require_once BASE_PATH . '/php-app/Router.php';

// Initialize static file serving variables
date_default_timezone_set('UTC');
