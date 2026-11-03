/**
 * Stages 2 and 3: arrays, Map and Set used as data structures.
 */

/** Split an array into pieces of `size`. */
export function chunk(items, size) {
  if (!Number.isInteger(size) || size < 1) throw new RangeError('size must be a positive integer');
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/** Keep the first item seen for each key. */
export function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Stage 2 exercise solution: count items per key, highest count first.
 * toSorted is stable, so ties keep the order in which keys first appeared.
 */
export function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return new Map([...counts].toSorted(([, a], [, b]) => b - a));
}

/** Set algebra with the ES2025 Set methods. */
export function compareTags(a, b) {
  const left = new Set(a);
  const right = new Set(b);
  return {
    both: [...left.intersection(right)].sort(),
    either: [...left.union(right)].sort(),
    onlyLeft: [...left.difference(right)].sort(),
    disjoint: left.isDisjointFrom(right),
  };
}

/**
 * Least-recently-used cache. A Map remembers insertion order, so its first
 * key is always the oldest; re-inserting a key on read marks it as fresh.
 */
export class LruCache {
  #map = new Map();
  #capacity;

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) throw new RangeError('capacity must be >= 1');
    this.#capacity = capacity;
  }

  get size() {
    return this.#map.size;
  }

  get(key) {
    if (!this.#map.has(key)) return undefined;
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }

  set(key, value) {
    this.#map.delete(key);
    this.#map.set(key, value);
    if (this.#map.size > this.#capacity) this.#map.delete(this.#map.keys().next().value);
    return this;
  }

  keys() {
    return [...this.#map.keys()];
  }
}
