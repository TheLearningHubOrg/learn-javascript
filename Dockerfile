# Multi-stage Dockerfile for learn-javascript
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY src/ ./src/
COPY tests/ ./tests/
RUN npm test

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app /app
USER node
CMD ["node", "src/index.js"]
