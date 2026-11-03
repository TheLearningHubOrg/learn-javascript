import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createApp } from '../src/app.js';

describe('HTTP API', () => {
  let server;
  let base;

  before(async () => {
    server = createServer(createApp());
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    base = `http://127.0.0.1:${server.address().port}`;
  });

  after(() => new Promise((resolve) => server.close(resolve)));

  it('GET /health returns ok', async () => {
    const res = await fetch(`${base}/health`);
    assert.equal(res.status, 200);
    assert.equal((await res.json()).status, 'ok');
  });

  it('GET /api/types explains a conversion', async () => {
    const res = await fetch(`${base}/api/types?value=${encodeURIComponent('  ')}`);
    const body = await res.json();
    assert.equal(body.number, 0);
    assert.equal(body.boolean, true);
  });

  it('GET /api/types without value is a 400', async () => {
    const res = await fetch(`${base}/api/types`);
    assert.equal(res.status, 400);
    assert.equal((await res.json()).error.code, 'VALIDATION');
  });

  it('POST /api/text/stats counts words', async () => {
    const res = await fetch(`${base}/api/text/stats`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: 'to be or not to be', top: 1 }),
    });
    const body = await res.json();
    assert.equal(body.words, 6);
    assert.deepEqual(body.topWords, [{ word: 'be', count: 2 }]);
  });

  it('rejects invalid JSON with 400', async () => {
    const res = await fetch(`${base}/api/text/stats`, { method: 'POST', body: '{nope' });
    assert.equal(res.status, 400);
  });

  it('POST /api/inventory adds a product and GET reflects it', async () => {
    const created = await fetch(`${base}/api/inventory`, {
      method: 'POST',
      body: JSON.stringify({ name: 'Monitor', price: 199, quantity: 2 }),
    });
    assert.equal(created.status, 201);
    const list = await (await fetch(`${base}/api/inventory`)).json();
    assert.ok(list.items.some((p) => p.name === 'Monitor'));
    assert.equal(list.summary.products, 4);
  });

  it('POST /api/inventory with bad data lists every problem', async () => {
    const res = await fetch(`${base}/api/inventory`, { method: 'POST', body: '{"price":"free"}' });
    assert.equal(res.status, 400);
    assert.equal((await res.json()).error.details.length, 2);
  });

  it('unknown routes are 404', async () => {
    const res = await fetch(`${base}/nope`);
    assert.equal(res.status, 404);
  });
});
