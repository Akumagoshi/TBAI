#!/bin/bash

# This script is used by Hostinger to build the Next.js application

echo "Starting build process for TiberiusAI Next.js project"

# Install Node.js dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# The static output will be in the 'out' directory
echo "Build complete! Static files are in the 'out' directory"
