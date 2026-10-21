# Use an official lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (use npm ci for cleaner, reliable installs in CI/Docker)
RUN npm ci

# Copy the rest of your application code
COPY . .

# Expose the port your Node.js app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]