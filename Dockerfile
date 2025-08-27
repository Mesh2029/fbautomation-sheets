# FROM mcr.microsoft.com/playwright/python:v1.44.0

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the application files into the container
# COPY . .

# # Install your Node.js dependencies
# RUN npm install

# # Command to run your application when the container starts
# CMD ["node", "app.js"]  








# Choose a Node.js base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Set the PLAYWRIGHT_BROWSERS_PATH environment variable to a writable directory
RUN PLAYWRIGHT_BROWSERS_PATH=/tmp/playwright npx playwright install --with-deps
# ENV PLAYWRIGHT_BROWSERS_PATH=/tmp/playwright

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install Playwright browsers into the specified path
# The --with-deps flag ensures all necessary OS dependencies are also installed
# RUN npx playwright install --with-deps

# Copy the rest of your application code
COPY . .

# Define the command to run your application
CMD ["node", "app.js"]
