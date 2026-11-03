/**
 * Stage 3: classes with private fields, getters, static members,
 * an iterator and JSON serialisation.
 */
import { ValidationError, NotFoundError } from './errors.js';
import { toCents } from './numbers.js';

export class Product {
  static #nextId = 1;

  #priceCents;

  constructor({ name, price, quantity = 0, tags = [] } = {}) {
    const problems = [];
    if (typeof name !== 'string' || name.trim() === '')
      problems.push('name must be a non-empty string');
    if (typeof price !== 'number' || !(price >= 0) || !Number.isFinite(price)) {
      problems.push('price must be a finite number >= 0');
    }
    if (!Number.isInteger(quantity) || quantity < 0)
      problems.push('quantity must be an integer >= 0');
    if (!Array.isArray(tags)) problems.push('tags must be an array');
    if (problems.length > 0) throw new ValidationError('Invalid product', problems);

    this.id = Product.#nextId++;
    this.name = name.trim();
    this.#priceCents = toCents(price);
    this.quantity = quantity;
    this.tags = Object.freeze([...new Set(tags.map(String))]);
  }

  get price() {
    return this.#priceCents / 100;
  }

  get totalCents() {
    return this.#priceCents * this.quantity;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      tags: this.tags,
    };
  }
}

export class Inventory {
  #products = new Map();

  static from(list) {
    const inventory = new Inventory();
    for (const data of list) inventory.add(data);
    return inventory;
  }

  add(data) {
    const product = data instanceof Product ? data : new Product(data);
    this.#products.set(product.id, product);
    return product;
  }

  get(id) {
    const product = this.#products.get(id);
    if (!product) throw new NotFoundError(`Product ${id} not found`);
    return product;
  }

  remove(id) {
    this.get(id);
    this.#products.delete(id);
  }

  get size() {
    return this.#products.size;
  }

  /** Makes `for (const p of inventory)` and `[...inventory]` work. */
  *[Symbol.iterator]() {
    yield* this.#products.values();
  }

  /**
   * Stage 3 exercise solution: a lazy, filtered view of the products.
   * Iterator helpers (ES2025) run only as far as the caller pulls values.
   */
  search({ tag, minPrice = 0, maxPrice = Infinity, inStock = false } = {}) {
    return this.#products
      .values()
      .filter((p) => tag === undefined || p.tags.includes(tag))
      .filter((p) => p.price >= minPrice && p.price <= maxPrice)
      .filter((p) => !inStock || p.quantity > 0);
  }

  summary() {
    const items = [...this];
    const totalCents = items.reduce((sum, p) => sum + p.totalCents, 0);
    const tagCounts = {};
    for (const tag of items.flatMap((p) => p.tags)) tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    return {
      products: items.length,
      units: items.reduce((sum, p) => sum + p.quantity, 0),
      totalValue: totalCents / 100,
      outOfStock: items.filter((p) => p.quantity === 0).map((p) => p.name),
      tags: tagCounts,
    };
  }

  toJSON() {
    return [...this].map((p) => p.toJSON());
  }
}

export const SEED_PRODUCTS = [
  { name: 'Mechanical keyboard', price: 89.5, quantity: 12, tags: ['hardware', 'input'] },
  { name: 'USB-C cable', price: 9.99, quantity: 140, tags: ['hardware', 'cable'] },
  { name: 'Code editor licence', price: 49, quantity: 0, tags: ['software'] },
];
