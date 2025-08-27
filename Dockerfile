
# Choose a Node.js base image
FROM node:18-slim

# Set the working directory
WORKDIR /tmp

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
