/**
 * The Learning Hub - Modern JavaScript (ES2024+) & V8 Platform Architecture Roadmap
 */

export const JAVASCRIPT_STAGES = [
  {
    stageNumber: 1,
    title: "JavaScript Syntax & Core Fundamentals",
    domainFocus: "Primitive types, memory allocation (stack vs heap), operators, type coercion, control flow, loops",
    completed: true,
    keyTopics: ["Stack vs Heap Allocation", "Type Coercion Rules", "Nullish Coalescing (??)", "Optional Chaining (?.)"]
  },
  {
    stageNumber: 2,
    title: "Functions, Closures & Execution Contexts",
    domainFocus: "Lexical environment, execution context stack, hoisting mechanics, closures, currying, this binding",
    completed: true,
    keyTopics: ["Lexical Scoping", "Closure Memory Retention", "Explicit Binding (call/apply/bind)", "Arrow Function Lexical this"]
  },
  {
    stageNumber: 3,
    title: "Modern Data Structures & ES6+ Mastery",
    domainFocus: "Objects & property descriptors, Maps, Sets, WeakMap/WeakSet, destructuring, spread/rest, Symbols",
    completed: true,
    keyTopics: ["Property Descriptors & Object.defineProperty", "Map vs Object Benchmark", "WeakMap Garbage Collection", "Well-Known Symbols"]
  },
  {
    stageNumber: 4,
    title: "Asynchronous JavaScript & Event Loop Internals",
    domainFocus: "Event loop execution model, microtask queue vs macrotask queue, Promises, async/await, AbortController",
    completed: true,
    keyTopics: ["V8 Microtask Checkpoints", "Promise State Machine", "Event Loop Turn Ordering", "AbortSignal & Cancellation"]
  },
  {
    stageNumber: 5,
    title: "DOM, BOM & Browser Web APIs",
    domainFocus: "Virtual vs real DOM, event bubbling & capturing, delegation, BOM (window, history), Web Workers",
    completed: true,
    keyTopics: ["Event Propagation (Capture/Target/Bubble)", "DOM Reflow vs Repaint", "Web Workers Offloading", "IntersectionObserver"]
  },
  {
    stageNumber: 6,
    title: "Performance Optimization & Enterprise Patterns",
    domainFocus: "Debounce & throttle, memory leak prevention, layout thrashing, hidden classes in V8 JIT (TurboFan)",
    completed: true,
    keyTopics: ["Debounce & Throttle High-Order Functions", "V8 Hidden Classes & Inline Caches", "Garbage Collection Mark-Sweep", "Zero-Copy ArrayBuffers"]
  },
  {
    stageNumber: 7,
    title: "Staff Architect Interview Handbook & Cheatsheet",
    domainFocus: "500+ comprehensive scenario Q&As, prototype chain deep-dive, algorithmic problem patterns",
    completed: true,
    keyTopics: ["Prototypal Inheritance Mechanics", "V8 TurboFan Deoptimization Triggers", "Cross-Site Scripting (XSS) Sanitization", "Memory Profiling"]
  }
];

export function getCompletedCount() {
  return JAVASCRIPT_STAGES.filter(s => s.completed).length;
}

export function getProgressPercentage() {
  return Math.round((getCompletedCount() / JAVASCRIPT_STAGES.length) * 100);
}
