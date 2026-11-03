# learn-javascript starter API: plain JavaScript on node:http, no runtime dependencies.

# ---- test: install dev tooling, lint and run the test suite -----------------
FROM node:24-alpine AS test
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY eslint.config.js ./
COPY src ./src
COPY tests ./tests
RUN npm run lint && npm test

# ---- runtime: only package.json and src, run as the unprivileged node user ---
FROM node:24-alpine AS runtime
ENV NODE_ENV=production \
    PORT=8080
WORKDIR /app
COPY --from=test --chown=node:node /app/package.json ./
COPY --from=test --chown=node:node /app/src ./src
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -qO- "http://127.0.0.1:${PORT}/health" > /dev/null || exit 1
CMD ["node", "src/server.js"]
