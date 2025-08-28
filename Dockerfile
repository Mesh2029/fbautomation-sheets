# Choose a Node.js base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
# This is a critical step and must be done first
COPY package*.json ./
RUN npm install

# ARG to bust Docker's cache for the next command
ARG CACHE_BUST=3


# This command should be run *after* npm install
# The --with-deps flag ensures all necessary OS dependencies are also installed
RUN npx playwright install --with-deps

# Copy the rest of your application code
COPY . .

# Define the command to run your application
CMD ["node", "app.js"]