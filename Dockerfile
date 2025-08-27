FROM mcr.microsoft.com/playwright/python:v1.44.0

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install your Node.js dependencies
RUN npm install

# Command to run your application when the container starts
CMD ["node", "app.js"]