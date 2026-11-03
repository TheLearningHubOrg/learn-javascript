import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { compareTags, LruCache } from '../src/lib/collections.js';
import { Inventory, Product, SEED_PRODUCTS } from '../src/lib/inventory.js';
import { AppError, NotFoundError, ValidationError, toAppError } from '../src/lib/errors.js';

describe('Set methods (ES2025)', () => {
  it('computes intersection, union and difference', () => {
    assert.deepEqual(compareTags(['js', 'node', 'web'], ['web', 'css']), {
      both: ['web'],
      either: ['css', 'js', 'node', 'web'],
      onlyLeft: ['js', 'node'],
      disjoint: false,
    });
  });
});

describe('LruCache', () => {
  it('evicts the least recently used key', () => {
    const cache = new LruCache(2);
    cache.set('a', 1).set('b', 2);
    cache.get('a');
    cache.set('c', 3);
    assert.deepEqual(cache.keys(), ['a', 'c']);
    assert.equal(cache.get('b'), undefined);
    assert.equal(cache.size, 2);
  });
});

describe('Product and Inventory', () => {
  it('keeps the price in a private field and exposes a getter', () => {
    const p = new Product({ name: ' Mouse ', price: 19.99, quantity: 3, tags: ['a', 'a', 'b'] });
    assert.equal(p.name, 'Mouse');
    assert.equal(p.price, 19.99);
    assert.equal(p.totalCents, 5997);
    assert.deepEqual(p.tags, ['a', 'b']);
    assert.ok(Object.isFrozen(p.tags));
    assert.equal(Object.keys(p).includes('priceCents'), false);
  });

  it('collects every validation problem at once', () => {
    assert.throws(
      () => new Product({ name: '', price: -1, quantity: 1.5 }),
      (err) => err instanceof ValidationError && err.details.length === 3,
    );
  });

  it('is iterable and summarises totals', () => {
    const inv = Inventory.from([
      { name: 'A', price: 0.1, quantity: 1, tags: ['x'] },
      { name: 'B', price: 0.2, quantity: 1, tags: ['x', 'y'] },
      { name: 'C', price: 5, quantity: 0 },
    ]);
    assert.equal([...inv].length, 3);
    const s = inv.summary();
    assert.equal(s.totalValue, 0.3);
    assert.equal(s.units, 2);
    assert.deepEqual(s.outOfStock, ['C']);
    assert.deepEqual(s.tags, { x: 2, y: 1 });
  });

  it('throws NotFoundError for unknown ids', () => {
    const inv = new Inventory();
    assert.throws(() => inv.get(999), NotFoundError);
  });
});

describe('errors', () => {
  it('sets name, status and cause', () => {
    const root = new TypeError('boom');
    const err = new AppError('wrapped', { status: 502, cause: root });
    assert.equal(err.name, 'AppError');
    assert.equal(err.status, 502);
    assert.equal(err.cause, root);
    assert.ok(err instanceof Error);
    assert.equal(new NotFoundError().name, 'NotFoundError');
  });

  it('maps JSON syntax errors to 400', () => {
    let thrown;
    try {
      JSON.parse('{bad');
    } catch (e) {
      thrown = e;
    }
    const mapped = toAppError(thrown);
    assert.equal(mapped.status, 400);
    assert.equal(mapped.cause, thrown);
    assert.equal(toAppError(new Error('x')).status, 500);
  });
});

describe('Inventory#search (Stage 3 exercise)', () => {
  it('returns a lazy iterator filtered by tag, price and stock', () => {
    const inventory = Inventory.from(SEED_PRODUCTS);
    const cheapHardware = inventory.search({ tag: 'hardware', maxPrice: 50, inStock: true });
    assert.equal(typeof cheapHardware.next, 'function');
    assert.equal(Array.isArray(cheapHardware), false);
    assert.deepEqual(
      cheapHardware.toArray().map((p) => p.name),
      ['USB-C cable'],
    );
    assert.equal(inventory.search({ tag: 'software' }).toArray().length, 1);
    assert.equal(inventory.search({ tag: 'software', inStock: true }).toArray().length, 0);
    assert.equal(inventory.search().toArray().length, 3);
  });
});
