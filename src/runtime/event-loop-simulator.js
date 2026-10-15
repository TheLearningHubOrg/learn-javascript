/**
 * Event Loop Mechanics & Concurrency Primitives
 */

export class EventLoopSimulator {
  constructor() {
    this.callStack = [];
    this.microtaskQueue = [];
    this.macrotaskQueue = [];
    this.executionLog = [];
  }

  enqueueSync(taskName) {
    this.callStack.push(taskName);
    this.executionLog.push(`[Sync] ${taskName}`);
  }

  enqueueMicrotask(taskName) {
    this.microtaskQueue.push(taskName);
  }

  enqueueMacrotask(taskName) {
    this.macrotaskQueue.push(taskName);
  }

  /**
   * Simulates a tick of the JavaScript Event Loop:
   * 1. Synchronous call stack executes to completion.
   * 2. All queued microtasks drain until the microtask queue is empty.
   * 3. Next macrotask from macrotask queue executes.
   */
  drainTick() {
    // 1. Drain microtasks
    while (this.microtaskQueue.length > 0) {
      const task = this.microtaskQueue.shift();
      this.executionLog.push(`[Microtask] ${task}`);
    }

    // 2. Execute one macrotask
    if (this.macrotaskQueue.length > 0) {
      const task = this.macrotaskQueue.shift();
      this.executionLog.push(`[Macrotask] ${task}`);

      // Any microtasks spawned during the macrotask drain immediately
      while (this.microtaskQueue.length > 0) {
        const micro = this.microtaskQueue.shift();
        this.executionLog.push(`[Microtask] ${micro}`);
      }
    }

    return [...this.executionLog];
  }
}

/**
 * Enterprise Debounce higher-order utility
 */
export function debounce(fn, waitMs) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(fn.apply(this, args));
      }, waitMs);
    });
  };
}

/**
 * Enterprise Throttle higher-order utility
 */
export function throttle(fn, limitMs) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      inThrottle = true;
      const result = fn.apply(this, args);
      setTimeout(() => {
        inThrottle = false;
      }, limitMs);
      return result;
    }
    return undefined;
  };
}
