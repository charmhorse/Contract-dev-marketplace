# Define Node.js version
ARG NODE_VERSION=14

# Use Ubuntu as base image
FROM node:${NODE_VERSION} AS app_common

# Set timezone in Ubuntu container (optional)
# You may want to install the 'tzdata' package if needed

# Expose port 3000
EXPOSE 3000

# Set environment variable to disable telemetry in Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json /usr/src/app/

# Development stage
FROM app_common AS app_dev

# Set command for development
CMD ["yarn", "dev"]

# Production stage
FROM app_common AS app_prod

# Install dependencies
RUN yarn install --frozen-lockfile

# Set environment to production
ENV NODE_ENV=production

# Copy the rest of the application code
COPY . ./

# Build the application
RUN yarn build

# Set command for production
CMD ["yarn", "start"]
