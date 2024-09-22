# Use an official node image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port Vite runs on (default is 5173)
EXPOSE 5173

# Set environment variables if needed
ENV NODE_ENV=production

# Run the Vite build process
RUN npm run build

# Command to run the application in Vite's preview mode
CMD ["npm", "run", "preview"]
