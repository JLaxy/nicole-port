# Using NODE image from Docker Hub
FROM node:22-alpine

# Create app directory in the container
WORKDIR /app

# Copy package files for dependencies
COPY package*.json ./

# Install dependencies in container
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Run App
CMD ["npm", "run", "dev"]