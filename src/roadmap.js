/**
 * The Learning Hub - JavaScript 7-stage roadmap, served by GET /api/roadmap
 */

export const JAVASCRIPT_STAGES = [
  {
    stageNumber: 1,
    title: 'Syntax, Types & Operators',
    domainFocus:
      'Primitive types, memory allocation (stack vs heap), operators, type coercion, control flow, loops',
    completed: true,
    keyTopics: [
      'Stack vs Heap Allocation',
      'Type Coercion Rules',
      'Nullish Coalescing (??)',
      'Optional Chaining (?.)',
    ],
  },
  {
    stageNumber: 2,
    title: 'Functions, Closures, Arrays, Strings & Modules',
    domainFocus:
      'Lexical environment, execution context stack, hoisting mechanics, closures, currying, this binding',
    completed: true,
    keyTopics: [
      'Lexical Scoping',
      'Closure Memory Retention',
      'Explicit Binding (call/apply/bind)',
      'Arrow Function Lexical this',
    ],
  },
  {
    stageNumber: 3,
    title: 'Objects, Prototypes, Classes & Error Handling',
    domainFocus:
      'Objects & property descriptors, Maps, Sets, WeakMap/WeakSet, destructuring, spread/rest, Symbols',
    completed: true,
    keyTopics: [
      'Property Descriptors & Object.defineProperty',
      'Map vs Object Benchmark',
      'WeakMap Garbage Collection',
      'Well-Known Symbols',
    ],
  },
  {
    stageNumber: 4,
    title: 'Asynchronous JavaScript & the Event Loop',
    domainFocus:
      'Event loop execution model, microtask queue vs macrotask queue, Promises, async/await, AbortController',
    completed: true,
    keyTopics: [
      'V8 Microtask Checkpoints',
      'Promise State Machine',
      'Event Loop Turn Ordering',
      'AbortSignal & Cancellation',
    ],
  },
  {
    stageNumber: 5,
    title: 'DOM, Browser APIs, Networking & JSON',
    domainFocus:
      'Virtual vs real DOM, event bubbling & capturing, delegation, BOM (window, history), Web Workers',
    completed: true,
    keyTopics: [
      'Event Propagation (Capture/Target/Bubble)',
      'DOM Reflow vs Repaint',
      'Web Workers Offloading',
      'IntersectionObserver',
    ],
  },
  {
    stageNumber: 6,
    title: 'Performance, Best Practices & Modern Idioms',
    domainFocus:
      'Debounce & throttle, memory leak prevention, layout thrashing, hidden classes in V8 JIT (TurboFan)',
    completed: true,
    keyTopics: [
      'Debounce & Throttle High-Order Functions',
      'V8 Hidden Classes & Inline Caches',
      'Garbage Collection Mark-Sweep',
      'Zero-Copy ArrayBuffers',
    ],
  },
  {
    stageNumber: 7,
    title: 'Staff JavaScript Engineer Interview Handbook & Cheatsheet',
    domainFocus: 'Interview Q&As, prototype chain deep-dive, algorithmic problem patterns',
    completed: true,
    keyTopics: [
      'Prototypal Inheritance Mechanics',
      'V8 TurboFan Deoptimization Triggers',
      'Cross-Site Scripting (XSS) Sanitization',
      'Memory Profiling',
    ],
  },
];

export function getCompletedCount() {
  return JAVASCRIPT_STAGES.filter((s) => s.completed).length;
}

export function getProgressPercentage() {
  return Math.round((getCompletedCount() / JAVASCRIPT_STAGES.length) * 100);
}
