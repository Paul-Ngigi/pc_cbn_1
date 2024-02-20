FROM node:18-buster-slim as build

# Set the working directory

WORKDIR /app

# Copy the package.json and package-lock.json from client directory
COPY ./client/package*.json ./

# Install the dependencies

RUN npm install

# Copy the client directory contents to the working directory

COPY ./client/ .

# Install Angular CLI

RUN npm install -g @angular/cli

# Build the application

RUN npm run build

# NGINX
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the NGINX configuration file
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the build artifacts to the NGINX directory
COPY --from=build /app/dist/peercarbon /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
# CMD ["nginx", "-g", "daemon off;"]
