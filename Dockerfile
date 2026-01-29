# Build stage
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy source code
COPY . .

# Install any additional dependencies
RUN npm install

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
