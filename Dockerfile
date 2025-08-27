# Use an official Ubuntu base image
FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js and npm from the official NodeSource repository
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Install core Playwright dependencies. This list is comprehensive for Ubuntu.
RUN apt-get update && apt-get install -y \
    libnss3 \
    libnspr4 \
    libatk-bridge2.0-0 \
    libxkbcommon0 \
    libatspi2.0-0 \
    libdrm2 \
    libgbm1 \
    libglib2.0-0 \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libxrender1 \
    libxtst6 \
    libjpeg-turbo8 \
    libpng16-16 \
    libwebp-dev \
    libharfbuzz0b \
    libfontconfig1 \
    libdbus-1-3 \
    xdg-utils

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install your Node.js dependencies
RUN npm install


# Install ALL Playwright dependencies required for the OS
RUN npx playwright install-deps

# Command to run your application when the container starts
CMD ["node", "app.js"]



# Download the Chromium browser
RUN npx playwright install chromium

