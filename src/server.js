/**
 * Entry point: `node src/server.js`. Reads PORT, binds 0.0.0.0 so the
 * server is reachable inside a container, and shuts down cleanly on SIGTERM.
 */
import { createServer } from 'node:http';
import { createApp } from './app.js';

const port = Number.parseInt(process.env.PORT ?? '8080', 10);
const host = process.env.HOST ?? '0.0.0.0';

const server = createServer(createApp());

server.listen(port, host, () => {
  console.log(`learn-javascript starter listening on http://${host}:${port}`);
});

function shutdown(signal) {
  console.log(`${signal} received, closing server`);
  server.close(() => process.exit(0));
  // Force exit if open keep-alive sockets hold the server past 10 seconds.
  setTimeout(() => process.exit(1), 10_000).unref();
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
