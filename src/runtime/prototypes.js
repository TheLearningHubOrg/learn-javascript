/**
 * Prototypal Inheritance & Object Property Model
 */

export function inspectPrototypeChain(obj) {
  const chain = [];
  let current = Object.getPrototypeOf(obj);

  while (current !== null) {
    chain.push(current.constructor?.name || '[Anonymous Object]');
    current = Object.getPrototypeOf(current);
  }

  return chain;
}

export function createDeepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj); // Circular reference handling

  const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, clone);

  for (const key of Reflect.ownKeys(obj)) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);
    if (desc) {
      if (typeof desc.value === 'object' && desc.value !== null) {
        desc.value = createDeepClone(desc.value, hash);
      }
      Object.defineProperty(clone, key, desc);
    }
  }

  return clone;
}
