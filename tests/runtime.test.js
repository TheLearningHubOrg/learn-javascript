import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { EventLoopSimulator, debounce, throttle } from '../src/runtime/event-loop-simulator.js';
import { createCounter, curry } from '../src/runtime/closure-scope.js';
import { inspectPrototypeChain, createDeepClone } from '../src/runtime/prototypes.js';
import { JAVASCRIPT_STAGES, getCompletedCount, getProgressPercentage } from '../src/roadmap.js';

describe('Event Loop Prioritization Mechanics', () => {
  it('drains all microtasks before executing macrotasks', () => {
    const loop = new EventLoopSimulator();
    loop.enqueueSync('Sync-1');
    loop.enqueueMacrotask('Macro-1');
    loop.enqueueMicrotask('Micro-1');
    loop.enqueueMicrotask('Micro-2');

    const log = loop.drainTick();
    assert.deepEqual(log, [
      '[Sync] Sync-1',
      '[Microtask] Micro-1',
      '[Microtask] Micro-2',
      '[Macrotask] Macro-1'
    ]);
  });
});

describe('Lexical Scoping & Closures', () => {
  it('encapsulates state and prevents direct variable access', () => {
    const counter = createCounter(10);
    assert.equal(counter.getValue(), 10);
    counter.increment(5);
    assert.equal(counter.getValue(), 15);
    counter.decrement(3);
    assert.equal(counter.getValue(), 12);
    assert.equal(counter.count, undefined); // Private
  });

  it('curries functions across multiple invocation arguments', () => {
    const multiply4 = curry((a, b, c, d) => a * b * c * d);
    assert.equal(multiply4(2)(3)(4)(5), 120);
    assert.equal(multiply4(2, 3)(4, 5), 120);
  });
});

describe('Prototypal Inheritance & Deep Cloning', () => {
  it('traverses the prototype chain up to Object.prototype', () => {
    class Parent {}
    class Child extends Parent {}
    const c = new Child();
    const chain = inspectPrototypeChain(c);
    assert.ok(chain.includes('Parent'));
    assert.ok(chain.includes('Object'));
  });

  it('performs deep cloning and breaks object references', () => {
    const original = { user: { name: 'Alice', prefs: { dark: true } } };
    const clone = createDeepClone(original);

    clone.user.prefs.dark = false;
    assert.equal(original.user.prefs.dark, true); // Immutable original
    assert.equal(clone.user.prefs.dark, false);
  });
});

describe('7-Stage Pedagogical Roadmap Integrity', () => {
  it('defines all 7 stages with 100% completion metrics', () => {
    assert.equal(JAVASCRIPT_STAGES.length, 7);
    assert.equal(getCompletedCount(), 7);
    assert.equal(getProgressPercentage(), 100);
  });
});
