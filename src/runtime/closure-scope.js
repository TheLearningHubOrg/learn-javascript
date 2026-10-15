/**
 * Lexical Scope, Closures & Functional Currying
 */

export function createCounter(initialValue = 0) {
  let count = initialValue; // Enclosed lexical variable (private state)

  return {
    increment(by = 1) {
      count += by;
      return count;
    },
    decrement(by = 1) {
      count -= by;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}
