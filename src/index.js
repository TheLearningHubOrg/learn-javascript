import { EventLoopSimulator, debounce } from './runtime/event-loop-simulator.js';
import { createCounter, curry } from './runtime/closure-scope.js';
import { inspectPrototypeChain, createDeepClone } from './runtime/prototypes.js';
import { JAVASCRIPT_STAGES, getCompletedCount, getProgressPercentage } from './roadmap.js';

console.log('======================================================');
console.log('  The Learning Hub - Modern JavaScript (ES2024+) Platform');
console.log('======================================================');
console.log('Engine: V8 Execution Model (Ignition Bytecode & TurboFan JIT)');
console.log('Runtime: Node.js ' + process.version + ' (' + process.arch + ')\n');

// 1. Event Loop Mechanics
console.log('--- 1. Event Loop Task Prioritization Simulation ---');
const loop = new EventLoopSimulator();
loop.enqueueSync('console.log("Synchronous 1")');
loop.enqueueMacrotask('setTimeout(callback, 0)');
loop.enqueueMicrotask('Promise.resolve().then(callback)');
loop.enqueueMicrotask('queueMicrotask(checkpoint)');
loop.enqueueSync('console.log("Synchronous 2")');

const order = loop.drainTick();
order.forEach((step, idx) => {
  console.log(`  Step ${idx + 1}: ${step}`);
});

// 2. Closures & Encapsulation
console.log('\n--- 2. Lexical Closures & Currying ---');
const counter = createCounter(100);
counter.increment(25);
counter.decrement(5);
console.log(`  Encapsulated Counter value: ${counter.getValue()} (private lexical state)`);

const sum3 = curry((a, b, c) => a + b + c);
console.log(`  Curried evaluation: sum3(10)(20)(30) = ${sum3(10)(20)(30)}`);

// 3. Prototypal Inheritance & Deep Cloning
console.log('\n--- 3. Prototypal Inheritance Chain ---');
class BaseService {}
class AnalyticsService extends BaseService {}
const instance = new AnalyticsService();
const chain = inspectPrototypeChain(instance);
console.log(`  Prototype Hierarchy: [${instance.constructor.name}] -> ${chain.join(' -> ')}`);

const complexObj = {
  id: 1,
  meta: { tags: ['js', 'v8'] },
  created: new Date()
};
const clone = createDeepClone(complexObj);
clone.meta.tags.push('es2024');
console.log(`  Deep Clone Isolation: original tags = [${complexObj.meta.tags.join(', ')}], cloned = [${clone.meta.tags.join(', ')}]\n`);

// 4. 7-Stage Pedagogical Roadmap
console.log('--- 4. 7-Stage Modern JavaScript Masterclass Roadmap ---');
for (const stage of JAVASCRIPT_STAGES) {
  const icon = stage.completed ? '[OK]' : '[..]';
  console.log(` ${icon} Stage ${stage.stageNumber}: ${stage.title}`);
  console.log(`      Focus: ${stage.domainFocus}`);
  console.log(`      Topics: ${stage.keyTopics.join(', ')}`);
}

const completed = getCompletedCount();
const percent = getProgressPercentage();
console.log('------------------------------------------------------');
console.log(`Progress: ${completed}/7 Stages Complete (${percent}%)`);
console.log('======================================================\n');
