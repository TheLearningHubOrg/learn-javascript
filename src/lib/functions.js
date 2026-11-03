/**
 * Stage 2: functions are values. Each helper takes or returns a function
 * and keeps its private state in a closure.
 */

/** Left-to-right composition: pipe(f, g)(x) === g(f(x)). */
export const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

/** Right-to-left composition: compose(f, g)(x) === f(g(x)). */
export const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((acc, fn) => fn(acc), input);

/** Run `fn` at most once and remember its result. */
export function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

/**
 * Cache results by key. The default key suits primitive arguments only;
 * pass `keyFn` for objects. `maxSize` bounds memory by evicting the oldest entry.
 */
export function memoize(fn, { keyFn = (...args) => JSON.stringify(args), maxSize = 500 } = {}) {
  const cache = new Map();
  function memoized(...args) {
    const key = keyFn(...args);
    if (cache.has(key)) return cache.get(key);
    const value = fn.apply(this, args);
    cache.set(key, value);
    if (cache.size > maxSize) cache.delete(cache.keys().next().value);
    return value;
  }
  memoized.cache = cache;
  return memoized;
}

/** Pre-fill leading arguments: partial(add, 1)(2) === add(1, 2). */
export function partial(fn, ...preset) {
  return (...later) => fn(...preset, ...later);
}
