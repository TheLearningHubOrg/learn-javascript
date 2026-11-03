/**
 * Request handler for the starter API. It uses only node:http primitives so
 * every line is plain JavaScript you can read without a framework.
 */
import { conversions, toSafeInteger } from './lib/types.js';
import { textStats } from './lib/strings.js';
import { Inventory, SEED_PRODUCTS } from './lib/inventory.js';
import { AppError, NotFoundError, ValidationError, toAppError } from './lib/errors.js';
import { JAVASCRIPT_STAGES } from './roadmap.js';

const MAX_BODY_BYTES = 64 * 1024;

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
  });
  res.end(body);
}

/** Read and parse a JSON body, refusing anything larger than MAX_BODY_BYTES. */
async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES)
      throw new AppError('Body too large', { status: 413, code: 'TOO_LARGE' });
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString('utf8');
  return text === '' ? {} : JSON.parse(text);
}

/**
 * Build a handler with its own state. Each call gets a fresh inventory,
 * which keeps tests independent of one another.
 */
export function createApp({ seed = SEED_PRODUCTS, startedAt = Date.now() } = {}) {
  const inventory = Inventory.from(seed);

  /** Route table: "METHOD /path" -> handler. A Map keeps lookups O(1). */
  const routes = new Map([
    [
      'GET /health',
      () => ({ status: 'ok', uptimeSeconds: Math.round((Date.now() - startedAt) / 1000) }),
    ],
    [
      'GET /api/roadmap',
      () => JAVASCRIPT_STAGES.map(({ stageNumber, title }) => ({ stageNumber, title })),
    ],
    [
      'GET /api/types',
      (_req, url) => {
        const value = url.searchParams.get('value');
        if (value === null) throw new ValidationError('Query parameter "value" is required');
        return conversions(value);
      },
    ],
    [
      'POST /api/text/stats',
      async (req) => {
        const { text, top = 3 } = await readJson(req);
        if (typeof text !== 'string') throw new ValidationError('"text" must be a string');
        const limit = toSafeInteger(top);
        if (limit === null || limit < 1 || limit > 50)
          throw new ValidationError('"top" must be 1-50');
        return textStats(text, limit);
      },
    ],
    ['GET /api/inventory', () => ({ items: inventory.toJSON(), summary: inventory.summary() })],
    [
      'POST /api/inventory',
      async (req) => {
        const product = inventory.add(await readJson(req));
        return { status: 201, body: product.toJSON() };
      },
    ],
  ]);

  return async function handle(req, res) {
    const url = new URL(req.url ?? '/', 'http://localhost');
    try {
      const route = routes.get(`${req.method} ${url.pathname}`);
      if (!route) throw new NotFoundError(`No route for ${req.method} ${url.pathname}`);
      const result = await route(req, url);
      if (result && typeof result === 'object' && 'status' in result && 'body' in result) {
        sendJson(res, result.status, result.body);
      } else {
        sendJson(res, 200, result);
      }
    } catch (err) {
      const appError = toAppError(err);
      if (appError.status >= 500) console.error(appError.cause ?? appError);
      sendJson(res, appError.status, appError.toJSON());
    }
  };
}
