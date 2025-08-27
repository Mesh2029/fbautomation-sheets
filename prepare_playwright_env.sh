#!/bin/sh


# It will also install all necessary system dependencies.
echo "Installing Playwright browsers and dependencies..."

# Install playwright and its dependencies
npx -y playwright@latest install --with-deps chromium


# Install Node.js modules from package.json
echo "Installing Node.js modules..."
npm install
