# Use an official Node runtime as a parent image
FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Clean the npm cache
RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the default command
CMD ["npm", "start"]

## Run the dockerfile using terminal
## [$]> docker build -t kaaoaa505/node_web_app .
## [$]> docker run -p 9090:8080 kaaoaa505/node_web_app

# result link with port is: http://localhost:9090/