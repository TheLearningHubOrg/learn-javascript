# Learn JavaScript 🟨

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ECMAScript](https://img.shields.io/badge/ECMAScript-ES2024%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://tc39.es/)
[![Runtime](https://img.shields.io/badge/V8%20Engine-JIT%20%26%20Bytecode-4285F4.svg?logo=googlechrome)](https://v8.dev/)
[![Concurrency](https://img.shields.io/badge/Event%20Loop-Microtasks%20%26%20Macrotasks-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
[![Production Ready](https://img.shields.io/badge/Status-Enterprise%20Grade-brightgreen.svg)](https://github.com/TheLearningHubOrg/learn-javascript)

**An exhaustive, production-grade masterclass from absolute zero to staff-level JavaScript platform architecture.**  
Master modern ECMAScript standards (ES6 to ES2024+), V8 engine execution pipelines, lexical scoping & closures, prototypical inheritance, asynchronous concurrency, DOM/BOM architecture, and enterprise design patterns.

[Stage 1: Foundations](#1-stage-1-javascript-syntax--core-fundamentals) • [Stage 2: Functions & Scopes](#2-stage-2-functions-closures--execution-contexts) • [Stage 3: Data Structures](#3-stage-3-modern-data-structures--es6-mastery) • [Stage 4: Asynchronous JS](#4-stage-4-asynchronous-javascript--event-loop-internals) • [Stage 5: Web APIs & DOM](#5-stage-5-dom-bom--browser-web-apis) • [Stage 6: Architecture & Perf](#6-stage-6-performance-optimization--enterprise-patterns) • [Stage 7: Staff Handbook](#7-stage-7-staff-javascript-architect-interview-handbook--cheatsheet)

<br/>

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee" alt="Buy Me A Coffee" width="180">
</a>

</div>

---

## 🗺️ 7-Stage Pedagogical Roadmap

```mermaid
flowchart LR
    S1["Stage 1: Syntax & Types"] --> S2["Stage 2: Functions & Closures"]
    S2 --> S3["Stage 3: ES6+ & Data Structures"]
    S3 --> S4["Stage 4: Async & Event Loop"]
    S4 --> S5["Stage 5: DOM & Web APIs"]
    S5 --> S6["Stage 6: Perf & Best Practices"]
    S6 --> S7["Stage 7: Staff Architect Handbook"]
```

| Stage | Focus Domain | Core Concepts & Production Outcomes |
| :--- | :--- | :--- |
| **Stage 1** | **JavaScript Syntax & Core Fundamentals** | Primitive types, memory allocation (stack vs heap), operators, type coercion, control flow, loops, strings & arrays. |
| **Stage 2** | **Functions, Closures & Execution Contexts** | Lexical environment, execution context stack, hoisting mechanics, closures, currying, `this` binding, IIFEs. |
| **Stage 3** | **Modern Data Structures & ES6+ Mastery** | Objects & property descriptors, Maps, Sets, WeakMap/WeakSet, destructuring, spread/rest, Math, Dates, modern syntax. |
| **Stage 4** | **Asynchronous JavaScript & Event Loop** | Event loop execution model, microtask queue vs macrotask queue, Promises, async/await, Fetch API, AJAX pipelines. |
| **Stage 5** | **DOM, BOM & Browser Web APIs** | Virtual vs real DOM, event bubbling & capturing, delegation, BOM (`window`, `location`, `history`), Web Storage, Web Workers. |
| **Stage 6** | **Performance Optimization & Enterprise Patterns** | Debounce & throttle, memory leak prevention, layout thrashing, reflow/repaint optimization, clean code snippets & short hands. |
| **Stage 7** | **Staff Architect Interview Handbook & Cheatsheet** | 500+ comprehensive interview Q&As, prototype chain deep-dive, algorithmic problem patterns, production cheatsheet. |

---

## 📋 Table of Contents

- [1. Stage 1: JavaScript Syntax & Core Fundamentals](#1-stage-1-javascript-syntax--core-fundamentals)
  - [1.1 Introduction](#introduction)
  - [1.2 Adding JavaScript (Inline, Internal, External)](#add-javascript)
  - [1.3 Displaying Output (innerHTML, document.write, alert, console)](#outputing-javascript)
  - [1.4 Comments](#single-line-comments)
  - [1.5 Variables (var, let, const)](#variables)
  - [1.6 Primitive & Non-Primitive Data Types](#data-types)
  - [1.7 Operators (Arithmetic, Logical, Comparison, Bitwise, Nullish, Optional Chaining)](#operators)
  - [1.8 Control Flow & Loops (for, while, do-while, for-in, for-of)](#loops)
  - [1.9 Conditional Statements (if, else, switch)](#conditional-statements)
  - [1.10 Arrays & Array Methods](#arrays)
  - [1.11 Strings & String Methods](#strings)
- [2. Stage 2: Functions, Closures & Execution Contexts](#2-stage-2-functions-closures--execution-contexts)
  - [2.1 Functions (Named, Anonymous, Arrow, Declarations vs Expressions)](#functions)
  - [2.2 Immediately Invoked Function Expressions (IIFE)](#iife)
  - [2.3 Higher-Order Functions & Currying](#higher-order-functions)
  - [2.4 Scope & Lexical Environment](#scope)
  - [2.5 Hoisting Mechanics](#hoisting)
- [3. Stage 3: Modern Data Structures & ES6+ Mastery](#3-stage-3-modern-data-structures--es6-mastery)
  - [3.1 Objects & Prototypal Properties](#objects)
  - [3.2 Type Conversion & Typeof Operator](#type-conversion)
  - [3.3 Math & Numeric Operations](#math)
  - [3.4 Sets & WeakSets](#sets)
  - [3.5 Maps & WeakMaps](#map)
  - [3.6 ES6+ Language Modernization (Destructuring, Modules, Classes)](#es6-features)
- [4. Stage 4: Asynchronous JavaScript & Event Loop Internals](#4-stage-4-asynchronous-javascript--event-loop-internals)
  - [4.1 Asynchronous Concurrency Model](#async)
  - [4.2 Promises & Promise Chaining](#async)
  - [4.3 Async / Await Syntax](#async)
  - [4.4 Fetch API & AJAX Pipelines](#ajax)
  - [4.5 JSON Parsing & Serialization](#json)
- [5. Stage 5: DOM, BOM & Browser Web APIs](#5-stage-5-dom-bom--browser-web-apis)
  - [5.1 Document Object Model (DOM) Tree Manipulation](#dom)
  - [5.2 Browser Object Model (BOM)](#browser-bom)
  - [5.3 Modern Browser Web APIs (Storage, Geolocation, Fetch)](#web-api)
- [6. Stage 6: Performance Optimization & Enterprise Patterns](#6-stage-6-performance-optimization--enterprise-patterns)
  - [6.1 JavaScript Best Practices](#best-practices)
  - [6.2 Common Anti-Patterns & Pitfalls](#common-mistakes)
  - [6.3 Runtime Performance Tuning & Optimization](#performance)
  - [6.4 Production Snippets & Idiomatic Short Hands](#snippets)
- [7. Stage 7: Staff JavaScript Architect Interview Handbook & Cheatsheet](#7-stage-7-staff-javascript-architect-interview-handbook--cheatsheet)
  - [7.1 Comprehensive Technical Interview Question Bank](#interview-questions)
  - [7.2 Curated Learning Resources & Repositories](#list-of-github-repositories-to-learn-javascript)
- [🤝 Contributing](#-contributing)
- [📄 License](#license)

---

## 1. Stage 1: JavaScript Syntax & Core Fundamentals

## Introduction

**JavaScript** is a scripting language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation.

## Add JavaScript

There are three ways to add JavaScript to a web page:

1. **Inline JavaScript** - It is used to add JavaScript directly to the HTML document. It is added inside the `<script>` tag in the HTML document.

2. **Internal JavaScript** - It is used to add JavaScript to the HTML document. It is added inside the `<script>` tag in the `<head>` or `<body>` section of the HTML document.

3. **External JavaScript** - It is used to add JavaScript to the HTML document. It is added in a separate file with a `.js` extension and linked to the HTML document using the `<script>` tag.

**JavaScript in `<head>`** -

```html
<!DOCTYPE html>
<html>
<head>
<script>
    //code
</script>
</head>
<body>
<h2>Heading</h2>
</body>
</html>
```

**JavaScript in `<body>`**

```html
<!DOCTYPE html>
<html>
<body>

<h2>Heading</h2>

<script>
    //code
</script>

</body>
</html>
```

**External JavaScript** -

```html
<!DOCTYPE html>
<html>
<body>

<h2>Heading</h2>

<script src="myScript.js"></script>
</body>
</html>
```

[Back to Top⤴️](#table-of-contents)

## Outputing JavaScript

### JavaScript can "display" data in different ways

**1. Writing into an HTML element, using `innerHTML`**

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

**2. Writing into an HTML element, using `document.write()`**

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
```

**3. Writing into an alert box, using `window.alert()`**

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

**4. Writing into the browser console, using `console.log()`**

```html
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

[Back to Top⤴️](#table-of-contents)

## Single Line Comments

Single line comments start with `//`

```jsx
// comments
```

## Multi-line Comments

Multi-line comments start with `/*` and end with `*/`.

```jsx
/* Hey!
Hello, How are you?
*/ 
```

[Back to Top⤴️](#table-of-contents)

## Variables

Variables are containers for storing data values. In JavaScript, variables are declared using the `var`, `let`, or `const` keyword.

### Declare Variables

There are three ways to declare variables in JavaScript:

**1. var** - It is used to declare a variable. It is function-scoped.

```jsx
var a = 1; // Declare a variable x with the value 1 (function-level scope).
```

**2. let** - It is used to declare a variable. It is block-scoped.

```jsx
let b = 1; // Declare a variable y with the value 10 (block-level scope).
```

**3. const** - It is used to declare a read-only variable. It is block-scoped.

```jsx
const c = 1; // Declare a read-only variable z with the value 15 (block-level scope).
```

[Back to Top⤴️](#table-of-contents)

## Data Types

Data types are used to define the type of data that a variable can store. JavaScript is a loosely typed language, which means that you do not have to declare the data type of a variable when you declare it.

There are two types of data types in JavaScript:

- **Primitive Data Types**
- **Non-Primitive Data Types**

### 1. Primitive Data Types

**Primitive data types** are the most basic data types in JavaScript. They are immutable (cannot be changed) and are copied by value.

**Primitive data types** include:

- **numbers**
- **strings**
- **booleans**
- **null**
- **undefined**
- **symbol**

**numbers** - numbers can be written with or without decimals.

```javascript
let number = 10;
```

**strings** - strings are text. They are written inside double or single quotes.

```javascript
let name = "Manthan";
```

**booleans** - booleans can only have two values: true or false.

```javascript
let value1 = true;
let value2 = false;
```

**null** - null is an empty value.

```javascript
let value = null;
```

**undefined** - undefined means a variable has been declared but has not yet been assigned a value.

```javascript
let name;
```

**symbol** - symbols are unique and immutable values.

```javascript
let a = Symbol();
```

[Back to Top⤴️](#table-of-contents)

### 2. Non Primitive Data Types

**Non-primitive data types** are complex data types that are mutable (can be changed) and are copied by reference.

**Non-primitive data types** include:

- **objects**
- **arrays**
- **functions**
- **regexp**

**functions** - functions are objects that can be invoked.

```javascript
function greet() {
  return "Hello!";
}
```

**object** - objects are used to store collections of data and more complex entities.

```javascript
let name = {firstName:"Manthan", lastName:"Ank"};
```

**arrays** - arrays are used to store multiple values in a single variable.

```javascript
let array = ["value1", "value2"];
```

**regexp** - regular expressions are used to perform pattern-matching in strings.

```javascript
let pattern = /w3schools/i;
```

[Back to Top⤴️](#table-of-contents)

## Operators

Operators are used to perform operations on variables and values.

There are different types of operators in JavaScript:

- **Arithmetic Operators**
- **Logical Operators**
- **Comparison Operators**
- **Bitwise Operators**
- **Type Operators**
- **Assignment Operators**
- **Conditional (Ternary) Operator**
- **Nullish Coalescing Operator(??)**
- **Optional Chaining Operator(?.)**
- **delete Operator**
- **Spread (...) Operator**

### Arithmetic Operators

| Operator | Description |
| :-----------: | :-----------: |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| ** | Exponentiation (ES2016) |
| / | Division |
| % | Modulus (Division Remainder) |
| ++ | Increment |
| -- | Decrement |

Examples

```javascript
let x = 5;
let y = 2;

console.log(x + y); // Output: 7
console.log(x - y); // Output: 3
console.log(x * y); // Output: 10
console.log(x / y); // Output: 2.5
console.log(x % y); // Output: 1

x++;
console.log(x); // Output: 6

y--;
console.log(y); // Output: 1
```

[Back to Top⤴️](#table-of-contents)

### Logical Operators

| Operator | Description |
| :-----------: | :-----------: |
| && | logical and |
| ll | logical or |
| ! | logical not |

Examples

```javascript
let x = true;
let y = false;

console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x); // Output: false
console.log(!y); // Output: true
```

### Comparison Operators

| Operator | Description |
| :-----------: | :-----------: |
| == | equal to |
| === | equal value and equal type |
| != | not equal |
| !== | not equal value or not equal type |
| > | greater than |
| < | less than |
| >= | greater than or equal to |
| <= | less than or equal to |
| ?| ternary operator |

Examples

```javascript |
let x = 5;
let y = 10;

console.log(x == y); // Output: false
console.log(x === y); // Output: false
console.log(x != y); // Output: true
console.log(x !== y); // Output: true
console.log(x > y); // Output: false
console.log(x < y); // Output: true
console.log(x >= y); // Output: false
console.log(x <= y); // Output: true
console.log(x ? y : x); // Output: 10
console.log(x ? x : y); // Output: 5
```

[Back to Top⤴️](#table-of-contents)

### Bitwise Operators

| Operator | Description |
| :-----------: | :-----------: |
| & | AND |
| l | OR |
| ~ | NOT |
| ^| XOR |
| << | Left shift |
| >> | Right shift |
| >>> | Unsigned right |

Examples

```javascript
let x = 5; // Binary representation: 101
let y = 3; // Binary representation: 011

console.log(x & y); // Output: 1 (binary: 001)
console.log(x | y); // Output: 7 (binary: 111)
console.log(x ^ y); // Output: 6 (binary: 110)
console.log(~x); // Output: -6 (binary: 11111111111111111111111111111010)
console.log(x << 1); // Output: 10 (binary: 1010)
console.log(x >> 1); // Output: 2 (binary: 10)
console.log(x >>> 1); // Output: 2 (binary: 10)
```

### Type Operators

| Operator | Description |
| :-----------: | :-----------: |
| typeof | Returns the type of a variable |
| instanceof | Returns true if an object is an instance of an object type |

Examples

```javascript
console.log(typeof 5); // Output: "number"
console.log(typeof 'hello'); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a bug in JavaScript)
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object"
console.log(typeof function() {}); // Output: "function"

let cars = ['BMW', 'Volvo', 'Mini'];

console.log(cars instanceof Array); // Output: true
console.log(cars instanceof Object); // Output: true
console.log(cars instanceof String); // Output: false
console.log(cars instanceof Number); // Output: false
console.log(cars instanceof Function); // Output: false
console.log(cars instanceof RegExp); // Output: false
console.log(cars instanceof Date); // Output: false
console.log(cars instanceof Symbol); // Output: false
console.log(cars instanceof Boolean); // Output: false
```

[Back to Top⤴️](#table-of-contents)

### Assignment Operators

| Operator | Description |
| :-----------: | :-----------: |
| = | x = y |
| += | x += y |
| -= | x -= y |
| *= | x *= y |
| /= | x /= y |
| %= | x %= y |
| **= | x **= y |
| : | x : 45 |

```javascript
let x = 5;
let y = 10;

x += y; // x = x + y
console.log(x); // Output: 15

x -= y; // x = x - y
console.log(x); // Output: 5

x *= y; // x = x * y
console.log(x); // Output: 50

x /= y; // x = x / y
console.log(x); // Output: 5

x %= y; // x = x % y
console.log(x); // Output: 5

x **= y; // x = x ** y
console.log(x); // Output: 9765625

x = y; // x = y
console.log(x); // Output: 10
```

[Back to Top⤴️](#table-of-contents)

### Conditional (Ternary) Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

Syntax

```javascript
(condition) ? x : y
```

```javascript
let x = 10;
let y = 5;

let result = (x > y) ? "x is greater than y" : "x is less than y";

console.log(result); // Output: "x is greater than y"
```

### Nullish Coalescing Operator(??)

The nullish coalescing operator (??) is a new operator in JavaScript that returns the right-hand operand when the left-hand operand is null or undefined.

Example

```javascript
let x = null;
let y = undefined;
let z = 'Hello';

console.log(x ?? 'Default Value'); // Output: "Default Value"
console.log(y ?? 'Default Value'); // Output: "Default Value"
console.log(z ?? 'Default Value'); // Output: "Hello"
```

[Back to Top⤴️](#table-of-contents)

### Optional Chaining Operator(?.)

The optional chaining operator (?.) is a new operator in JavaScript that allows you to access properties of an object without having to check if the object or its properties are null or undefined.

Example

```javascript
let person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.address?.city); // Output: "New York"
console.log(person.address?.zipCode); // Output: undefined
```

### delete Operator

The delete operator is used to delete a property from an object.

Example

```javascript
const person = {
  firstName:"Manthan",
  lastName:"Ank",
  age:25,
  eyeColor:"black"
};

delete person.age;

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank", eyeColor: "black"}
```

[Back to Top⤴️](#table-of-contents)

### Spread (...) Operator

The spread operator is a new addition to the JavaScript language in ES6. It is denoted by three dots (...). It is used to expand an array or object into individual elements.

Example

```javascript
// Array literal
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Object literal
let person = {name: 'John', age: 30};
let newPerson = {...person, city: 'New York', country: 'USA'};
console.log(newPerson); // Output: {name: "John", age: 30, city: "New York", country: "USA"}

// Function call
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Copy an array
let numbers = [1, 2, 3];
let newNumbers = [...numbers];
console.log(newNumbers); // Output: [1, 2, 3]
```

[Back to Top⤴️](#table-of-contents)

## Boolean

JavaScript booleans can have one of two values: true or false.

```javascript
let value = true;
```

### Boolean Methods and Properties

The following are some of the most commonly used boolean methods and properties in JavaScript:

**constructor** - Returns the function that created JavaScript's Boolean prototype

```javascript
let value = true;

console.log(value.constructor); // Output: ƒ Boolean() { [native code] }
```

**prototype** - Allows you to add properties and methods to the Boolean prototype

```javascript
Boolean.prototype.age = 25;

let value = true;

console.log(value.age); // Output: 25
```

**toString()** - Converts a boolean value to a string, and returns the result

```javascript
let value = true;

console.log(value.toString()); // Output: "true"
```

**valueOf()** - Returns the primitive value of a boolean

```javascript
let value = true;

console.log(value.valueOf()); // Output: true
```

[Back to Top⤴️](#table-of-contents)

## Object

Objects are used to store key/value (name/value) collections.

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};
```

### Object Methods & Properties

The following are some of the most commonly used object methods and properties in JavaScript:

**constructor** - Returns the function that created an object's prototype

```javascript
let person = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(person.constructor); // Output: ƒ Object() { [native code] }
```

**keys()** - Returns an Array Iterator object with the keys of an object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

let keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName"]
```

**prototype** - Let you to add properties and methods to JavaScript objects

```javascript
let person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.prototype.age = 25;

console.log(person.age); // Output: 25
```

**toString()** - Converts an object to a string and returns the result

```javascript
let person = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(person.toString()); // Output: "[object Object]"
```

**valueOf()** - Returns the primitive value of an object

```javascript
let person = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(person.valueOf()); // Output: {firstName: "Manthan", lastName: "Ank"}
```

[Back to Top⤴️](#table-of-contents)

## Arrays

Arrays are used to store multiple values in a single variable.

```javascript
const letters = ['a', 'b', 'c'];
```

### Array Methods

The following are some of the most commonly used array methods in JavaScript:

- **at()**
- **concat()**
- **constructor**
- **copyWithin()**
- **entries()**
- **every()**
- **fill()**
- **filter()**
- **find()**
- **findIndex()**
- **findLast()**
- **findLastIndex()**
- **flat()**
- **flatMap()**
- **forEach()**
- **from()**
- **includes()**
- **indexOf()**
- **isArray()**
- **join()**
- **keys()**
- **lastIndexOf()**
- **length**
- **map()**
- **pop()**
- **prototype**
- **push()**
- **reduce()**
- **reduceRight()**
- **reverse()**
- **shift()**
- **slice()**
- **some()**
- **sort()**
- **splice()**
- **toLocaleString()**
- **toReversed()**
- **toSorted()**
- **toSpliced()**
- **toString()**
- **unshift()**
- **valueOf()**
- **values()**
- **with()**

[Back to Top⤴️](#table-of-contents)

**at()** - Returns the element at a specified index in an array

```javascript
let array = ['a', 'b', 'c'];

console.log(array.at(1)); // Output: "b"
```

**concat()** - Joins arrays and returns an array with the joined arrays.

```javascript
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

let mergedArray = array1.concat(array2);
console.log(mergedArray); // mergedArray is ['a', 'b', 'c', 'd', 'e', 'f']
```

**constructor** - Returns the function that created the Array object's prototype

```javascript
let array = ['a', 'b', 'c'];

console.log(array.constructor); // Output: ƒ Array() { [native code] }
```

**copyWithin()** - Copies array elements within the array, to and from specified positions

```javascript
let array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.copyWithin(2, 0);
console.log(array); // Output: ["a", "b", "a", "b", "c", "d"]

array.copyWithin(4, 0, 2);
console.log(array); // Output: ["a", "b", "a", "b", "a", "b"]
```

[Back to Top⤴️](#table-of-contents)

**entries()** - Returns a key/value pair Array Iteration Object

```javascript
let array = ['a', 'b', 'c'];

let iterator = array.entries();

console.log(iterator.next().value); // Output: [0, "a"]
console.log(iterator.next().value); // Output: [1, "b"]
console.log(iterator.next().value); // Output: [2, "c"]
```

**every()** - Checks if every element in an array pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let result = array.every(value => value > 0);

console.log(result); // Output: true
```

**fill()** - Fill the elements in an array with a static value

```javascript
let array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.fill('x', 2, 4);

console.log(array); // Output: ["a", "b", "x", "x", "e", "f"]
```

[Back to Top⤴️](#table-of-contents)

**filter()** - Creates a new array with every element in an array that pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let newArray = array.filter(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: [4, 5]
```

**find()** - Returns the value of the first element in an array that pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let value = array.find(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(value); // Output: 4
```

**findIndex()** - Returns the index of the first element in an array that pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let index = array.findIndex(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(index); // Output: 3
```

**findLast()** - Returns the value of the last element in an array that pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let value = array.findLast(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(value); // Output: 5
```

**findLastIndex()** - Returns the index of the last element in an array that pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let index = array.findLastIndex(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(index); // Output: 4
```

[Back to Top⤴️](#table-of-contents)

**flat()** - Flattens an array up to a specified depth

```javascript
let array = [1, 2, [3, 4, [5, 6]]];

let newArray = array.flat(2);

console.log(array); // Output: [1, 2, [3, 4, [5, 6]]]
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

**flatMap()** - Maps each element using a mapping function, then flattens the result into a new array

```javascript
let array = [1, 2, 3, 4, 5];

let newArray = array.flatMap(value => [value * 2]);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: [2, 4, 6, 8, 10]
```

**forEach()** - Calls a function for each array element

```javascript
let array = [1, 2, 3, 4, 5];

array.forEach(value => {
  console.log(value);
});

// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5
```

**from()** - Creates an array from an object

```javascript
let array = 'hello';

let newArray = Array.from(array);

console.log(array); // Output: "hello"
console.log(newArray); // Output: ["h", "e", "l", "l", "o"]
```

**includes()** - Check if an array contains the specified element

```javascript
let array = [1, 2, 3, 4, 5];

let result = array.includes(3);

console.log(array); // Output: [1, 2, 3, 4, 5]

console.log(result); // Output: true
console.log(array.includes(6)); // Output: false
```

**indexOf()** - Search the array for an element and returns its position

```javascript
let array = [1, 2, 3, 4, 5];

let index = array.indexOf(3);

console.log(array); // Output: [1, 2, 3, 4, 5]

console.log(index); // Output: 2
console.log(array.indexOf(6)); // Output: -1
```

[Back to Top⤴️](#table-of-contents)

**isArray()** - Checks whether an object is an array

```javascript
let array = [1, 2, 3, 4, 5];

let result = Array.isArray(array);

console.log(array); // Output: [1, 2, 3, 4, 5]

console.log(result); // Output: true
console.log(Array.isArray('hello')); // Output: false
```

**join()** - Joins all elements of an array into a string

```javascript
let array = ['a', 'b', 'c'];

let result = array.join();

console.log(array); // Output: ["a", "b", "c"]
console.log(result); // Output: "a,b,c"
```

**keys()** - Returns a Array Iteration Object, containing the keys of the original array

```javascript
let array = ['a', 'b', 'c'];

let iterator = array.keys();

console.log(array); // Output: ["a", "b", "c"]
console.log(iterator.next().value); // Output: 0
```

[Back to Top⤴️](#table-of-contents)

**lastIndexOf()** - Search the array for an element, starting at the end, and returns its position

```javascript
let array = [1, 2, 3, 4, 5, 3];

let index = array.lastIndexOf(3);

console.log(array); // Output: [1, 2, 3, 4, 5, 3]
console.log(index); // Output: 5
```

**length** - Sets or returns the number of elements in an array

```javascript
let array = ['a', 'b', 'c'];

console.log(array); // Output: ["a", "b", "c"]
console.log(array.length); // Output: 3
```

**map()** - Creates a new array with the result of calling a function for each array element

```javascript
let array = [1, 2, 3, 4, 5];

let newArray = array.map(value => value * 2);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: [2, 4, 6, 8, 10]
```

**pop()** - Removes the last element of an array, and returns that element

```javascript
let array = ['a', 'b', 'c'];

let element = array.pop();

console.log(array); // Output: ["a", "b"]
console.log(element); // Output: "c"
```

[Back to Top⤴️](#table-of-contents)

**prototype** - Allows you to add properties and methods to an Array object

```javascript
let array = ['a', 'b', 'c'];

Array.prototype.age = 25;

console.log(array); // Output: ["a", "b", "c"]
console.log(array.age); // Output: 25
```

**push()** - Adds new elements to the end of an array, and returns the new length

```javascript
let array = ['a', 'b', 'c'];

let length = array.push('d', 'e');

console.log(array); // Output: ["a", "b", "c", "d", "e"]
console.log(length); // Output: 4
```

**reduce()** - Reduce the values of an array to a single value (going left-to-right)

```javascript
let array = [1, 2, 3, 4, 5];

let total = array.reduce((accumulator, value) => accumulator + value, 0);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(total); // Output: 15
```

[Back to Top⤴️](#table-of-contents)

**reduceRight()** - Reduce the values of an array to a single value (going right-to-left)

```javascript
let array = [1, 2, 3, 4, 5];

let total = array.reduceRight((accumulator, value) => accumulator + value, 0);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(total); // Output: 15
```

**reverse()** - Reverses the order of the elements in an array

```javascript
let array = ['a', 'b', 'c'];

array.reverse();

console.log(array); // Output: ["c", "b", "a"]
```

**shift()** - Removes the first element of an array, and returns that element

```javascript
let array = ['a', 'b', 'c'];

let element = array.shift();

console.log(array); // Output: ["b", "c"]
console.log(element); // Output: "a"
```

[Back to Top⤴️](#table-of-contents)

**slice()** - Selects a part of an array, and returns the new array

```javascript
let array = ['a', 'b', 'c', 'd', 'e', 'f'];

let newArray = array.slice(2, 4);

console.log(array); // Output: ["a", "b", "c", "d", "e", "f"]
console.log(newArray); // Output: ["c", "d"]
```

**some()** - Checks if any of the elements in an array pass a test

```javascript
let array = [1, 2, 3, 4, 5];

let result = array.some(value => value > 3);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(result); // Output: true
```

**sort()** - Sorts the elements of an array

```javascript
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

array.sort();

console.log(array); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

[Back to Top⤴️](#table-of-contents)

**splice()** - Adds/Removes elements from an array

```javascript
let array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.splice(2, 0, 'x', 'y');

console.log(array); // Output: ["a", "b", "x", "y", "c", "d", "e", "f"]
```

**toLocaleString()** - Converts an array to a string, using locale-specific settings

```javascript
let array = ['a', 'b', 'c'];

console.log(array.toLocaleString()); // Output: "a,b,c"
```

**toReversed()** - Reverses the elements of an array

```javascript
let array = ['a', 'b', 'c'];

let reversedArray = array.toReversed();

console.log(array); // Output: ["a", "b", "c"]
console.log(reversedArray); // Output: ["c", "b", "a"]
```

[Back to Top⤴️](#table-of-contents)

**toSorted()** - Sorts the elements of an array

```javascript
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let sortedArray = array.toSorted();

console.log(array); // Output: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

**toSpliced()** - Adds/Removes elements from an array

```javascript
let array = ['a', 'b', 'c', 'd', 'e', 'f'];

let splicedArray = array.toSpliced(2, 0, 'x', 'y');

console.log(array); // Output: ["a", "b", "c", "d", "e", "f"]
console.log(splicedArray); // Output: ["a", "b", "x", "y", "c", "d", "e", "f"]
```

**toString()** - Converts an array to a string, and returns the result

```javascript
let array = ['a', 'b', 'c'];

console.log(array.toString()); // Output: "a,b,c"
```

[Back to Top⤴️](#table-of-contents)

**unshift()** - Adds new elements to the beginning of an array, and returns the new length

```javascript
let array = ['a', 'b', 'c'];

let length = array.unshift('x', 'y');

console.log(array); // Output: ["x", "y", "a", "b", "c"]
```

**valueOf()** - Returns the primitive value of an array

```javascript
let array = ['a', 'b', 'c'];

console.log(array.valueOf()); // Output: ["a", "b", "c"]
```

**values()** - Returns an Array Iteration Object, containing the values of the original array

```javascript
let array = ['a', 'b', 'c'];

let iterator = array.values();

console.log(array); // Output: ["a", "b", "c"]
console.log(iterator.next().value); // Output: "a"
```

**with()** - Allows you to add properties and methods to an Array object

```javascript
let array = ['a', 'b', 'c'];

Array.with = 25;

console.log(array); // Output: ["a", "b", "c"]
console.log(Array.with); // Output: 25
```

[Back to Top⤴️](#table-of-contents)

## Strings

Strings are used to store text. Strings must be enclosed in single or double quotes.

```javascript
const name = 'Manthan';
```

### Strings methods

The following are some of the most commonly used string methods in JavaScript:

- **at()**
- **charAt()**
- **charCodeAt()**
- **concat()**
- **constructor**
- **endsWith()**
- **fromCharCode()**
- **includes()**
- **indexOf()**
- **lastIndexOf()**
- **length**
- **localeCompare()**
- **match()**
- **matchAll()**
- **padEnd()**
- **padStart()**
- **prototype**
- **repeat()**
- **replace()**
- **replaceAll()**
- **search()**
- **slice()**
- **split()**
- **startsWith()**
- **substr()**
- **substring()**
- **toLocaleLowerCase()**
- **toLocaleUpperCase()**
- **toLowerCase()**
- **toString()**
- **toUpperCase()**
- **trim()**
- **trimEnd()**
- **trimStart()**
- **valueOf()**

[Back to Top⤴️](#table-of-contents)

**at()** - Returns the character at a specified index (position)

```javascript
let myString = "Hello World!";

console.log(myString.at(0)); // Output: "H"
```

**charAt()** - Returns the character at a specified index (position)

```javascript
let myString = "Hello World!";

console.log(myString.charAt(0)); // Output: "H"
```

**charCodeAt()** - Returns the Unicode of the character at a specified index

```javascript
let myString = "Hello World!";

console.log(myString.charCodeAt(0)); // Output: 72
```

[Back to Top⤴️](#table-of-contents)

**concat()** - Returns two or more joined strings

```javascript
let myString1 = "Hello";
let myString2 = "World!";

let newString = myString1.concat(" ", myString2);

console.log(newString); // Output: "Hello World!"
```

**constructor** - Returns the string's constructor function

```javascript
let myString = "Hello World!";

console.log(myString.constructor); // Output: ƒ String() { [native code] }
```

[Back to Top⤴️](#table-of-contents)

**endsWith()** - Returns if a string ends with a specified value

```javascript
let myString = "Hello World!";

console.log(myString.endsWith("!")); // Output: true
```

**fromCharCode()** - Returns Unicode values as characters

```javascript
let myString = String.fromCharCode(72, 101, 108, 108, 111);

console.log(myString); // Output: "Hello"
```

[Back to Top⤴️](#table-of-contents)

**includes()** - Returns if a string contains a specified value

```javascript
let myString = "Hello World!";

console.log(myString.includes("World")); // Output: true
```

**indexOf()** - Returns the index (position) of the first occurrence of a value in a string

```javascript
let myString = "Hello World!";

console.log(myString.indexOf("World")); // Output: 6
```

[Back to Top⤴️](#table-of-contents)

**lastIndexOf()** - Returns the index (position) of the last occurrence of a value in a string

```javascript
let myString = "Hello World! World!";

console.log(myString.lastIndexOf("World")); // Output: 13
```

**length** - Returns the length of a string

```javascript
let myString = "Hello World!";

console.log(myString.length); // Output: 12
```

[Back to Top⤴️](#table-of-contents)

**localeCompare()** - Compares two strings in the current locale

```javascript
let myString = "Hello World!";

console.log(myString.localeCompare("Hello World!")); // Output: 0
```

**match()** - Searches a string for a value, or a regular expression, and returns the matches

```javascript
let myString = "The quick brown fox jumps over the lazy dog.";

let result = myString.match(/the/i);

console.log(myString); // Output: "The quick brown fox jumps over the lazy dog."
console.log(result); // Output: ["the", index: 30, input: "The quick brown fox jumps over the lazy dog.", groups: undefined]
```

**matchAll()** - Returns an iterator of all results matching a string against a regular expression

```javascript
let myString = "The quick brown fox jumps over the lazy dog.";

let result = myString.matchAll(/the/gi);

console.log(myString); // Output: "The quick brown fox jumps over the lazy dog."
console.log(result); // Output: [RegExpStringIterator]
```

**padEnd()** - Pads a string with a specified value at the end

```javascript
let myString = "Hello";

let newString = myString.padEnd(10, " World!");

console.log(myString); // Output: "Hello"
console.log(newString); // Output: "Hello World!"
```

**padStart()** - Pads a string with a specified value at the start

```javascript
let myString = "Hello";

let newString = myString.padStart(10, " World!");

console.log(myString); // Output: "Hello"
console.log(newString); // Output: " World!Hello"
```

[Back to Top⤴️](#table-of-contents)

**prototype** - Allows you to add properties and methods to an object

```javascript
let myString = "Hello World!";
String.prototype.age = 25;

console.log(myString.age); // Output: 25
```

**repeat()** - Returns a new string with a number of copies of a string

```javascript
let myString = "Hello World!";

console.log(myString.repeat(2)); // Output: "Hello World!Hello World!"
```

[Back to Top⤴️](#table-of-contents)

**replace()** - Searches a string for a value, or a regular expression, and returns a string where the values are replaced

```javascript
let myString = "Hello World!";

let newString = myString.replace("World", "Universe");

console.log(myString); // Output: "Hello World!"
console.log(newString); // Output: "Hello Universe!"
```

**search()** - Searches a string for a value, or regular expression, and returns the index (position) of the match

```javascript
let myString = "The quick brown fox jumps over the lazy dog.";

let result = myString.search(/fox/);

console.log(myString); // Output: "The quick brown fox jumps over the lazy dog."
console.log(result); // Output: 16
```

[Back to Top⤴️](#table-of-contents)

**slice()** - Extracts a part of a string and returns a new string

```javascript
let myString = "Hello World!";

let newString = myString.slice(6, 11);

console.log(myString); // Output: "Hello World!"
console.log(newString); // Output: "World"
```

**split()** - Splits a string into an array of substrings

```javascript
let myString = "Hello World!";

let array = myString.split(" ");

console.log(myString); // Output: "Hello World!"
console.log(array); // Output: ["Hello", "World!"]
```

[Back to Top⤴️](#table-of-contents)

**startsWith()** - Checks whether a string begins with specified characters

```javascript
let myString = "Hello World!";

console.log(myString.startsWith("Hello")); // Output: true
```

**substr()** - Extracts a number of characters from a string, from a start index (position)

```javascript
let myString = "Hello World!";

let newString = myString.substr(6, 5);

console.log(myString); // Output: "Hello World!"
console.log(newString); // Output: "World"
```

[Back to Top⤴️](#table-of-contents)

**substring()** - Extracts characters from a string, between two specified indices (positions)

```javascript
let myString = "Hello World!";

let newString = myString.substring(6, 11);

console.log(myString); // Output: "Hello World!"
console.log(newString); // Output: "World"
```

**toLocaleLowerCase()** - Returns a string converted to lowercase letters, using the host's locale

```javascript
let myString = "Hello World!";

console.log(myString.toLocaleLowerCase()); // Output: "hello world!"
```

[Back to Top⤴️](#table-of-contents)

**toLocaleUpperCase()** - Returns a string converted to uppercase letters, using the host's locale

```javascript
let myString = "Hello World!";

console.log(myString.toLocaleUpperCase()); // Output: "HELLO WORLD!"
```

**toLowerCase()** - Returns a string converted to lowercase letters

```javascript
let myString = "Hello World!";

console.log(myString); // Output: "Hello World!"
console.log(myString.toLowerCase()); // Output: "hello world!"
```

[Back to Top⤴️](#table-of-contents)

**toString()** - Returns a string or a string object as a string

```javascript
let myString = "Hello World!";
let number = 25; 

console.log(myString.toString()); // Output: "Hello World!"
console.log(number.toString()); // Output: "25"
```

**toUpperCase()** - Returns a string converted to uppercase letters

```javascript
let myString = "Hello World!";

console.log(myString); // Output: "Hello World!"
console.log(myString.toUpperCase()); // Output: "HELLO WORLD
```

[Back to Top⤴️](#table-of-contents)

**trim()** - Returns a string with removed whitespaces

```javascript
let myString = " Hello World! ";

console.log(myString); // Output: " Hello World! "
console.log(myString.trim()); // Output: "Hello World!"
```

**trimEnd()** - Returns a string with removed whitespaces from the end

```javascript
let myString = " Hello World! ";

console.log(myString); // Output: " Hello World! "
console.log(myString.trimEnd()); // Output: " Hello World!"
```

[Back to Top⤴️](#table-of-contents)

**trimStart()** - Returns a string with removed whitespaces from the start

```javascript
let myString = " Hello World! ";

console.log(myString); // Output: " Hello World! "
console.log(myString.trimStart()); // Output: "Hello World! "
```

**valueOf()** - Returns the primitive value of a string or a string object.

```javascript
let myString = "Hello World!";

console.log(myString.valueOf()); // Output: "Hello World!"
```

[Back to Top⤴️](#table-of-contents)

---

## 3. Stage 3: Modern Data Structures & ES6+ Mastery

## Objects

Objects are used to store collections of data and more complex entities.

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
  age: 25,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    street: "123 Main St",
    city: "Mumbai",
    state: "MH",
  },
};
```

### Object Methods

The following are some of the most commonly used object methods in JavaScript:

- **assign()**
- **create()**
- **defineProperties()**
- **defineProperty()**
- **entries()**
- **freeze()**
- **fromEntries()**
- **getOwnPropertyDescriptor()**
- **getOwnPropertyDescriptors()**
- **getOwnPropertyNames()**
- **getOwnPropertySymbols()**
- **getPrototypeOf()**
- **groupBy()**
- **hasOwn()**
- **is()**
- **isExtensible()**
- **isFrozen()**
- **isSealed()**
- **keys()**
- **preventExtensions()**
- **prototype**
- **seal()**
- **setPrototypeOf()**
- **values()**

[Back to Top⤴️](#table-of-contents)

**assign()** - Copies the values of all enumerable own properties from one or more source objects to a target object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const details = {
  age: 25,
  hobbies: ["reading", "coding", "traveling"],
};

const newPerson = Object.assign(person, details);

console.log(newPerson); // Output: {firstName: "Manthan", lastName: "Ank", age: 25, hobbies: Array(3)}
```

**create()** - Creates a new object with the specified prototype object and properties

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const newPerson = Object.create(person);

console.log(newPerson); // Output: {}
```

[Back to Top⤴️](#table-of-contents)

**defineProperties()** - Defines new or modifies existing properties directly on an object, returning the object

```javascript
const person = {};

Object.defineProperties(person, {
  firstName: {
    value: "Manthan",
    writable: true,
  },
  lastName: {
    value: "Ank",
    writable: true,
  },
});

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank"}
```

**defineProperty()** - Defines a new property directly on an object, or modifies an existing property on an object, and returns the object

```javascript
const person = {};

Object.defineProperty(person, "firstName", {
  value: "Manthan",
  writable: true,
});

console.log(person); // Output: {firstName: "Manthan"}
```

[Back to Top⤴️](#table-of-contents)

**entries()** - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const entries = Object.entries(person);

console.log(entries); // Output: [["firstName", "Manthan"], ["lastName", "Ank"]]
```

**freeze()** - Freezes an object: other code can't delete or change any properties

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.freeze(person);

person.age = 25;

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank"}
```

[Back to Top⤴️](#table-of-contents)

**fromEntries()** - Returns a new object from an iterable of [key, value] pairs

```javascript
const entries = [
  ["firstName", "Manthan"],
  ["lastName", "Ank"],
];

const person = Object.fromEntries(entries);

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank"}
```

**getOwnPropertyDescriptor()** - Returns a property descriptor for a named property on an object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

console.log(descriptor); // Output: {value: "Manthan", writable: true, enumerable: true, configurable: true}
```

[Back to Top⤴️](#table-of-contents)

**getOwnPropertyDescriptors()** - Returns all own property descriptors of a given object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const descriptors = Object.getOwnPropertyDescriptors(person);

console.log(descriptors); // Output: {firstName: {…}, lastName: {…}}
```

**getOwnPropertyNames()** - Returns an array of all properties (enumerable or not) found directly upon a given object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const properties = Object.getOwnPropertyNames(person);

console.log(properties); // Output: ["firstName", "lastName"]
```

[Back to Top⤴️](#table-of-contents)

**getOwnPropertySymbols()** - Returns an array of all symbol properties found directly upon a given object

```javascript
const person = {
  [Symbol("firstName")]: "Manthan",
  [Symbol("lastName")]: "Ank",
};

const symbols = Object.getOwnPropertySymbols(person);

console.log(symbols); // Output: [Symbol(firstName), Symbol(lastName)]
```

**getPrototypeOf()** - Returns the prototype of the specified object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const prototype = Object.getPrototypeOf(person);

console.log(prototype); // Output: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

[Back to Top⤴️](#table-of-contents)

**groupBy()** - Groups the elements of an array based on the given function

```javascript
const people = [
  { name: "Manthan", age: 25 },
  { name: "Ank", age: 30 },
  { name: "John", age: 25 },
];

const groupedPeople = people.groupBy(person => person.age);

console.log(groupedPeople); // Output: {25: Array(2), 30: Array(1)}
```

**hasOwn()** - Returns a boolean indicating whether the object has the specified property as its own property

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(person.hasOwn("firstName")); // Output: true
```

[Back to Top⤴️](#table-of-contents)

**is()** - Compares if two values are the same value

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const newPerson = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(Object.is(person, newPerson)); // Output: false
```

**isExtensible()** - Returns a boolean indicating if the object is extensible

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

console.log(Object.isExtensible(person)); // Output: true
```

[Back to Top⤴️](#table-of-contents)

**isFrozen()** - Returns a boolean indicating if the object is frozen

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.freeze(person);

console.log(Object.isFrozen(person)); // Output: true
```

**isSealed()** - Returns a boolean indicating if the object is sealed

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.seal(person);

console.log(Object.isSealed(person)); // Output: true
```

[Back to Top⤴️](#table-of-contents)

**keys()** - Returns an array of a given object's own enumerable property names

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const keys = Object.keys(person);

console.log(keys); // Output: ["firstName", "lastName"]
```

**preventExtensions()** - Prevents any extensions of an object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.preventExtensions(person);

person.age = 25;

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank"}
```

[Back to Top⤴️](#table-of-contents)

**prototype** - Allows you to add properties and methods to an object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.prototype.age = 25;

console.log(person.age); // Output: 25
```

**seal()** - Prevents other code from deleting properties of an object

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

Object.seal(person);

delete person.firstName;

console.log(person); // Output: {firstName: "Manthan", lastName: "Ank"}
```

[Back to Top⤴️](#table-of-contents)

**setPrototypeOf()** - Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const newPerson = {
  age: 25,
};

Object.setPrototypeOf(newPerson, person);

console.log(newPerson); // Output: {age: 25}
```

**values()** - Returns an array of a given object's own enumerable property values

```javascript
const person = {
  firstName: "Manthan",
  lastName: "Ank",
};

const values = Object.values(person);

console.log(values); // Output: ["Manthan", "Ank"]
```

## Loops

Loops are used to execute a block of code multiple times.

There are several types of loops in JavaScript:

- for loop
- while loop
- do while loop
- for in loop
- for of loop

[Back to Top⤴️](#table-of-contents)

### for loop

This type of loop is used to execute a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while loop

This type of loop is used to execute a block of code as long as a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

[Back to Top⤴️](#table-of-contents)

### do while loop

This type of loop is similar to the while loop, but it guarantees that the code block will be executed at least once.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### for in loop

This type of loop is used to iterate over the enumerable properties of an object.

```javascript
let obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
  console.log(prop + ": " + obj[prop]);
}
```

[Back to Top⤴️](#table-of-contents)

### for of loop

This type of loop is used to iterate over the iterable objects such as arrays, strings, and maps.

```javascript
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
```

## Conditional Statements

Conditional statements are used to perform different actions based on different conditions.

There are several types of conditional statements in JavaScript:

- if statement
- if else statement
- if else else if statement
- switch statement

[Back to Top⤴️](#table-of-contents)

## if statement

The if statement is used to execute a block of code if a specified condition is true.

```javascript
if (x > 0) {
  console.log("x is greater than 0");
}
```

### if else statement

The if...else statement is used to execute a block of code if a specified condition is true and another block of code if the condition is false.

```javascript
if (x > 0) {
  console.log("x is greater than 0");
} else {
  console.log("x is not greater than 0");
}
```

[Back to Top⤴️](#table-of-contents)

### if else else if statement

The if...else if...else statement is used to specify multiple conditions and execute a different block of code for each one.

```javascript
if (x > 0) {
  console.log("x is positive");
} else if (x < 0) {
  console.log("x is negative");
} else {
  console.log("x is zero");
}
```

### switch statement

The switch statement is used to select one of many blocks of code to be executed.

```javascript
let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  // and so on
  default:
    console.log("Invalid day");
}
```

[Back to Top⤴️](#table-of-contents)

---

## 2. Stage 2: Functions, Closures & Execution Contexts

## Functions

Functions are blocks of code that can be reused to perform a specific task. Defined with the function keyword, followed by a name, followed by parentheses ().

```jsx
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

### Types of Functions

- Named Function
- Anonymous Function
- Arrow Function
- IIFE
- Higher-Order Function
- Function Expression
- Function Declaration
- Function Constructor

[Back to Top⤴️](#table-of-contents)

### Named Function

A named function is a function that has a name. It can be defined using the function keyword followed by the function name.

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

### Anonymous Function

An anonymous function is a function that does not have a name. It can be defined using the function keyword followed by parentheses ().

```javascript
const name = function(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

### Arrow Function

Arrow functions are a more concise way to write functions in JavaScript. They are defined using the => syntax.

```javascript
const name = (parameter1, parameter2, parameter3) => {
  // code to be executed
}

const name = (parameter1, parameter2, parameter3) => expression

const name = parameter => expression

const name = () => expression

const name = (parameter1, parameter2, parameter3) => {
  return expression
}

const name = parameter => {
  return expression
}

const name = () => {
  return expression
}
```

[Back to Top⤴️](#table-of-contents)

## IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```javascript
(function() {
  console.log("Hello World!");
})();
```

[Back to Top⤴️](#table-of-contents)

## Higher-Order Functions

A higher-order function is a function that takes another function as an argument or returns a function as a result.

```javascript
function greet() {
  return "Hello World!";
}

function greetUser(greet) {
  return greet();
}

console.log(greetUser(greet)); // Output: "Hello World!"
```

[Back to Top⤴️](#table-of-contents)

## Function Expression

A function expression is a function that is assigned to a variable.

```javascript
const greet = function() {
  return "Hello World!";
}

console.log(greet()); // Output: "Hello World!"
```

## Function Declaration

A function declaration is a function that is defined using the function keyword followed by the function name.

```javascript
function greet() {
  return "Hello World!";
}

console.log(greet()); // Output: "Hello World!"
```

### Function Constructor

A function constructor is a function that is used to create new objects.

```javascript
const greet = new Function("return 'Hello World!'");
console.log(greet()); // Output: "Hello World!"
```

[Back to Top⤴️](#table-of-contents)

## Scope

Scope refers to the visibility of variables in JavaScript. There are three types of scope in JavaScript:

- Global Scope
- Function Scope
- Block Scope

### Global Scope

```javascript
let a = 10;
function myFunction() {
    console.log(a);
}
myFunction();
```

### Block Scope

```javascript
//var
function myFunction () {
    if(true) {
        var a = 10; // it exists in function scope
    }
    console.log(a);
}
myFunction();

//let
function myFunction () {
    if(true) {
        let a = 10; // it exists in block scope
    }
    console.log(a);
}
myFunction();

//const
function myFunction () {
    if(true) {
        const a = 10; // it exists in block scope
    }
    console.log(a);
}
myFunction();
```

[Back to Top⤴️](#table-of-contents)

### Function Scope

```javascript
//var
function myFunction() {
    var a = 10;
}
myFunction()
console.log(a);

//let
function myFunction() {
    let a = 10;
}
myFunction()
console.log(a);

//const
function myFunction() {
    const a = 10;
}
myFunction()
console.log(a);
```

[Back to Top⤴️](#table-of-contents)

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

```javascript
console.log(x); // Output: undefined

var x = 5;
```

[Back to Top⤴️](#table-of-contents)

## Currying

Currying is a technique in which a function with multiple arguments is converted into a sequence of nested functions, each taking a single argument.

```javascript
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // Output: 24
```

## Dates

JavaScript provides a built-in Date object that can be used to work with dates and times.

### Date Object

The Date object is used to work with dates and times in JavaScript. It can be created using the new keyword followed by the Date() constructor.

```javascript
new Date()
```

[Back to Top⤴️](#table-of-contents)

### Date Formats

There are several ways to create a new Date object in JavaScript:

```javascript
new Date() // current date and time
new Date(milliseconds) // milliseconds since January 1, 1970, 00:00:00 UTC
new Date(dateString) // date string (e.g. "October 13, 2014 11:13:00")
new Date(year, month, day, hours, minutes, seconds, milliseconds) // year, month, day, hours, minutes, seconds, milliseconds
```

[Back to Top⤴️](#table-of-contents)

### Date Properties

**constructor** - Returns the function that created the Date object's prototype

```javascript
const d = new Date();
d.constructor; // ƒ Date() { [native code] }
```

**prototype** - Allows you to add properties and methods to the Date object

```javascript
Date.prototype.age = 25;

const d = new Date();
d.age; // 25
```

**UTC** - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

```javascript
const d = new Date();
d.UTC(); // 1642149980524
```

[Back to Top⤴️](#table-of-contents)

**parse** - Parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

```javascript
Date.parse("Jan 1, 2023"); // 1672531200000
```

**now** - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

```javascript
Date.now(); // 1642149980524
```

[Back to Top⤴️](#table-of-contents)

### Date Methods

**toString** - It is a built-in function that can be used to convert a date object to a string.

```javascript
const d = new Date();
d.toString(); // 'Sat Jan 14 2023 10:36:20 GMT+0530 (India Standard Time)'
```

**toDateString** - It is a built-in function that can be used to convert a date object to a string in the format of "Weekday Month Date Year".

```javascript
const d = new Date();
d.toDateString(); // 'Sat Jan 14 2023'
```

[Back to Top⤴️](#table-of-contents)

**toUTCString** - It is a built-in function that can be used to convert a date object to a string in the format of "Weekday, DD Mon YYYY HH:MM:SS GMT".

```javascript
const d = new Date();
d.toUTCString(); // 'Sat, 14 Jan 2023 05:06:20 GMT'
```

**toISOString** - It is a built-in function that can be used to convert a date object to a string in the format of "YYYY-MM-DDTHH:mm:ss.sssZ".

```javascript
const d = new Date();
d.toISOString(); // '2023-01-14T05:06:20.524Z'
```

[Back to Top⤴️](#table-of-contents)

## Date Get Methods

The Date object has several built-in methods that can be used to get the date and time components of a date object. Some of the most commonly used get methods are:

**getFullYear** - returns the four-digit year of the date.

```javascript
const d = new Date();
d.getFullYear();
```

**getMonth** - returns the month of the date (0-11, where 0 represents January and 11 represents December).

```javascript
const d = new Date();
d.getMonth();
```

[Back to Top⤴️](#table-of-contents)

**getDate** - returns the day of the month of the date (1-31).

```javascript
const d = new Date();
d.getDate();
```

**getDay** - returns the day of the week of the date (0-6, where 0 represents Sunday and 6 represents Saturday).

```javascript
const d = new Date();
d.getDay();
```

**getHours** - returns the hour of the date (0-23).

```javascript
const d = new Date();
d.getHours();
```

[Back to Top⤴️](#table-of-contents)

**getMinutes** - returns the minutes of the date (0-59).

```javascript
const d = new Date();
d.getMinutes();
```

**getSeconds** - returns the seconds of the date (0-59).

```javascript
const d = new Date();
d.getSeconds();
```

[Back to Top⤴️](#table-of-contents)

**getMilliseconds** - returns the milliseconds of the date (0-999).

```javascript
const d = new Date();
d.getMilliseconds();
```

**getTime** - returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```javascript
const d = new Date();
d.getTime();
```

[Back to Top⤴️](#table-of-contents)

## Date Set Methods

**setDate** - sets the day of the month of the date object.

```javascript
const d = new Date();
d.setDate(15);
```

**setFullYear** - sets the year, and optionally the month and date, of the date object.

```javascript
const d = new Date();
d.setFullYear(2020);
```

[Back to Top⤴️](#table-of-contents)

**setHours** - sets the hours, minutes, seconds and milliseconds of the date object.

```javascript
const d = new Date();
d.setHours(22);
```

**setMilliseconds** - sets the milliseconds of the date object.

```javascript
const d = new Date();
d.setMilliSeconds(3000);
```

**setMinutes** - sets the minutes, seconds and milliseconds of the date object.

```javascript
const d = new Date();
d.setMinutes(30);
```

[Back to Top⤴️](#table-of-contents)

**setSeconds** - sets the seconds and milliseconds of the date object.

```javascript
const d = new Date();
d.setSeconds(30);
```

**setMonth** - sets the month, and optionally the date, of the date object.

```javascript
const d = new Date();
d.setMonth(11);
```

**setTime** - sets the date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

```javascript
const d = new Date();
d.setTime(30);
```

[Back to Top⤴️](#table-of-contents)

## Type Conversion

JavaScript is a loosely typed language, which means that variables can hold values of any data type. JavaScript automatically converts the data type of a variable to the appropriate type when needed.

### Convert string to numbers

**Number** - Converts a string to a number using the Number() function.

```javascript
Number("3.14") // 3.14
Number(Math.PI) // 3.141592653589793
Number(" ") // 0
Number("") // 0
Number("99 88") // NaN
Number("John") // NaN
```

[Back to Top⤴️](#table-of-contents)

**parseFloat** - Converts a string to a floating-point number using the parseFloat() method.

```javascript
let num = parseFloat("123.456");
console.log(num); // Output: 123.456
```

[Back to Top⤴️](#table-of-contents)

**parseInt** - Converts a string to an integer using the parseInt() method.

```javascript
let num = parseInt("123");
console.log(num); // Output: 123
```

### Convert number to a string

**String** - Converts a number to a string using the String() method.

```javascript
let str = String(123);
console.log(str); // Output: "123"
```

[Back to Top⤴️](#table-of-contents)

**toString** - Converts a number to a string using the toString() method.

```javascript
let str = (123).toString();
console.log(str); // Output: "123"
```

**toExponential** - Converts a number to a string, using toExponential() method.

```javascript
let str = (123).toExponential();
console.log(str); // Output: 1.23e+2
```

**toFixed** - Converts a number to a string, using toFixed() method.

```javascript
let str = (123).toFixed();
console.log(str); // Output: 123
```

[Back to Top⤴️](#table-of-contents)

**toPrecision** - Converts a number to a string, using toPrecision() method.

```javascript
let str = (123).toPrecision();
console.log(str); // Output: 123
```

### Convert dates to numbers

**Number** - Converts a date to a number using the Number() function.

```javascript
d = new Date();
Number(d) // 1673677425068
```

[Back to Top⤴️](#table-of-contents)

**getTime** Converts a date to a number using the getTime() method.

```javascript
d = new Date();
d.getTime() // 1673677461233
```

**string** - Converts a date to a string using the String() function.

```javascript
String(Date()) // 'Sat Jan 14 2023 11:54:38 GMT+0530 (India Standard Time)'
```

[Back to Top⤴️](#table-of-contents)

**toString** - Converts a date to a string using the toString() method.

```javascript
Date().toString() //'Sat Jan 14 2023 11:54:57 GMT+0530 (India Standard Time)'
```

### Convert boolean to number

**Number** - Converts a boolean to a number using the Number() function.

```javascript
Number(false)     // returns 0
Number(true)      // returns 1
```

[Back to Top⤴️](#table-of-contents)

### Convert boolean to string

**string** - Converts a boolean to a string using the String() function.

```javascript
String(false)      // returns "false"
String(true)       // returns "true"
```

| Original Value | Converted to Number | Converted to String | Converted to Boolean |
|---|---|---|---|
| false | 0 | "false" | false |
| true | 1 | "true" | true |
| 0 | 0 | "0" | false |
| 1 | 1 | "1" | true |
| "0" | 0 | "0" | true |
| "000" | 0 | "000" | true |
| "1" | 1 | "1" | true |
| NaN | NaN | "NaN" | false |
| Infinity | Infinity | "Infinity" | true |
| -Infinity | -Infinity | "-Infinity" | true |
| "" | 0 | "" | false |
| "20" | 20 | "20" | true |
| "twenty" | NaN | "twenty" | true |
| [ ] | 0 | "" | true |
| [20] | 20 | "20" | true |
| [10,20] | NaN | "10,20" | true |
| ["twenty"] | NaN | "twenty" | true |
| ["ten","twenty"] | NaN | "ten,twenty" | true |
| function(){} | NaN | "function(){}" | true |
| { } | NaN | "[object Object]" | true |
| null | 0 | "null" | false |
| undefined | NaN | "undefined" | false |

[Back to Top⤴️](#table-of-contents)

## Typeof

The typeof operator is used to get the data type of a variable or an expression.

```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

[Back to Top⤴️](#table-of-contents)

Keep in mind that

- The data type of NaN is number
- The data type of an array is object
- The data type of a date is object
- The data type of null is object
- The data type of an undefined variable is undefined *
- The data type of a variable that has not been assigned a value is also undefined *

## Math

The Math object allows you to perform mathematical tasks on numbers.

```javascript
Math.PI // returns 3.141592653589793
```

[Back to Top⤴️](#table-of-contents)

### Math Property

```javascript
Math.property
```

Example

```javascript
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```

[Back to Top⤴️](#table-of-contents)

### Math Methods

The Math object has several built-in methods that can be used to perform mathematical tasks. Some of the most commonly used methods are:

**Math.round** - Returns x rounded to its nearest integer

```javascript
Math.round(4.6); // 5
```

**Math.ceil** - Returns x rounded up to its nearest integer

```javascript
Math.ceil(4.4); // 5
```

[Back to Top⤴️](#table-of-contents)

**Math.floor** - Returns x rounded down to its nearest integer

```javascript
Math.floor(4.7); // 4
```

**Math.trunc** - Returns the integer part of x (new in ES6)

```javascript
Math.trunc(4.7); // 4
```

[Back to Top⤴️](#table-of-contents)

**Math.sign** - Returns if x is negative, null or positive.

```javascript
Math.sign(4); // 1
```

**Math.pow** - returns the value of x to the power of y.

```javascript
Math.pow(8, 2); // 64
```

**Math.sqrt** - returns the square root of x.

```javascript
Math.sqrt(64); // 8
```

[Back to Top⤴️](#table-of-contents)

**Math.abs** - returns the absolute (positive) value of x.

```javascript
Math.abs(-4.7); // 4.7
```

**Math.sin** - returns the sine (a value between -1 and 1) of the angle x (given in radians).

```javascript
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
```

**Math.cos** - returns the cosine (a value between -1 and 1) of the angle x (given in radians).

```javascript
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
```

[Back to Top⤴️](#table-of-contents)

**Math.min** - It can be used to find the lowest value in a list of arguments.

```javascript
Math.min(0, 150, 30, 20, -8, -200); // -200
```

**Math.max** - It can be used to find the highest value in a list of arguments.

```javascript
Math.max(0, 150, 30, 20, -8, -200); // 150
```

**Math.random** - returns a random number between 0 (inclusive), and 1 (exclusive).

```javascript
Math.random(); // 0.07840484495533051
```

[Back to Top⤴️](#table-of-contents)

**Math.log** - returns the natural logarithm of x.

```javascript
Math.log(1); // 0
```

**Math.log2** - returns the base 2 logarithm of x.

```javascript
Math.log2(8); // 3
```

**Math.log10** - returns the base 10 logarithm of x.

```javascript
Math.log10(1000); // 3
```

[Back to Top⤴️](#table-of-contents)

| Method | Description |
|---|---|
| abs(x) | Returns the absolute value of x |
| acos(x) | Returns the arccosine of x, in radians |
| acosh(x) | Returns the hyperbolic arccosine of x |
| asin(x) | Returns the arcsine of x, in radians |
| asinh(x) | Returns the hyperbolic arcsine of x |
| atan(x) | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| atan2(y, x) | Returns the arctangent of the quotient of its arguments |
| atanh(x) | Returns the hyperbolic arctangent of x |
| cbrt(x) | Returns the cubic root of x |
| ceil(x) | Returns x, rounded upwards to the nearest integer |
| cos(x) | Returns the cosine of x (x is in radians) |
| cosh(x) | Returns the hyperbolic cosine of x |
| exp(x) | Returns the value of Ex |
| floor(x) | Returns x, rounded downwards to the nearest integer |
| log(x) | Returns the natural logarithm (base E) of x |
| max(x, y, z, ..., n) | Returns the number with the highest value |
| min(x, y, z, ..., n) | Returns the number with the lowest value |
| pow(x, y) | Returns the value of x to the power of y |
| random() | Returns a random number between 0 and 1 |
| round(x) | Rounds x to the nearest integer |
| sign(x) | Returns if x is negative, null or positive (-1, 0, 1) |
| sin(x) | Returns the sine of x (x is in radians) |
| sinh(x) | Returns the hyperbolic sine of x |
| sqrt(x) | Returns the square root of x |
| tan(x) | Returns the tangent of an angle |
| tanh(x) | Returns the hyperbolic tangent of a number |
| trunc(x) | Returns the integer part of a number (x) |

## Sets

A Set is a collection of unique values. A Set can hold any datatype, including primitive types and objects.

```javascript
const letters = new Set(["a","b","c"]);
```

[Back to Top⤴️](#table-of-contents)

### Set Properties

**constructor** - Returns the function that created the Set object's prototype

```javascript
letters.constructor; // ƒ Set() { [native code] }
```

**prototype** - Allows you to add properties and methods to a Set object

```javascript
Set.prototype.size = 0;

const letters = new Set(["a","b","c"]);
letters.size; // 3
```

[Back to Top⤴️](#table-of-contents)

### Set Methods

The Set object has several built-in methods that can be used to work with Sets. Some of the most commonly used methods are:

- new Set()
- add()
- delete()
- has()
- forEach()
- values()
- size

**new Set** - Creates a new Set

```javascript
const letters = new Set(["a","b","c"]);
```

[Back to Top⤴️](#table-of-contents)

**add** - Adds a new element to the Set

```javascript
letters.add("d");
```

**delete** - Removes an element from a Set

```javascript
letters.delete("d");
```

**has** - Returns true if a value exists in the Set

```javascript
letters.has("a");
```

[Back to Top⤴️](#table-of-contents)

**forEach** - Invokes a callback for each element in the Set

```javascript
// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
letters.forEach(function(value) {
  text += value + " ";
});

console.log(text.trim()); // Output: "a b c"
```

**values** - Returns an iterator with all the values in a Set

```javascript
letters.values()   // Returns [object Set Iterator]
```

[Back to Top⤴️](#table-of-contents)

**size Property** - Returns the number of elements in a Set

```javascript
letters.size;
```

## Map

A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.

```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```

[Back to Top⤴️](#table-of-contents)

### Map Properties

**constructor** - Returns the function that created the Map object's prototype

```javascript
fruits.constructor; // ƒ Map() { [native code] }
```

**prototype** - Allows you to add properties and methods to a Map object

```javascript
Map.prototype.size = 0;

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.size; // 3
```

[Back to Top⤴️](#table-of-contents)

### Map Methods

The Map object has several built-in methods that can be used to work with Maps. Some of the most commonly used methods are:

- new Map()
- set()
- get()
- delete()
- has()
- forEach()
- entries()
- size

**new Map** - Creates a new Map

```javascript
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```

[Back to Top⤴️](#table-of-contents)

**set** - Sets the value for a key in a Map

```javascript
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```

**get** - Gets the value for a key in a Map

```javascript
fruits.get("apples");    // Returns 500
```

**delete** - Removes a Map element specified by the key

```javascript
fruits.delete("apples");
```

[Back to Top⤴️](#table-of-contents)

**has** - Returns true if a key exists in a Map

```javascript
fruits.has("apples");
```

**forEach** - Calls a function for each key/value pair in a Map

```javascript
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
```

**entries** - Returns an iterator with the [key, value] pairs in a Map.

```javascript
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
```

**size Property** - Returns the number of elements in a Map

```javascript
fruits.size;
```

[Back to Top⤴️](#table-of-contents)

## Recursion

Recursion is a programming technique where a function calls itself in order to solve a problem. Recursion is used to solve problems that can be broken down into smaller, more manageable subproblems.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5); // 120
```

[Back to Top⤴️](#table-of-contents)

---

## 4. Stage 4: Asynchronous JavaScript & Event Loop Internals

## Async

Asynchronous programming allows you to run multiple tasks concurrently without blocking the main thread. JavaScript provides several ways to work with asynchronous code, including callbacks, promises, and async/await.

### Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Output: 10
```

[Back to Top⤴️](#table-of-contents)

### Asynchronous JavaScript

JavaScript is a single-threaded language, which means it can only execute one task at a time. Asynchronous JavaScript allows you to run multiple tasks concurrently without blocking the main thread.

```javascript
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The async operation was successful");
  }, 1000);
});

myPromise.then((value) => {
  console.log(value);
});

// Output: The async operation was successful
```

### Promise

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Syntax -

```javascript
const myPromise = new Promise((resolve, reject) => {
    // code
});

myPromise.then(
    (value) => {
        // success
    },
    (error) => {
        // error
    }
);

myPromise.catch(
    (error) => {
        // error
    }
);

myPromise.finally(
    () => {
        // code
    }
);

myPromise.all([promise1, promise2, promise3, ...])
```

Example

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The async operation was successful");
    }, 1000);
});

myPromise.then((value) => {
    console.log(value);
});

// Output: The async operation was successful
```

[Back to Top⤴️](#table-of-contents)

### async/await

The async/await syntax allows you to write asynchronous code that looks synchronous. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to be resolved.

Async Syntax

```javascript
async function myFunction() {
    // code
}
```

Await Syntax

```javascript
let result = await promise;

// or

await promise;
```

Example

```javascript
async function myFunction() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("The async operation was successful"), 1000);
    });

    let result = await promise;
    console.log(result);
}

myFunction();

// Output: The async operation was successful
```

[Back to Top⤴️](#table-of-contents)

---

## 5. Stage 5: DOM, BOM & Browser Web APIs

## DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document.

### DOM Properties

**document.body** - Returns the body element

```javascript
document.body;
```

**document.cookie** - Returns the document's cookie

```javascript
document.cookie;
```

**document.doctype** - Returns the document's doctype

```javascript
document.doctype;
```

[Back to Top⤴️](#table-of-contents)

**document.documentElement** - Returns the document's root element

```javascript
document.documentElement;
```

**document.documentURI** - Returns the URI of the document

```javascript
document.documentURI;
```

**document.domain** - Returns the domain name of the server that loaded the document

```javascript
document.domain;
```

[Back to Top⤴️](#table-of-contents)

**document.head** - Returns the head element

```javascript
document.head;
```

**document.images** - Returns a collection of all images in the document

```javascript
document.images;
```

**document.lastModified** - Returns the date and time the document was last modified

```javascript
document.lastModified;
```

**document.links** - Returns a collection of all links in the document

```javascript
document.links;
```

[Back to Top⤴️](#table-of-contents)

**document.readyState** - Returns the loading status of the document

```javascript
document.readyState;
```

**document.referrer** - Returns the URI of the referrer (the linking document)

```javascript
document.referrer;
```

**document.title** - Returns the title of the document

```javascript
document.title;
```

**document.URL** - Returns the complete URL of the document

```javascript
document.URL;
```

[Back to Top⤴️](#table-of-contents)

### DOM Methods

The Document object has several built-in methods that can be used to manipulate the document. Some of the most commonly used methods are:

addEventListener() - It is used to add an event listener to the document.

```javascript
document.addEventListener("click", () => {
  console.log("The document was clicked");
});
```

adoptNode() - It is used to adopt the node from the other documents.

```javascript
document.adoptNode(node);
```

[Back to Top⤴️](#table-of-contents)

append() - It appends the new node or HTML after the last child node of the document.

```javascript
document.append(node);
```

caretPositionFromPoint() - It returns the caretPosition object, containing the DOM node based on the coordinates passed as an argument.

```javascript
document.caretPositionFromPoint(x, y);
```

close() - It closes the output stream opened using the document.open() method.

```javascript
document.close();
```

[Back to Top⤴️](#table-of-contents)

createAttribute() - It creates a new attribute node.

```javascript
document.createAttribute("class");
```

createAttributeNS() - It creates a new attribute node with the particular namespace URI.

```javascript
document.createAttributeNS("http://www.w3.org/2000/svg", "class");
```

createComment() - It creates a new comment node with a specific text message.

```javascript
document.createComment("This is a comment");
```

[Back to Top⤴️](#table-of-contents)

createDocumentFragment() - It creates a DocumentFragment node.

```javascript
document.createDocumentFragment();
```

createElement() - It creates a new element node to insert into the web page.

```javascript
document.createElement("div");
```

createElementNS() - It is used to create a new element node with a particular namespace URI.

```javascript
document.createElementNS("http://www.w3.org/2000/svg", "div");
```

createEvent() - It creates a new event node.

```javascript
document.createEvent("Event");
```

[Back to Top⤴️](#table-of-contents)

createTextNode() - It creates a new text node.

```javascript
document.createTextNode("This is a text node");
```

elementFromPoint() - It accesses the element from the specified coordinates.

```javascript
document.elementFromPoint(x, y);
```

elementsFromPoint() - It returns the array of elements that are at the specified coordinates.

```javascript
document.elementsFromPoint(x, y);
```

[Back to Top⤴️](#table-of-contents)

getAnimations() - It returns the array of all animations applied on the document.

```javascript
document.getAnimations();
```

getElementById() - It accesses the HTML element using the id.

```javascript
document.getElementById("id");
```

getElementsByClassName() - It accesses the HTML element using the class name.

```javascript
document.getElementsByClassName("class");
```

[Back to Top⤴️](#table-of-contents)

getElementsByName() - It accesses the HTML element using the name.

```javascript
document.getElementsByName("name");
```

getElementsByTagName() - It accesses the HTML element using the tag name.

```javascript
document.getElementsByTagName("tag");
```

hasFocus() - It returns the boolean value based on whether any element or document itself is in the focus.

```javascript
document.hasFocus();
```

[Back to Top⤴️](#table-of-contents)

importNode() - It is used to import the node from another document.

```javascript
document.importNode(node);
```

normalize() - It removes the text nodes, which are empty, and joins other nodes.

```javascript
document.normalize();
```

open() - It is used to open a new output stream.

```javascript
document.open();
```

[Back to Top⤴️](#table-of-contents)

prepand() - It is used to insert the particular node before all nodes.

```javascript
document.prepand(node);
```

querySelector() - It is used to select the first element that matches the css selector passed as an argument.

```javascript
document.querySelector("p");
```

querySelectorAll() - It returns the nodelist of the HTML elements, which matches the multiple CSS selectors.

```javascript
document.querySelectorAll("p.intro");
```

[Back to Top⤴️](#table-of-contents)

removeEventListener() - It is used to remove the event listener from the document.

```javascript
document.removeEventListener("click", () => {
  console.log("The document was clicked");
});
```

replaceChildren() - It replaces the children nodes of the document.

```javascript
document.replaceChildren(node);
```

[Back to Top⤴️](#table-of-contents)

write() - It is used to write text, HTML, etc., into the document.

```javascript
document.write("Hello World!");
```

writeln() - It is similar to the write() method but writes each statement in the new line.

```javascript
document.writeln("Hello World!");
```

[Back to Top⤴️](#table-of-contents)

### Documents

The Document object represents the entire HTML document. It is the root node of the HTML document tree.

**Finding HTML Elements** -

| Method | Description |
|---|---|
| document.getElementById(id) | Find an element by element id |
| document.getElementsByTagName(name) | Find elements by tag name |
| document.getElementsByClassName(name) | Find elements by class name |

**Changing HTML Elements** -

| Property | Description |
|--|--|
| element.innerHTML =  new html content | Change the inner HTML of an element |
| element.attribute = new value | Change the attribute value of an HTML element |
| element.style.property = new style | Change the style of an HTML element |

| Method | Description |
|--|--|
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |

[Back to Top⤴️](#table-of-contents)

**Adding and Deleting Elements** -

| Method | Description |
|--|--|
| document.createElement(element) | Create an HTML element |
| document.removeChild(element) | Remove an HTML element |
| document.appendChild(element) | Add an HTML element |
| document.replaceChild(new, old) | Replace an HTML element |
| document.write(text) | Write into the HTML output stream |

**Adding Events Handlers** -

| Method | Description |
|--|--|
| document.getElementById(id).onclick = function(){code} | Adding event handler code to an onclick event |

**Finding HTML Objects** -

| Property | Description | DOM |
|--|--|--|
| document.anchors | Returns all elements that have a name attribute | 1 |
| document.applets | Deprecated | 1 |
| document.baseURI | Returns the absolute base URI of the document | 3 |
| document.body | Returns the element | 1 |
| document.cookie | Returns the document's cookie | 1 |
| document.doctype | Returns the document's doctype | 3 |
| document.documentElement | Returns the element | 3 |
| document.documentMode | Returns the mode used by the browser | 3 |
| document.documentURI | Returns the URI of the document | 3 |
| document.domain | Returns the domain name of the document server | 1 |
| document.domConfig | Obsolete. | 3 |
| document.embeds | Returns all  elements | 3 |
| document.forms | Returns all  elements | 1 |
| document.head | Returns the  element | 3 |
| document.images | Returns all  elements | 1 |
| document.implementation | Returns the DOM implementation | 3 |
| document.inputEncoding | Returns the document's encoding (character set) | 3 |
| document.lastModified | Returns the date and time the document was updated | 3 |
| document.links | Returns all  and elements that have a href attribute | 1 |
| document.readyState | Returns the (loading) status of the document | 3 |
| document.referrer | Returns the URI of the referrer (the linking document) | 1 |
| document.scripts | Returns all  elements | 3 |
| document.strictErrorChecking | Returns if error checking is enforced | 3 |
| document.title | Returns the  element | 1 |
| document.URL | Returns the complete URL of the document | 1 |

[Back to Top⤴️](#table-of-contents)

**Elements** -

Finding HTML elements by id

```javascript
const element = document.getElementById("intro");
```

Finding HTML elements by tag name

```javascript
const element = document.getElementsByTagName("p");
```

Finding HTML elements by class name

```javascript
const x = document.getElementsByClassName("intro");
```

Finding HTML elements by CSS selectors

```javascript
const x = document.querySelectorAll("p.intro");
```

[Back to Top⤴️](#table-of-contents)

Finding HTML elements by HTML object collections

```javascript
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
```

Changing HTML

```javascript
document.getElementById("demo").innerHTML = "Hello World!";
```

Forms

```javascript
document.getElementById("myForm").submit();
```

Changing CSS

```javascript
document.getElementById("demo").style.fontSize = "35px";
```

[Back to Top⤴️](#table-of-contents)

Animations

```javascript
document.getElementById("animate").style.animation = "mymove 4s infinite";
```

Events

```javascript
document.getElementById("myBtn").addEventListener("click", displayDate);
```

Event Listener

```javascript
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});
```

[Back to Top⤴️](#table-of-contents)

Navigation

```javascript
document.getElementById("myAnchor").href = "https://www.w3schools.com";
```

Nodes

```javascript
document.getElementById("demo").childNodes[0].nodeValue = "new text";
```

Collections

```javascript
document.getElementsByTagName("p");
```

Node

```javascript
document.getElementById("main").firstChild.nodeValue;
```

Lists

```javascript
document.getElementById("myList").innerHTML = "Mango";
```

[Back to Top⤴️](#table-of-contents)

## Browser BOM

Browser Object Model (BOM) is used to interact with the browser. The Browser Object Model (BOM) allows JavaScript to interact with the browser. The BOM is not standardized, and its properties and methods may differ between browsers.

**Window** -

Window Object

```javascript
window.document.getElementById("header");
//or
document.getElementById("header");
```

Window Size

window.innerHeight - the inner height of the browser window (in pixels)

window.innerWidth - the inner width of the browser window (in pixels)

window.open() - open a new window

window.close() - close the current window

window.moveTo() - move the current window

window.resizeTo() - resize the current window

```javascript
window.innerWidth;

window.innerHeight;
```

[Back to Top⤴️](#table-of-contents)

**Window Screen** -

`window.screen` - object contains information about the user's screen.

screen.width

```javascript
document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;
```

screen.height

```javascript
document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;
```

screen.availWidth

```javascript
document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;
```

screen.availHeight

```javascript
document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
```

screen.colorDepth

```javascript
document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;
```

screen.pixelDepth

```javascript
document.getElementById("demo").innerHTML =
"Screen Pixel Depth: " + screen.pixelDepth;
```

[Back to Top⤴️](#table-of-contents)

Example

```javascript
document.getElementById('demo1').innerHTML = 'Screen Width: ' + screen.width;
document.getElementById('demo2').innerHTML = 'Screen Height: ' + screen.height;
document.getElementById('demo3').innerHTML =
  'Available Screen Width: ' + screen.availWidth;
document.getElementById('demo4').innerHTML =
  'Available Screen Height: ' + screen.availHeight;
document.getElementById('demo5').innerHTML =
  'Screen Color Depth: ' + screen.colorDepth;
document.getElementById('demo6').innerHTML =
  'Screen Pixel Depth: ' + screen.pixelDepth;
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Window Screen</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <main>
      <p id="demo1"></p>
      <p id="demo2"></p>
      <p id="demo3"></p>
      <p id="demo4"></p>
      <p id="demo5"></p>
      <p id="demo6"></p>
    </main>
  </body>
</html>
```

[Stackblitz Link](https://stackblitz.com/edit/web-platform-paqevc?file=index.html)

[Back to Top⤴️](#table-of-contents)

Window Location

`window.location` - object can be used to get the current page address (URL) and to redirect the browser to a new page.

window.location.href returns the href (URL) of the current page

```javascript
document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;
```

window.location.hostname returns the domain name of the web host

```javascript
document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;
```

window.location.pathname returns the path and filename of the current page

```javascript
document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;
```

window.location.protocol returns the web protocol used (http: or https:)

```javascript
document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
```

window.location.assign() loads a new document

```javascript
document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;
```

[Back to Top⤴️](#table-of-contents)

Window Location Assign

```javascript
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<h3>The window.location object</h3>

<input type="button" value="Load new document" onclick="newDoc()">

<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>

</body>
</html>
```

Example

```javascript
document.getElementById('demo1').innerHTML =
  'Page location is ' + window.location.href;
document.getElementById('demo2').innerHTML =
  'Page hostname is ' + window.location.hostname;
document.getElementById('demo3').innerHTML =
  'Page path is ' + window.location.pathname;
document.getElementById('demo4').innerHTML =
  'Page protocol is ' + window.location.protocol;
document.getElementById('demo5').innerHTML =
  'Port number is ' + window.location.port;
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Window Location</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Window Location Example</h1>
    </nav>
    <main>
      <p id="demo1"></p>
      <p id="demo2"></p>
      <p id="demo3"></p>
      <p id="demo4"></p>
      <p id="demo5"></p>
    </main>
  </body>
</html>
```

[Stackblitz Link](https://stackblitz.com/edit/web-platform-sixdd6?file=script.js)

[Back to Top⤴️](#table-of-contents)

**Window History** - The window.history object contains the browser's history.

`window.history` - object can be written without the window prefix.

history.back() - same as clicking back in the browser

history.forward() - same as clicking forward in the browser

```javascript
window.history.back()
window.history.forward()
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Window History</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Window History</h1>
    </nav>
    <main>
      <input type="button" value="Forward" onclick="goForward()" />
      <input type="button" value="Back" onclick="goBack()" />
    </main>
  </body>
</html>
```

[Back to Top⤴️](#table-of-contents)

**Window Navigator** - Window Navigator object contains information about the visitor's browser.

navigator.cookieEnabled

navigator.appCodeName

navigator.platform

Browser Cookies

```javascript
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
```

Browser Application Name

```javascript
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
```

Browser Application Code Name

```javascript
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
```

[Back to Top⤴️](#table-of-contents)

Browser Engine

```javascript
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
```

Browser Version

```javascript
document.getElementById("demo").innerHTML = navigator.appVersion;
```

Browser Agent

```javascript
document.getElementById("demo").innerHTML = navigator.userAgent;
```

Browser Platform

```javascript
document.getElementById("demo").innerHTML = navigator.platform;
```

Browser Language

```javascript
document.getElementById("demo").innerHTML = navigator.language;
```

Is The Browser Online?

```javascript
document.getElementById("demo").innerHTML = navigator.onLine;
```

[Back to Top⤴️](#table-of-contents)

Is Java Enabled?

```javascript
document.getElementById("demo").innerHTML = navigator.javaEnabled();
```

```javascript
document.getElementById('demo1').innerHTML =
  'navigator.cookieEnabled is ' + navigator.cookieEnabled;
document.getElementById('demo2').innerHTML =
  'navigator.appName is ' + navigator.appName;
document.getElementById('demo3').innerHTML =
  'navigator.appCodeName is ' + navigator.appCodeName;
document.getElementById('demo4').innerHTML =
  'navigator.product is ' + navigator.product;
document.getElementById('demo5').innerHTML =
  'navigator.appVersion is ' + navigator.appVersion;
document.getElementById('demo6').innerHTML =
  'navigator.userAgent is ' + navigator.userAgent;
document.getElementById('demo7').innerHTML =
  'navigator.platform is ' + navigator.platform;
document.getElementById('demo8').innerHTML =
  'navigator.language is ' + navigator.language;
document.getElementById('demo9').innerHTML =
  'navigator.onLine is ' + navigator.onLine;
document.getElementById('demo10').innerHTML =
  'navigator.javaEnabled is ' + navigator.javaEnabled();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Window Navigator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Window Navigator</h1>
    </nav>
    <main>
      <p id="demo1"></p>
      <p id="demo2"></p>
      <p id="demo3"></p>
      <p id="demo4"></p>
      <p id="demo5"></p>
      <p id="demo6"></p>
      <p id="demo7"></p>
      <p id="demo8"></p>
      <p id="demo9"></p>
      <p id="demo10"></p>
    </main>
  </body>
</html>
```

[Stackblitz Link](https://stackblitz.com/edit/web-platform-m1vzbh?file=index.html)

[Back to Top⤴️](#table-of-contents)

**Popup Boxes** -

Alert Box

`window.alert("sometext");`

```javascript
function myFunction() {
  alert('I am an alert box!');
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Alert Box</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h2>Alert Box</h2>
    </nav>
    <main>
      <button onclick="myFunction()">Try it</button>
    </main>
  </body>
</html>
```

[Replit Link](https://replit.com/@manthanank/Alert-box-in-JavaScript#index.html)

[Back to Top⤴️](#table-of-contents)

Confirm Box

`window.confirm("sometext");`

```javascript
function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Confirm Box</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Confirm Box</h1>
    </nav>
    <main>
      <button onclick="myFunction()">Try it</button>
      <p id="demo"></p>
    </main>
  </body>
</html>
```

[Replit Link](https://replit.com/@manthanank/Confirm-Box-in-JavaScript#index.html)

[Back to Top⤴️](#table-of-contents)

Prompt Box

`window.prompt("sometext","defaultText");`

```javascript
function myFunction() {
  let text;
  let person = prompt('Please enter your name:', 'Harry Potter');
  if (person == null || person == '') {
    text = 'User cancelled the prompt.';
  } else {
    text = 'Hello ' + person + '! How are you today?';
  }
  document.getElementById('demo').innerHTML = text;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Prompt Box</h1>
    </nav>
    <main>
      <button onclick="myFunction()">Try it</button>

      <p id="demo"></p>
    </main>
  </body>
</html>
```

[Replit Link](https://replit.com/@manthanank/Prompt-Box#index.html)

[Back to Top⤴️](#table-of-contents)

Line Breaks

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <h1>Line Breaks</h1>
    </nav>
    <main>
      <button onclick="alert('Hello\nHow are you?')">Try it</button>
    </main>
  </body>
</html>
```

[Replit Link](https://replit.com/@manthanank/Line-Breaks-in-JavaScript#index.html)

[Back to Top⤴️](#table-of-contents)

**Timing Events** -

**setTimeout(function, milliseconds)** - Executes a function, after waiting a specified number of milliseconds.

Syntax : `window.setTimeout(function, milliseconds);`

```javascript
setTimeout(() => {
  console.log("Hello World!");
}, 5000);
```

**setInterval(function, milliseconds)** - Same as setTimeout(), but repeats the execution of the function continuously.

Syntax : `window.setInterval(function, milliseconds);`

```javascript
setInterval(() => {
  console.log("Hello World!");
}, 5000);
```

[Back to Top⤴️](#table-of-contents)

**Cookies** - Cookies are data, stored in small text files, on your computer.

Create a Cookie with JavaScript

```javascript
document.cookie = "username=Manthan Ank";

//with an expiry date(in UTC Time)
document.cookie = "username=Manthan Ank; expires=Sat, 28 Jan 2023 12:00:00 UTC";

//with path parameter
document.cookie = "username=Manthan Ank; expires=Sat, 28 Jan 2023 12:00:00 UTC; path=/";
```

Read a Cookie with JavaScript

```javascript
let x = document.cookie;
console.log(x);
```

Change a Cookie with JavaScript

```javascript
document.cookie = "username=Manthan Ankolekar; expires=Sat, 28 Jan 2023 12:00:00 UTC; path=/";
```

Delete a Cookie with JavaScript

```javascript
document.cookie = "username=; expires=Sat, 28 Jan 2023 12:00:00 UTC; path=/;";
```

[Back to Top⤴️](#table-of-contents)

## Web API

Web API is an application programming interface for the Web. It defines the structure of web services and allows different software applications to communicate with each other over the web.

`API` - Application Programming Interface.

**Forms API** -

**Constraint Validation DOM Methods** -

`checkValidity()` - Returns true if an input element contains valid data.

```html
<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p id="demo"></p>
```

```javascript
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}
```

`setCustomValidity()` - Sets the validationMessage property of an input element.

```javascript
document.getElementById("id1").setCustomValidity("Input not valid");
```

[Back to Top⤴️](#table-of-contents)

**Constraint Validation DOM Properties** -

`validity` - Contains boolean properties related to the validity of an input element.

```javascript
document.getElementById("id1").validity.rangeOverflow;
```

`validationMessage` - Contains the message a browser will display when the validity is false.

```javascript
document.getElementById("id1").validationMessage;
```

`willValidate` - Indicates if an input element will be validated.

```javascript
document.getElementById("id1").willValidate;
```

[Back to Top⤴️](#table-of-contents)

**Validity Properties** -

`customError` - Set to true, if a custom validity message is set.

```javascript
document.getElementById("id1").validity.customError;
```

`patternMismatch` - Set to true, if an element's value does not match its pattern attribute.

```javascript
document.getElementById("id1").validity.patternMismatch;
```

`rangeOverflow` - Set to true, if an element's value is greater than its max attribute.

```html
<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>
```

```jsx
function myFunction() {
  let text = "Value OK";
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  }
}
```

[Back to Top⤴️](#table-of-contents)

`rangeUnderflow` - Set to true, if an element's value is less than its min attribute.

```html
<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>
```

```jsx
function myFunction() {
  let text = "Value OK";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    text = "Value too small";
  }
}
```

`stepMismatch` - Set to true, if an element's value is invalid per its step attribute.

```javascript
document.getElementById("id1").validity.stepMismatch;
```

`tooLong` - Set to true, if an element's value exceeds its maxLength attribute.

```javascript
document.getElementById("id1").validity.tooLong;
```

[Back to Top⤴️](#table-of-contents)

`typeMismatch` - Set to true, if an element's value is invalid per its type attribute.

```javascript
document.getElementById("id1").validity.typeMismatch;
```

`valueMissing` - Set to true, if an element (with a required attribute) has no value.

```javascript
document.getElementById("id1").validity.valueMissing;
```

`valid` - Set to true, if an element's value is valid.

```javascript
document.getElementById("id1").validity.valid;
```

[Back to Top⤴️](#table-of-contents)

**History API** -

Web History API provides easy methods to access the windows.history object.

`History back()` Method

```javascript
function myFunction() {
  window.history.back();
}
```

`History go()` Method

```javascript
function myFunction() {
  window.history.go(-2);
}
```

[Back to Top⤴️](#table-of-contents)

**History Object Properties** -

`length` - Returns the number of URLs in the history list

```javascript
history.length
```

**History Object Methods** -

`back()` - Loads the previous URL in the history list

```javascript
history.back()
```

`forward()` - Loads the next URL in the history list

```javascript
history.forward()
```

`go()` - Loads a specific URL from the history list

```javascript
history.go()
```

[Back to Top⤴️](#table-of-contents)

**Storage API** -

Web Storage API is a simple syntax for storing and retrieving data in the browser.

The localStorage Object -

The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.

setItem() Method

```javascript
localStorage.setItem("name", "Manthan Ankolekar");
```

getItem() Method

```javascript
localStorage.getItem("name", "Manthan Ankolekar");
```

[Back to Top⤴️](#table-of-contents)

sessionStorage Object -

The sessionStorage object is identical to the localStorage object. The difference is that the sessionStorage object stores data for one session.

getItem() Method

```javascript
sessionStorage.getItem("name");
```

setItem() Method

```javascript
sessionStorage.setItem("name", "Manthan Ankolekar");
```

Storage Object Properties and Methods

key(n) - Returns the name of the nth key in the storage

```jsx
localStorage.key(index)
sessionStorage.key(index)
```

length - Returns the number of data items stored in the Storage object

```jsx
localStorage.length;
sessionStorage.length;
```

[Back to Top⤴️](#table-of-contents)

getItem(keyname) - Returns the value of the specified key name

```jsx
localStorage.getItem(keyname)
sessionStorage.getItem(keyname)
```

setItem(keyname, value) - Adds a key to the storage, or updates a key value (if it already exists)

```jsx
localStorage.setItem(keyname, value)
sessionStorage.setItem(keyname, value)
```

removeItem(keyname)- Removes that key from the storage

```jsx
localStorage.removeItem(keyname)
sessionStorage.removeItem(keyname)
```

clear() - Empty all key out of the storage

```jsx
localStorage.clear()
sessionStorage.clear()
```

[Back to Top⤴️](#table-of-contents)

Related Pages for Web Storage API

window.localStorage - Allows to save key/value pairs in a web browser. Stores the data with no expiration date

```jsx
window.localStorage

localStorage
```

window.sessionStorage - Allows to save key/value pairs in a web browser. Stores the data for one session

```jsx
window.sessionStorage

sessionStorage
```

[Back to Top⤴️](#table-of-contents)

**Worker API** -

A web worker is a JavaScript running in the background, without affecting the performance of the page.

**Fetch API** -

The Fetch API interface allows web browser to make HTTP requests to web servers.

```javascript
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
```

**GeoLocation API** -

The HTML Geolocation API is used to get the geographical position of a user.

```javascript
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
```

[Back to Top⤴️](#table-of-contents)

## AJAX

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create asynchronous web applications. It allows you to update parts of a web page without reloading the entire page. Originally, XML (eXtensible Markup Language) was commonly used for data exchange, but modern AJAX implementations often use JSON (JavaScript Object Notation) for data interchange due to its lighter syntax.

**XMLHttp** - The XMLHttpRequest object is used to interact with servers asynchronously. Here's an example of creating an XMLHttpRequest object

```javascript
let xhttp = new XMLHttpRequest();
```

**Request** - To make a request to a server, you'll typically use methods like open() and send()

```javascript
xhttp.open('GET', 'https://api.example.com/data', true); // Method, URL, async (true or false)
xhttp.send(); // Send the request
```

You can also send data along with the request by passing parameters within the send() method.

[Back to Top⤴️](#table-of-contents)

**Response** - Handling the response from the server can be done using event listeners like onreadystatechange and checking for the readyState and status of the request

```javascript
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Handle successful response
    console.log(this.responseText); // Response data
  } else {
    // Handle errors
    console.error('There was a problem with the request.');
  }
};
```

**XML File** - If you are working with an XML file, you can parse the response using methods like responseXML to access the XML data

```javascript
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let xmlDoc = this.responseXML;
    // Process xmlDoc for XML data
    console.log(xmlDoc);
  }
};
```

[Back to Top⤴️](#table-of-contents)

## JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. JSON is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.

### JSON Methods

There are two methods in JSON

- `JSON.parse()`
- `JSON.stringify()`

parse() - Parses a JSON string and returns a JavaScript object

stringify() - Convert a JavaScript object to a JSON string

Data Types

- a string
- a number
- an object (containing valid JSON values)
- an array
- a boolean
- null

[Back to Top⤴️](#table-of-contents)

**String:**

```javascript
const str = "Hello, World!";
```

**Number:**

```javascript
const num = 42;
```

**Object:**

```javascript
const obj = {
  name: "John",
  age: 30,
  city: "New York"
};
```

**Array:**

```javascript
const arr = [1, 2, 3, 4, 5];
```

**Boolean:**

```javascript
const bool = true;
```

**Null:**

```javascript
const nullValue = null;
```

[Back to Top⤴️](#table-of-contents)

**Parse** - The parse() method is used to parse a JSON string and convert it into a JavaScript object.

```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'John', age: 30 }
```

**Stringify** - The stringify() method is used to convert a JavaScript object into a JSON string.

```javascript
const jsonObject = { name: 'John', age: 30 };
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // Output: '{"name":"John","age":30}'
```

**Objects** - Objects in JSON are key-value pairs enclosed in curly braces {}.

```javascript
const person = {
  "name": "Alice",
  "age": 30,
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
};
```

[Back to Top⤴️](#table-of-contents)

**Arrays** - Arrays in JSON are ordered lists of values enclosed in square brackets [].

```javascript
const colors = ["Red", "Green", "Blue"];
```

## JQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.

Selectors

```javascript
$("p")
$(".test")
$("#test")
```

[Back to Top⤴️](#table-of-contents)

## Graphics

**Canvas** - The HTML `<canvas>` element is used to draw graphics, on the fly, via JavaScript.

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
```

**Plotly** - Plotly is a charting library for JavaScript. It is used to create interactive charts in web applications.

```javascript
const data = [
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16],
    type: 'scatter'
  }
];
Plotly.newPlot('myDiv', data);
```

[Back to Top⤴️](#table-of-contents)

**Chart.js** - Chart.js is a simple yet flexible JavaScript charting library for designers & developers.

```javascript
const ctx = document.getElementById('myChart').getContext('2d');
```

**Google Chart** - Google Charts provides a perfect way to visualize data on your website. From simple line charts to complex hierarchical tree maps, the chart gallery provides a large number of ready-to-use chart types.

```javascript
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);
```

[Back to Top⤴️](#table-of-contents)

**D3.js** - D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers.

```javascript
const svg = d3.select("body").append("svg")
  .attr("width", 960)
  .attr("height", 500);

svg.append("circle")
  .attr("cx", 480)
  .attr("cy", 250)
  .attr("r", 240)
  .style("fill", "purple");

svg.append("text")
  .attr("x", 480)
  .attr("y", 250)
  .attr("text-anchor", "middle")
  .attr("dy", ".3em")
  .text("Hello, D3.js!");
```

[Back to Top⤴️](#table-of-contents)

---

## 6. Stage 6: Performance Optimization & Enterprise Patterns

## Best Practices

Avoid Global Variables - Avoid using global variables in JavaScript.

```javascript
// Bad
var name = "Alice";

// Good
const name = "Alice";
```

Avoid Declare Local Variables - Avoid declaring local variables without using the `var`, `let`, or `const` keyword.

```javascript
// Bad
name = "Alice";

// Good
const name = "Alice";
```

Declarations on Top - Declare all variables at the beginning of every script or function.

```javascript
// Bad
function myFunction() {
  console.log("Hello, World!");
  var name = "Alice";
}

// Good
function myFunction() {
  var name = "Alice";
  console.log("Hello, World!");
}
```

[Back to Top⤴️](#table-of-contents)

Intialize Variables - Always initialize variables when you declare them.

```javascript
// Bad
let name;

// Good
let name = "Alice";
```

Declare Objects with const - Use `const` to declare objects.

```javascript
// Bad
let person = {
  name: "Alice",
  age: 30
};

// Good
const person = {
  name: "Alice",
  age: 30
};
```

Declare Arrays with const - Use `const` to declare arrays.

```javascript
// Bad
let colors = ["Red", "Green", "Blue"];

// Good
const colors = ["Red", "Green", "Blue"];
```

[Back to Top⤴️](#table-of-contents)

Don't Use new Objects - Avoid using the `new` keyword to create objects.

```javascript
// Bad
let person = new Object();

// Good
let person = {};
```

Beware of Automatic Type Conversions - Be aware of automatic type conversions in JavaScript.

```javascript
console.log(10 + "20"); // Output: "1020"
```

Use === Comparison - Use the `===` operator to compare values and data types.

```javascript
console.log(10 === "10"); // Output: false
```

[Back to Top⤴️](#table-of-contents)

Use Parameter Defaults - Use parameter defaults to assign default values to function parameters.

```javascript
function greet(name = "Alice") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: "Hello, Alice!"
```

End Your Switches with Defaults - Always end your `switch` statements with a `default` case.

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}

console.log(day);
```

[Back to Top⤴️](#table-of-contents)

Avoid Number, String, and Boolean as Objects - Avoid using `Number`, `String`, or `Boolean` objects.

```javascript
// Bad
let x = new Number(500);

// Good
let x = 500;
```

Avoid Using eval() - Avoid using the `eval()` function in JavaScript.

```javascript
// Bad
let x = eval("10 * 20");

// Good
let x = 10 * 20;
```

[Back to Top⤴️](#table-of-contents)

## Common Mistakes

Accidentally Using the Assignment Operator - Be careful when using the assignment operator `=` instead of the equality operator `==` or `===`.

```javascript
let x = 10;

if (x = 10) {
  console.log("Hello, World!");
}

// Output: "Hello, World!"
```

Expecting Loose Comparison - Be aware of the differences between loose and strict comparison in JavaScript.

```javascript
console.log(10 == "10"); // Output: true
```

Confusing Addition & Concatenation - Be careful when adding numbers and strings in JavaScript.

```javascript
console.log(10 + 20); // Output: 30
```

Misundering Floats - Be aware of floating-point arithmetic in JavaScript.

```javascript
console.log(0.1 + 0.2); // Output: 0.30000000000000004
```

[Back to Top⤴️](#table-of-contents)

Breaking a JavaScript String - Be careful when breaking a string into multiple lines.

```javascript
let text = "Hello \ World!";

console.log(text); // Output: "Hello  World!"
```

Misplacing semicolon - Be careful when misplacing semicolons in JavaScript.

```javascript
let x = 10
let y = 20

console.log(x + y); // Output: 30
```

Breaking a Return Statement - Be careful when breaking a return statement into multiple lines.

```javascript
function myFunction() {
  return
  "Hello, World!";
}

console.log(myFunction()); // Output: undefined
```

[Back to Top⤴️](#table-of-contents)

Accessing Arrays with Named Indexes - Be careful when accessing arrays with named indexes.

```javascript
let person = [];
person["name"] = "Alice";
person["age"] = 30;

console.log(person); // Output: []
```

Ending Definition with a Comma - Be careful when ending object definitions with a comma.

```javascript
let person = {
  name: "Alice",
  age: 30,
};

console.log(person); // Output: { name: 'Alice', age: 30 }
```

Undefined is Not Null - Be aware of the difference between `undefined` and `null` in JavaScript.

```javascript
let x;

console.log(x); // Output: undefined
```

[Back to Top⤴️](#table-of-contents)

## Performance

Reduce Activity in Loops - Avoid unnecessary activity inside loops.

```javascript
// Bad
for (let i = 0; i < 1000; i++) {
  console.log("Hello, World!");
}

// Good
for (let i = 0; i < 1000; i++) {
  // Do nothing
}
```

Reduce DOM Access - Minimize DOM access in JavaScript.

```javascript
// Bad
document.getElementById("demo").innerHTML = "Hello, World!";

// Good
let element = document.getElementById("demo");
element.innerHTML = "Hello, World!";
```

[Back to Top⤴️](#table-of-contents)

Reduce DOM Size - Minimize the size of the DOM.

```javascript
// Bad
for (let i = 0; i < 1000; i++) {
  document.body.innerHTML += "Hello, World!";
}

// Good
let text = "";
for (let i = 0; i < 1000; i++) {
  text += "Hello, World!";
}
```

Avoid Unnecessary Variables - Avoid unnecessary variables in JavaScript.

```javascript
// Bad
let x = 10;
let y = 20;
let z = x + y;

// Good
let z = 10 + 20;
```

[Back to Top⤴️](#table-of-contents)

Delay Javascript Loading - Load JavaScript files at the end of the body tag.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Delay JavaScript Loading</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>
```

Avoid Using with - Avoid using the `with` statement in JavaScript.

```javascript
// Bad
with (document) {
  let text = "Hello, World!";
  console.log(text);
}

// Good
let text = "Hello, World!";
console.log(text);
```

[Back to Top⤴️](#table-of-contents)

## ES6 Features

The let keyword - The `let` keyword allows you to declare block-scoped variables.

```javascript
let x = 10;

if (x === 10) {
  let y = 20;
  console.log(x + y); // Output: 30
}

console.log(x + y); // Error: y is not defined
```

The const keyword - The `const` keyword allows you to declare constants in JavaScript.

```javascript
const PI = 3.14159;
PI = 3.14; // Error: Assignment to constant variable

console.log(PI); // Output: 3.14159
```

[Back to Top⤴️](#table-of-contents)

Arrow Functions - Arrow functions provide a more concise syntax for writing function expressions.

```javascript
const add = (x, y) => x + y;

console.log(add(10, 20)); // Output: 30
```

The ... Operator - The `...` operator allows you to spread elements of an array or object.

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

[Back to Top⤴️](#table-of-contents)

For/of Loop - The `for...of` loop allows you to iterate over the values of an iterable object.

```javascript
const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
  console.log(color);
}

// Output: Red, Green, Blue
```

Map Objects - The `Map` object allows you to store key-value pairs.

```javascript
const map = new Map();

map.set("name", "Alice");

console.log(map.get("name")); // Output: Alice
```

[Back to Top⤴️](#table-of-contents)

Set Objects - The `Set` object allows you to store unique values of any type.

```javascript
const set = new Set();

set.add(1);

console.log(set.has(1)); // Output: true
```

Classes - Classes provide a more concise syntax for creating objects and dealing with inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("Alice", 30);

person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

[Back to Top⤴️](#table-of-contents)

Promises - Promises provide a more flexible way to handle asynchronous operations in JavaScript.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

promise.then((value) => {
  console.log(value); // Output: Hello, World!
});
```

Symbol - The `Symbol` object allows you to create unique values that can be used as object properties.

```javascript
const key = Symbol("key");

const obj = {};

obj[key] = "value";

console.log(obj[key]); // Output: value
```

[Back to Top⤴️](#table-of-contents)

Default Parameters - Default parameters allow you to specify default values for function parameters.

```javascript
function greet(name = "Alice") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Alice!
```

Function Rest Parameter - The rest parameter allows you to pass an indefinite number of arguments to a function.

```javascript
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

String.includes() - The `includes()` method allows you to check if a string contains a specific substring.

```javascript
const str = "Hello, World!";

console.log(str.includes("World")); // Output: true
```

[Back to Top⤴️](#table-of-contents)

String.startsWith() - The `startsWith()` method allows you to check if a string starts with a specific substring.

```javascript
const str = "Hello, World!";

console.log(str.startsWith("Hello")); // Output: true
```

String.endsWith() - The `endsWith()` method allows you to check if a string ends with a specific substring.

```javascript
const str = "Hello, World!";
console.log(str.endsWith("World!")); // Output: true
```

Array.from() - The `from()` method allows you to create an array from an array-like or iterable object.

```javascript
const arr = Array.from("Hello");

console.log(arr); // Output: ["H", "e", "l", "l", "o"]
```

[Back to Top⤴️](#table-of-contents)

Array keys() - The `keys()` method returns an array iterator that contains the keys for each index in the array.

```javascript
const arr = ["a", "b", "c"];

const iterator = arr.keys();

for (const key of iterator) {
  console.log(key); // Output: 0, 1, 2
}
```

Array find() - The `find()` method returns the first element in an array that satisfies a provided condition.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.find((x) => x > 3);

console.log(result); // Output: 4
```

Array findIndex() - The `findIndex()` method returns the index of the first element in an array that satisfies a provided condition.

```javascript
const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex((x) => x > 3);

console.log(index); // Output: 3
```

[Back to Top⤴️](#table-of-contents)

New Math Methods - The `Math` object in JavaScript provides several new methods in ES6.

```javascript
console.log(Math.cbrt(27)); // Output: 3
```

New Number Properties - The `Number` object in JavaScript provides several new properties in ES6.

```javascript
console.log(Number.EPSILON); // Output: 2.220446049250313e-16
```

New Number Methods - The `Number` object in JavaScript provides several new methods in ES6.

```javascript
console.log(Number.isInteger(10)); // Output: true
```

New Global Methods - The global object in JavaScript provides several new methods in ES6.

```javascript
console.log(isFinite(10)); // Output: true
```

[Back to Top⤴️](#table-of-contents)

Object entries - The `Object.entries()` method returns an array of a given object's own enumerable property `[key, value]` pairs.

```javascript
const obj = { name: "Alice", age: 30 };

const entries = Object.entries(obj);

console.log(entries); // Output: [["name", "Alice"], ["age", 30]]
```

JavaScript Modules - JavaScript modules allow you to split your code into multiple files and import/export functionality between them.

```javascript
// math.js
export const add = (x, y) => x + y;

// main.js
import { add } from "./math.js";

console.log(add(10, 20)); // Output: 30
```

[Back to Top⤴️](#table-of-contents)

## ES5 Features

"use strict" - The `"use strict"` directive is used to enable strict mode in JavaScript.

```javascript
"use strict";
```

String[number] access - You can access characters in a string using array-like syntax.

```javascript
const str = "Hello, World!";

console.log(str[0]); // Output: H
```

Multiline strings - You can create multiline strings in JavaScript using backticks.

```javascript
const str = `Hello, 
World!`;

console.log(str); // Output: Hello,
                  //         World!
```

[Back to Top⤴️](#table-of-contents)

String.trim() - The `trim()` method removes whitespace from both ends of a string.

```javascript
const str = "  Hello, World!  ";

console.log(str.trim()); // Output: "Hello, World!"
```

Array.isArray() - The `isArray()` method checks if a value is an array.

```javascript
const arr = [1, 2, 3];

console.log(Array.isArray(arr)); // Output: true
```

Array forEach() - The `forEach()` method executes a provided function once for each array element.

```javascript
const arr = [1, 2, 3];

arr.forEach((x) => console.log(x));

// Output: 1, 2, 3
```

[Back to Top⤴️](#table-of-contents)

Array map() - The `map()` method creates a new array with the results of calling a provided function on every element in the array.

```javascript
const arr = [1, 2, 3];

const result = arr.map((x) => x * 2);

console.log(result); // Output: [2, 4, 6]
```

Array filter() - The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.filter((x) => x % 2 === 0);

console.log(result); // Output: [2, 4]
```

Array reduce() - The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, val) => acc + val, 0);

console.log(result); // Output: 15
```

[Back to Top⤴️](#table-of-contents)

Array reduceRight() - The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.reduceRight((acc, val) => acc + val, 0);

console.log(result); // Output: 15
```

Array every() - The `every()` method tests whether all elements in the array pass the test implemented by the provided function.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.every((x) => x > 0);

console.log(result); // Output: true
```

Array some() - The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.some((x) => x > 3);

console.log(result); // Output: true
```

[Back to Top⤴️](#table-of-contents)

Array indexOf() - The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
const arr = [1, 2, 3, 4, 5];

const index = arr.indexOf(3);

console.log(index); // Output: 2
```

Array lastIndexOf() - The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present.

```javascript
const arr = [1, 2, 3, 4, 5, 3];

const index = arr.lastIndexOf(3);

console.log(index); // Output: 5
```

JSON.parse() - The `parse()` method parses a JSON string and returns a JavaScript object.

```javascript
const jsonString = '{"name": "Alice", "age": 30}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject); // Output: { name: 'Alice', age: 30 }
```

[Back to Top⤴️](#table-of-contents)

JSON.stringify() - The `stringify()` method converts a JavaScript object to a JSON string.

```javascript
const jsonObject = { name: 'Alice', age: 30 };

const jsonString = JSON.stringify(jsonObject);

console.log(jsonString); // Output: '{"name":"Alice","age":30}'
```

Date.now() - The `now()` method returns the number of milliseconds elapsed since January 1, 1970.

```javascript
const timestamp = Date.now();

console.log(timestamp); // Output: 1633660800000
```

Date toISOString() - The `toISOString()` method returns a string in simplified extended ISO format.

```javascript
const date = new Date();

console.log(date.toISOString()); // Output: "2021-10-08T07:00:00.000Z"
```

Date toJSON() - The `toJSON()` method returns a string representation of the Date object.

```javascript
const date = new Date();

console.log(date.toJSON()); // Output: "2021-10-08T07:00:00.000Z"
```

[Back to Top⤴️](#table-of-contents)

Property getters and setters - Getters and setters allow you to define object properties that behave like methods.

```javascript
const person = {
  firstName: "Alice",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Output: "Alice Smith"
```

Reserved words as property names - You can use reserved words as property names in JavaScript.

```javascript
const person = {
  class: "A",
  function: "greet"
};

console.log(person.class); // Output: "A"
```

Object Methods - The `Object` object provides several methods for working with objects in JavaScript.

```javascript
const obj = { name: "Alice", age: 30 };

const keys = Object.keys(obj);

console.log(keys); // Output: ["name", "age"]
```

[Back to Top⤴️](#table-of-contents)

Object defineProperty() - The `defineProperty()` method defines a new property directly on an object, or modifies an existing property.

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // Output: "Alice"
```

Function bind() - The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

```javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const greet = person.greet.bind(person);

greet(); // Output: "Hello, my name is Alice."
```

Trailing commas - Trailing commas are allowed in JavaScript.

```javascript
const arr = [
  1,
  2,
  3,
];

console.log(arr); // Output: [1, 2, 3]
```

[Back to Top⤴️](#table-of-contents)

## Snippets

Here are a few JavaScript snippets that you might find useful:

1. **Hello World:**

   ```javascript
   console.log("Hello, World!");
   ```

2. **Variable Declaration:**

   ```javascript
   let variableName = "Some value";
   ```

3. **Conditional Statement (if-else):**

   ```javascript
   let condition = true;

   if (condition) {
       console.log("Condition is true");
   } else {
       console.log("Condition is false");
   }
   ```

4. **Loop (for):**

   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   ```

5. **Function Declaration:**

   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }

   greet("John");
   ```

6. **Array Manipulation:**

   ```javascript
   let fruits = ['Apple', 'Banana', 'Orange'];

   // Add an element to the end
   fruits.push('Mango');

   // Remove the last element
   fruits.pop();

   // Access elements by index
   console.log(fruits[1]);
   ```

7. **Object Declaration:**

   ```javascript
   let person = {
       name: 'John',
       age: 25,
       profession: 'Developer'
   };

   // Accessing object properties
   console.log(person.name);
   ```

8. **Async/Await:**

   ```javascript
   async function fetchData() {
       try {
           let response = await fetch('https://api.example.com/data');
           let data = await response.json();
           console.log(data);
       } catch (error) {
           console.error('Error fetching data:', error);
       }
   }

   fetchData();
   ```

9. **Event Handling:**

   ```javascript
   let button = document.getElementById('myButton');

   button.addEventListener('click', function() {
       console.log('Button clicked!');
   });
   ```

10. **LocalStorage:**

    ```javascript
    // Save data to local storage
    localStorage.setItem('username', 'JohnDoe');

    // Retrieve data from local storage
    let storedUsername = localStorage.getItem('username');
    console.log('Username:', storedUsername);
    ```

11. **Error Handling:**

    ```javascript
    try {
        // Code that may throw an error
        throw new Error('Something went wrong');
    } catch (error) {
        console.error('Error:', error.message);
    }
    ```

12. **Regular Expression:**

    ```javascript
    let pattern = /hello/i; // Case-insensitive match for 'hello'

    let text = 'Hello, World!';
    let result = pattern.test(text);

    console.log(result); // Output: true
    ```

13. **Math Operations:**

    ```javascript
    let x = 10;

    console.log(Math.sqrt(x)); // Square root

    console.log(Math.pow(x, 2)); // x raised to the power of 2

    console.log(Math.random()); // Random number between 0 and 1
    ```

14. **Date and Time:**

    ```javascript
    let date = new Date();

    console.log(date.toDateString()); // Date in human-readable format

    console.log(date.getHours()); // Current hour
    ```

15. **Set Timeout:**

    ```javascript
    setTimeout(function() {
        console.log('Timeout completed');
    }, 2000); // 2 seconds
    ```

16. **Set Interval:**

    ```javascript
    let counter = 0;

    let interval = setInterval(function() {
        console.log('Counter:', counter);
        counter++;

        if (counter === 5) {
            clearInterval(interval);
        }
    }, 1000); // Every 1 second
    ```

17. **Fetch API:**

    ```javascript
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
    ```

18. **Arrow Functions:**

    ```javascript
    let add = (x, y) => x + y;

    console.log(add(5, 3)); // Output: 8
    ```

19. **Template Literals:**

    ```javascript
    let name = 'Alice';
    let greeting = `Hello, ${name}!`;

    console.log(greeting); // Output: Hello, Alice!
    ```

20. **Destructuring Assignment:**

    ```javascript
    let person = { name: 'John', age: 30 };

    let { name, age } = person;

    console.log(name, age); // Output: John 30
    ```

21. **Spread Operator:**

    ```javascript
    let numbers = [1, 2, 3];
    let newNumbers = [...numbers, 4, 5];

    console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
    ```

22. **Promise:**

    ```javascript
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 2000);
    });

    promise.then(result => console.log(result));
    ```

23. **Map Function:**

    ```javascript
    let numbers = [1, 2, 3, 4, 5];

    let squaredNumbers = numbers.map(num => num * num);

    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
    ```

24. **Filter Function:**

    ```javascript
    let numbers = [1, 2, 3, 4, 5];

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log(evenNumbers); // Output: [2, 4]
    ```

25. **Reduce Function:**

    ```javascript
    let numbers = [1, 2, 3, 4, 5];

    let sum = numbers.reduce((acc, num) => acc + num, 0);

    console.log(sum); // Output: 15
    ```

26. **Find Function:**

    ```javascript
    let numbers = [1, 2, 3, 4, 5];

    let foundNumber = numbers.find(num => num > 3);

    console.log(foundNumber); // Output: 4
    ```

[Back to Top⤴️](#table-of-contents)

## Short Hands

JavaScript offers several shorthand techniques to write code more concisely and improve readability. Here are some common JavaScript shorthand techniques:

1. **Ternary Operator:**

   Instead of using an `if-else` statement, you can use the ternary operator for concise conditional expressions.

   ```javascript
   // Long form
   let result;
   if (condition) {
       result = 'true';
   } else {
       result = 'false';
   }

   // Shorthand
   let result = condition ? 'true' : 'false';
   ```

2. **Nullish Coalescing Operator (`??`):**

   This operator provides a concise way to provide a default value if a variable is null or undefined.

   ```javascript
   // Long form
   let value;
   if (value !== null && value !== undefined) {
       result = value;
   } else {
       result = 'default';
   }

   // Shorthand
   let result = value ?? 'default';
   ```

3. **Arrow Functions:**

   Arrow functions provide a concise syntax for writing function expressions.

   ```javascript
   // Long form
   function add(x, y) {
       return x + y;
   }

   // Shorthand
   const add = (x, y) => x + y;
   ```

4. **Template Literals:**

   Template literals make it easier to concatenate strings and include variables within strings.

   ```javascript
   // Long form
   const greeting = 'Hello, ' + name + '!';

   // Shorthand
   const greeting = `Hello, ${name}!`;
   ```

5. **Object Property Shorthand:**

   When creating an object with properties that have the same name as the variables being assigned, you can use shorthand notation.

   ```javascript
   // Long form
   const name = 'John';
   const age = 30;
   const user = {
       name: name,
       age: age
   };

   // Shorthand
   const user = {
       name,
       age
   };
   ```

6. **Destructuring Assignment:**

   Destructuring allows you to extract values from arrays or objects and assign them to variables in a concise way.

   ```javascript
   // Long form
   const person = { name: 'John', age: 30 };
   const name = person.name;
   const age = person.age;

   // Shorthand
   const { name, age } = { name: 'John', age: 30 };
   ```

7. **Default Parameters:**

    Default parameters allow you to specify default values for function parameters.
  
    ```javascript
    // Long form
    function greet(name) {
        if (name === undefined) {
            name = 'World';
        }
        console.log('Hello, ' + name + '!');
    }
  
    // Shorthand
    function greet(name = 'World') {
        console.log('Hello, ' + name + '!');
    }
    ```

8. **Array and Object Spread:**

    The spread operator (`...`) allows you to spread the elements of an array or object into another array or object.

    ```javascript
    // Long form
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5];

    // Shorthand
    const newNumbers = [...numbers, 4, 5];
    ```

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };

    const updatedPerson = {
        name: person.name,
        age: person.age,
        profession: 'Developer
    };

    // Shorthand
    const updatedPerson = { ...person, profession: 'Developer };
    ```

9. **Array Destructuring:**

    Array destructuring allows you to extract values from arrays and assign them to variables in a concise way.

    ```javascript
    // Long form
    const numbers = [1, 2, 3];
    const first = numbers[0];
    const second = numbers[1];

    // Shorthand
    const [first, second] = [1, 2, 3];
    ```

10. **Object Destructuring:**

    Object destructuring allows you to extract values from objects and assign them to variables in a concise way.

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };
    const name = person.name;
    const age = person.age;

    // Shorthand
    const { name, age } = { name: 'John', age: 30 };
    ```

11. **Short-Circuit Evaluation:**

    Short-circuit evaluation allows you to write concise conditional expressions using logical operators.

    ```javascript
    // Long form
    let result;
    if (condition) {
        result = value;
    } else {
        result = 'default';
    }

    // Shorthand
    let result = condition && value || 'default';
    ```

    ```javascript
    // Long form
    let result;
    if (condition) {
        result = 'true';
    } else {
        result = 'false';
    }

    // Shorthand
    let result = condition ? 'true' : 'false';
    ```

    ```javascript
    // Long form
    let result;

    if (value !== null && value !== undefined) {
        result = value;
    } else {
        result = 'default';
    }

    // Shorthand
    let result = value ?? 'default';
    ```

12. **Logical Assignment Operators:**

    Logical assignment operators provide a concise way to update a variable based on a condition.

    ```javascript
    // Long form
    let count = 0;
    if (count === 0) {
        count = 1;
    }

    // Shorthand
    let count = 0;
    count ||= 1;
    ```

    ```javascript
    // Long form
    let count = 0;
    if (count === 0) {
        count += 1;
    }

    // Shorthand
    let count = 0;
    count += 1;
    ```

13. **Optional Chaining:**

    Optional chaining allows you to access nested properties of an object without having to check for the existence of each property.

    ```javascript
    // Long form
    let result;
    if (data && data.user && data.user.name) {
        result = data.user.name;
    } else {
        result = 'Unknown';
    }

    // Shorthand
    let result = data?.user?.name ?? 'Unknown';
    ```

14. **Promise Chaining:**

    Promise chaining allows you to chain multiple asynchronous operations in a concise way.

    ```javascript
    // Long form
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return fetch('https://api.example.com/other-data');
        })
        .then(response => response.json())
        .then(otherData => console.log(otherData))
        .catch(error => console.error('Error:', error));

    // Shorthand
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => fetch('https://api.example.com/other-data'))
        .then(response => response.json())
        .then(otherData => console.log(otherData))
        .catch(error => console.error('Error:', error));
    ```

15. **Async/Await:**

    Async/await provides a more concise way to work with asynchronous code compared to promises.

    ```javascript
    // Long form
    function fetchData() {
        return fetch('https://api.example.com/data')
            .then(response => response.json());
    }

    fetchData()
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    // Shorthand
    async function fetchData() {
        try {
            let response = await fetch('https://api.example.com/data');
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fetchData();
    ```

16. **Array Methods:**

    JavaScript array methods provide a concise way to perform common operations on arrays.

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(num => num * num);

    // Shorthand
    const squaredNumbers = [1, 2, 3, 4, 5].map(num => num * num);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Shorthand
    const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Shorthand
    const sum = [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const foundNumber = numbers.find(num => num > 3);

    // Shorthand
    const foundNumber = [1, 2, 3, 4, 5].find(num => num > 3);
    ```

17. **Object Methods:**

    JavaScript object methods provide a concise way to perform common operations on objects.

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };
    const keys = Object.keys(person);

    // Shorthand
    const keys = Object.keys({ name: 'John', age: 30 });
    ```

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };
    const values = Object.values(person);

    // Shorthand
    const values = Object.values({ name: 'John', age: 30 });
    ```

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };
    const entries = Object.entries(person);

    // Shorthand
    const entries = Object.entries({ name: 'John', age: 30 });
    ```

    ```javascript
    // Long form
    const person = { name: 'John', age: 30 };
    const copy = Object.assign({}, person);

    // Shorthand
    const copy = { ...{ name: 'John', age: 30 } };
    ```

18. **Function Methods:**

    JavaScript function methods provide a concise way to work with functions.

    ```javascript
    // Long form
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    // Shorthand
    const greet = name => console.log('Hello, ' + name + '!');
    ```

    ```javascript
    // Long form
    function add(x, y) {
        return x + y;
    }

    // Shorthand
    const add = (x, y) => x + y;
    ```

    ```javascript
    // Long form
    function multiply(x, y) {
        return x * y;
    }

    // Shorthand
    const multiply = (x, y) => x * y;
    ```

    ```javascript
    // Long form
    function divide(x, y) {
        return x / y;
    }

    // Shorthand
    const divide = (x, y) => x / y;
    ```

19. **String Methods:**

    JavaScript string methods provide a concise way to work with strings.

    ```javascript
    // Long form
    const text = 'Hello, World!';
    const trimmedText = text.trim();

    // Shorthand
    const trimmedText = '  Hello, World!  '.trim();
    ```

    ```javascript
    // Long form
    const text = 'Hello, World!';
    const uppercaseText = text.toUpperCase();

    // Shorthand
    const uppercaseText = 'Hello, World!'.toUpperCase();
    ```

    ```javascript
    // Long form
    const text = 'Hello, World!';
    const lowercaseText = text.toLowerCase();

    // Shorthand
    const lowercaseText = 'Hello, World!'.toLowerCase();
    ```

    ```javascript
    // Long form
    const text = 'Hello, World!';
    const length = text.length;

    // Shorthand
    const length = 'Hello, World!'.length;
    ```

20. **Number Methods:**

    JavaScript number methods provide a concise way to work with numbers.

    ```javascript
    // Long form
    const number = 3.14159;
    const roundedNumber = Math.round(number);

    // Shorthand
    const roundedNumber = Math.round(3.14159);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const squaredNumber = Math.pow(number, 2);

    // Shorthand
    const squaredNumber = Math.pow(3.14159, 2);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const squareRoot = Math.sqrt(number);

    // Shorthand
    const squareRoot = Math.sqrt(3.14159);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const absoluteValue = Math.abs(number);

    // Shorthand
    const absoluteValue = Math.abs(3.14159);
    ```

21. **Date Methods:**

    JavaScript date methods provide a concise way to work with dates.

    ```javascript
    // Long form
    const date = new Date();
    const day = date.getDate();

    // Shorthand
    const day = new Date().getDate();
    ```

    ```javascript
    // Long form
    const date = new Date();
    const month = date.getMonth();

    // Shorthand
    const month = new Date().getMonth();
    ```

    ```javascript
    // Long form
    const date = new Date();
    const year = date.getFullYear();

    // Shorthand
    const year = new Date().getFullYear();
    ```

    ```javascript
    // Long form
    const date = new Date();
    const hours = date.getHours();

    // Shorthand
    const hours = new Date().getHours();
    ```

22. **Math Methods:**

    JavaScript math methods provide a concise way to perform mathematical operations.

    ```javascript
    // Long form
    const number = 3.14159;
    const roundedNumber = Math.round(number);

    // Shorthand
    const roundedNumber = Math.round(3.14159);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const squaredNumber = Math.pow(number, 2);

    // Shorthand
    const squaredNumber = Math.pow(3.14159, 2);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const squareRoot = Math.sqrt(number);

    // Shorthand
    const squareRoot = Math.sqrt(3.14159);
    ```

    ```javascript
    // Long form
    const number = 3.14159;
    const absoluteValue = Math.abs(number);

    // Shorthand
    const absoluteValue = Math.abs(3.14159);
    ```

23. **Array Methods:**

    JavaScript array methods provide a concise way to perform common operations on arrays.

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(num => num * num);

    // Shorthand
    const squaredNumbers = [1, 2, 3, 4, 5].map(num => num * num);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Shorthand
    const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Shorthand
    const sum = [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0);
    ```

    ```javascript
    // Long form
    const numbers = [1, 2, 3, 4, 5];
    const foundNumber = numbers.find(num => num > 3);

    // Shorthand
    const foundNumber = [1, 2, 3, 4, 5].find(num => num > 3);
    ```

[Back to Top⤴️](#table-of-contents)

---

## 7. Stage 7: Staff JavaScript Architect Interview Handbook & Cheatsheet

## Interview Questions

Sorts an array of numbers without using any built-in method.

```javascript
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(sortArray(numbers)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

Find the maximum number in an array of numbers without using any built-in method.

```javascript
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMax(numbers)); // Output: 9
```

Find the minimum number in an array of numbers without using any built-in method.

```javascript
const findMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMin(numbers)); // Output: 1
```

Find the second largest number from the array given

```javascript
let array = [1, 8, 9, 40, 50];

const secondLar = (arr) => {
    let first = -Infinity;
    let second = -Infinity;    
    for (let i = 0; i < arr.length; i++){

        if( arr[i] > first){
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second === -Infinity ? "No second largest number" : second;
}

console.log(secondLar(array));
```

Remove special characters from the given string without using built-in methods:

```javascript
const input = "MA@NT+H(A+N)";

const remove = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if(
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9') || 
            char === ' '
        ){
            result += char;
        }
    }
    return result;
}

console.log(remove(input)); // Output=MANTHAN
```

Print the given values in matrix form without using built-in methods

```javascript
Output: 
1   4   7   
2   5   8   
3   6   9

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Manually print the matrix
for (let row = 0; row < 3; row++) {
    let output = "";  // Initialize an empty string for each row
    for (let col = 0; col < 3; col++) {
        output += input[row + col * 3] + "   ";  // Calculate index and add spaces
    }
    console.log(output);
}
```

Write a function that calculates the sum of an array of numbers Without Inbuilt Method.

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(sumArray(numbers)); // Output: 44
```

Write a function that calculates the average of an array of numbers Without Inbuilt Method.

```javascript
function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(averageArray(numbers)); // Output: 4
```

[Back to Top⤴️](#table-of-contents)

Write a function that checks if a number is prime Without Inbuilt Method.

```javascript
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
```

Write a function that checks if a number is a palindrome Without Inbuilt Method.

```javascript
function isPalindrome(num) {
  const str = num.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false
```

Write a function that checks if a string is a palindrome Without Inbuilt Method.

```javascript
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('hello')); // Output: false
```

Find duplicate numbers in an array without using any built-in method.

```javascript
const findDuplicates = (arr) => {
  let duplicates = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let isDuplicate = false;
      if (arr[i] === arr[j]) {
        for (let k = 0; k < index; k++) {
          if (duplicates[k] === arr[i]) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          duplicates[index] = arr[i];
          index++;
        }
      }
    }
  }
  return duplicates;
};

let numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
console.log(findDuplicates(numbers)); // Output: [2, 3, 8]
```

[Back to Top⤴️](#table-of-contents)

Remove duplicate numbers in an array without using any built-in method.

```javascript
const removeDuplicates = (arr) => {
  let unique = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < index; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique[index] = arr[i];
      index++;
    }
  }
  return unique;
};

let numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

Reverse a string without using any built-in method.

```javascript
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString('hello')); // Output: 'olleh'
```

Reverse a number without using any built-in method.

```javascript
const reverseNumber = (num) => {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};

console.log(reverseNumber(12345)); // Output: 54321
```

Print only id's from the below array

```jsx
const nameList = [{
  name: 'a',
  id: '1'
},
{
  name: 'b',
  id: '2'
}, {
  name: 'c',
  id: '3'
}]

// solution using built-in method or funtion
const ids = nameList.map(item => item.id);
console.log(ids); // ['1', '2', '3']

// solution using without built-in method or funtion
let ids = [];
for (let i = 0; i < nameList.length; i++) {
  ids[i] = nameList[i].id;
}
console.log(ids); // ['1', '2', '3']
```

[Back to Top⤴️](#table-of-contents)

Print the output as shown below

```jsx
// output
OutPutArray=[{amount:300,name:'a',id:'1'},{amount:300,name:'b',id:'2'},{amount:300,name:'c',id:'3'}]

// solution
const nameList = {
  amount: 300,
  name: [{
    name: 'a',
    id: '1'
  },
  {
    name: 'b',
    id: '2'
  }, {
    name: 'c',
    id: '3'
  }]
}

// solution using built-in method or funtion
const outputArray = nameList.name.map(item => ({ ...item, amount: nameList.amount }));
console.log(outputArray); // [{amount:300,name:'a',id:'1'},{amount:300,name:'b',id:'2'},{amount:300,name:'c',id:'3'}]

// solution using without built-in method or funtion
let outputArray = [];
for (let i = 0; i < nameList.name.length; i++) {
  outputArray[i] = {
    amount: nameList.amount,
    name: nameList.name[i].name,
    id: nameList.name[i].id
  };
}
console.log(outputArray); // [{amount:300,name:'a',id:'1'},{amount:300,name:'b',id:'2'},{amount:300,name:'c',id:'3'}]
```

Print a half pyramid in JavaScript as shown below

```jsx
// output 
// *
// **
// ***

// solution using built-in method or funtion
for (let i = 1; i <= 3; i++) {
  console.log('*'.repeat(i));
}

// solution using without built-in method or funtion
for (let i = 1; i <= 3; i++) {
  let string = '';
  for (let j = 1; j <= i; j++) {
    string += '*';
  }
  console.log(string);
}

// solution using without built-in method or funtion
let string = "";

for (let i = 0; i < 3; i++){
    string += '*';
    console.log(string);
}
```

[Back to Top⤴️](#table-of-contents)

Print a inverted half pyramid in JavaScript as shown below

```jsx
// output 
// ***
// **
// *

// solution using built-in method or funtion
for (let i = 3; i >= 1; i--) {
  console.log('*'.repeat(i));
}

// solution using without built-in method or funtion
for (let i = 3; i >= 1; i--) {
  let string = '';
  for (let j = 1; j <= i; j++) {
    string += '*';
  }
  console.log(string);
}
```

Print the output as shown below

```javascript
// OUTPUT
// {
//   "odd" : all odd nums,
//   "even": all even numbers
// }

let nums = [2, 5, 3, 6, 8, 5];

// solution using built-in method or funtion
let evenNums = nums.filter((num) => num % 2 === 0);
let oddNums = nums.filter((num) => num % 2 !== 0);

let result = {
  "odd": oddNums,
  "even": evenNums
};

console.log(result);

// solution using without built-in method or funtion
let evenNums = [];
let oddNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNums[evenNums.length] = nums[i];
  } else {
    oddNums[oddNums.length] = nums[i];
  }
}

let result = {
  "odd": oddNums,
  "even": evenNums
};

console.log(result);
```

[Back to Top⤴️](#table-of-contents)

Show Chess board in javascript and make it to center.

```javascript
const chessboard = document.createElement("div");
chessboard.id = "chessboard";
chessboard.style.display = "flex";
chessboard.style.flexDirection = "column";
chessboard.style.justifyContent = "center";
chessboard.style.alignItems = "center";
chessboard.style.height = "450px";

for (let i = 0; i < 8; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.style.backgroundColor = (i + j) % 2 === 0 ? "white" : "black";
    cell.style.border = "1px solid black";
    row.appendChild(cell);
  }
  
  chessboard.appendChild(row);
}

document.body.appendChild(chessboard);
```

Print the result for the code below

```javascript
var obj1 = {
  num: 10
}
var obj2 = Object.create(obj1); 
console.log(obj2.num);

// output: 10
```

Print the result for the code below

```javascript
var num = 10; 
var obj = {
  num: 20
}; 
(function() {
  console.log(num, obj.num);
})();

// output: 10 20
```

[Back to Top⤴️](#table-of-contents)

Print the result for the code below

```javascript
var num1 = 20;
var num2 = 30;
[num1, num2] [num2, num1];
console.log(num1, num2);

// output: 20 30 
```

Print the result for the code below

```javascript
var num= 10;
var obj = {
    num: 20,
    printNum: function() {
      console.log(this.num);
  }
};
var newObj = obj.printNum.bind(obj);
newObj();

// output: 20
```

[Back to Top⤴️](#table-of-contents)

Print the result for the code below

```javascript
var num= 10;
var obj = {
  num: 20,
  printNum: function() { 
    console.log(this.num);
  }
}; 
var newObj = obj.printNum.bind({ num: 30 });
newObj();

//  output: 30
```

Print the result for the code below

```javascript
var person = { 
  name: "John",
  greet: function() { 
    console.log("Hello, my name is "+this.name); 
  }
}
var newPerson = person;
newPerson.name = "Jane";
person.greet();

// output: Hello, my name is Jane
```

[Back to Top⤴️](#table-of-contents)

Print the result for the code below

```javascript
var num = 10;
var obj = {
  num: 20
};
(function(num, obj) { 
  console.log(num, obj.num); 
})(num, obj);

// output: 10 20
```

Print the result for the code below

```javascript
var num = 10; 
var obj = {
  num: 20,
  printNum: function() { 
    console.log(this.num); 
  }
};
var newObj = obj.printNum; 
newObj();

// output: 10
```

[Back to Top⤴️](#table-of-contents)

Write a JavaScript program to remove duplicate items from an array.

```javascript
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];

// using built-in Set
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using filter
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using reduce
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = arr.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using forEach
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
arr.forEach((item) => {
  if (!uniqueArr.includes(item)) {
    uniqueArr.push(item);
  }
});
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using indexOf
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using includes
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using map
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
arr.map((item) => {
  if (!uniqueArr.includes(item)) {
    uniqueArr.push(item);
  }
});
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using while loop
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
let i = 0;
while (i < arr.length) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
  i++;
}
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']

// using without built-in methods
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  let isUnique = true;
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr); // Output: ['CS001', 'TSW002', 'STS003', 'STS004']
```

[Back to Top⤴️](#table-of-contents)

Write a JavaScript program to find 'CS001' in the array.

```javascript
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];

// using built-in method find
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let index = arr.find((item) => item === 'TSW002');
console.log(index); // Output: TSW002

// using without built-in methods or functions
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'TSW002') {
    index = i;
    break;
  }
}
console.log(index); // Output: 1
console.log(arr[index]); // Output: TSW002
```

Write a JavaScript program to find middle element of an array.

```javascript
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002'];

// using built-in method slice
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002'];
let middle = arr.slice(Math.floor(arr.length / 2), Math.ceil(arr.length / 2) + 1);
console.log(middle); // Output: ['STS003']

// using without built-in methods or functions
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002'];
let middle = [];
if (arr.length % 2 === 0) {
  middle = [arr[arr.length / 2 - 1], arr[arr.length / 2]];
} else {
  middle = [arr[(arr.length - 1) / 2]];
}
console.log(middle); // Output: ['STS003']
```

[Back to Top⤴️](#table-of-contents)

Write a JavaScript program to find last element of an array.

```javascript
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];

// using built-in method or function
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
let last = arr[arr.length - 1];
console.log(last); // Output: STS004

// using without built-in methods or functions
let arr = ['CS001', 'TSW002','STS003','CS001','TSW002','STS004'];
for (let i = 0; i < arr.length; i++) {
  if (i === arr.length - 1) {
    console.log(arr[i]); // Output: STS004
  }
}
```

Give the output for the code below

```javascript
function counter() {
    let count = 0;
    return () => count++;
}

let c = counter();
console.log("count1", c()); // Output: 0
console.log("count2", c()); // Output: 1
console.log("count3", c()); // Output: 2
```

[Back to Top⤴️](#table-of-contents)

Program To Print Hello World

```javascript
console.log("Hello, World!");

// Output: Hello, World!
```

Program to Add Two Numbers

```javascript
const num1 = 5;
const num2 = 10;
const sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Output: The sum of 5 and 10 is: 15
```

Program to Find the Square Root

```javascript
const num = 16;
const squareRoot = Math.sqrt(num);

console.log("The square root of " + num + " is: " + squareRoot);

// Output: The square root of 16 is: 4
```

[Back to Top⤴️](#table-of-contents)

Program to Calculate the Area of a Triangle

```javascript
const base = 5;
const height = 10;
const area = 0.5 * base * height;

console.log("The area of the triangle is: " + area);

// Output: The area of the triangle is: 25
```

Program to Swap Two Variables

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a is: " + a);
console.log("b is: " + b);

// Output: a is: 10
// Output: b is: 5
```

Program to Solve Quadratic Equation

```javascript
const a = 1;
const b = 5;
const c = 6;

const discriminant = b * b - 4 * a * c;

let x1, x2;

if (discriminant > 0) {
  x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("The roots are: " + x1 + " and " + x2);
} else if (discriminant === 0) {
  x1 = -b / (2 * a);
  console.log("The root is: " + x1);
} else {
  const realPart = (-b / (2 * a)).toFixed(2);
  const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  console.log("The roots are: " + realPart + " + " + imaginaryPart + "i and " + realPart + " - " + imaginaryPart + "i");
}

// Output: The roots are: -2 and -3
```

[Back to Top⤴️](#table-of-contents)

Program to Convert Kilometers to Miles

```javascript
const kilometers = 5;
const miles = kilometers * 0.621371;

console.log(kilometers + " kilometers is equal to " + miles + " miles");

// Output: 5 kilometers is equal to 3.10686 miles
```

Program to Convert Celsius to Fahrenheit

```javascript
const celsius = 37;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius + "°C is equal to " + fahrenheit + "°F");

// Output: 37°C is equal to 98.6°F
```

Program to Generate a Random Number

```javascript
const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random number between " + min + " and " + max + " is: " + randomNum);

// Output: Random number between 1 and 10 is: 7
```

[Back to Top⤴️](#table-of-contents)

Program to Check if a number is Positive, Negative, or Zero

```javascript
const num = 5;

if (num > 0) {
  console.log(num + " is a positive number");
} else if (num < 0) {
  console.log(num + " is a negative number");
} else {
  console.log(num + " is zero");
}

// Output: 5 is a positive number
```

Program to Check if a Number is Odd or Even

```javascript
const num = 5;

if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}

// Output: 5 is an odd number
```

Program to Find the Largest Among Three Numbers

```javascript
const num1 = 10;
const num2 = 20;
const num3 = 15;

let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log("The largest number is: " + largest);

// Output: The largest number is: 20
```

[Back to Top⤴️](#table-of-contents)

Program to Check Prime Number

```javascript
const num = 29;
let isPrime = true;

if (num === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
} else {
  console.log("Invalid input");
}

// Output: 29 is a prime number
```

Program to Print All Prime Numbers in an Interval

```javascript
const lowerNumber = 10;
const upperNumber = 50;

console.log("Prime numbers between " + lowerNumber + " and " + upperNumber + " are:");

for (let i = lowerNumber; i <= upperNumber; i++) {
  let isPrime = true;

  if (i === 1) {
    isPrime = false;
  } else if (i > 1) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// Output: Prime numbers between 10 and 50 are:
```

[Back to Top⤴️](#table-of-contents)

Program to Find the Factorial of a Number

```javascript
const num = 5;
let factorial = 1;

if (num < 0) {
  console.log("Factorial of a negative number is not possible");
} else {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log("The factorial of " + num + " is: " + factorial);
}

// Output: The factorial of 5 is: 120
```

Program to Display the Multiplication Table

```javascript
const num = 5;

console.log("Multiplication table of " + num + ":");

for (let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}

// Output: Multiplication table of 5:
```

Program to Print the Fibonacci Sequence

```javascript
const num = 10;
let n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci series up to " + num + " terms:");

for (let i = 1; i <= num; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// Output: Fibonacci series up to 10 terms: 0 1 1 2 3 5 8 13 21 34
```

[Back to Top⤴️](#table-of-contents)

Program to Check Armstrong Number

```javascript
const num = 153;
let sum = 0;
let temp = num;
let remainder;

while (temp > 0) {
  remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}

if (sum === num) {
  console.log(num + " is an Armstrong number");
} else {
  console.log(num + " is not an Armstrong number");
}

// Output: 153 is an Armstrong number
```

Program to Find Armstrong Number in an Interval

```javascript
const lowerNumber = 100;
const upperNumber = 1000;

console.log("Armstrong numbers between " + lowerNumber + " and " + upperNumber + " are:");

for (let i = lowerNumber; i <= upperNumber; i++) {
  let numberOfDigits = i.toString().length;
  let sum = 0;
  let temp = i;
  let remainder;

  while (temp > 0) {
    remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }

  if (sum === i) {
    console.log(i);
  }
}

// Output: Armstrong numbers between 100 and 1000 are: 153 370 371 407
```

[Back to Top⤴️](#table-of-contents)

Program to Make a Simple Calculator

```javascript
const operator = '+';
const num1 = 5;
const num2 = 10;
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
}

console.log("The result is: " + result); // Output: The result is: 15
```

Program to Find the Sum of Natural Numbers

```javascript
const num = 10;
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("The sum of natural numbers up to " + num + " is: " + sum);

// Output: The sum of natural numbers up to 10 is: 55
```

[Back to Top⤴️](#table-of-contents)

Program to Check if the Numbers Have Same Last Digit

```javascript
const num1 = 25;
const num2 = 35;

if (num1 % 10 === num2 % 10) {
  console.log("Both numbers have the same last digit");
} else {
  console.log("Both numbers do not have the same last digit");
}

// Output: Both numbers have the same last digit
```

[Back to Top⤴️](#table-of-contents)

Program to Find HCF or GCD

```javascript
const num1 = 12;
const num2 = 18;
let hcf;

for (let i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    hcf = i;
  }
}

console.log("The HCF of " + num1 + " and " + num2 + " is: " + hcf);

// Output: The HCF of 12 and 18 is: 6
```

[Back to Top⤴️](#table-of-contents)

Program to Find LCM

```javascript
const num1 = 12;
const num2 = 18;
let lcm;

lcm = (num1 > num2) ? num1 : num2;

while (true) {
  if (lcm % num1 === 0 && lcm % num2 === 0) {
    console.log("The LCM of " + num1 + " and " + num2 + " is: " + lcm);
    break;
  }
  lcm++;
}

// Output: The LCM of 12 and 18 is: 36
```

[Back to Top⤴️](#table-of-contents)

Program to Find the Factors of a Number

```javascript
const num = 60;

console.log("The factors of " + num + " are:");

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

// Output: The factors of 60 are: 1 2 3 4 5 6 10 12 15 20 30 60
```

Program to Find Sum of Natural Numbers Using Recursion

```javascript
function sum(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sum(num - 1);
  }
}

const n = 10;
const result = sum(n);

console.log("The sum of natural numbers up to " + n + " is: " + result);

// Output: The sum of natural numbers up to 10 is: 55
```

[Back to Top⤴️](#table-of-contents)

Program to Guess a Random Number

```javascript
const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;

do {
  guess = parseInt(prompt("Guess a number between " + min + " and " + max));
  if (guess > randomNum) {
    console.log("Too high. Try again!");
  } else if (guess < randomNum) {
    console.log("Too low. Try again!");
  }
} while (guess !== randomNum);

console.log("Congratulations! You guessed the correct number.");

// Output: Congratulations! You guessed the correct number.
```

[Back to Top⤴️](#table-of-contents)

Program to Shuffle Deck of Cards

```javascript
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const deck = [];

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push(rank + " of " + suit);
  }
}

console.log("Shuffled deck of cards:");
for (const card of deck) {
  console.log(card);
}

// Output: Shuffled deck of cards: 2 of Hearts 3 of Hearts 4 of Hearts ...
```

Program to Display Fibonacci Sequence Using Recursion

```javascript
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const n = 10;

console.log("Fibonacci series up to " + n + " terms:");

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

// Output: Fibonacci series up to 10 terms: 0 1 1 2 3 5 8 13 21 34
```

[Back to Top⤴️](#table-of-contents)

Program to Find Factorial of Number Using Recursion

```javascript
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const n = 5;

console.log("The factorial of " + n + " is: " + factorial(n));

// Output: The factorial of 5 is: 120
```

Program to Convert Decimal to Binary

```javascript
const decimal = 10;
let binary = "";

while (decimal > 0) {
  binary = (decimal % 2) + binary;
  decimal = parseInt(decimal / 2);
}

console.log("The binary equivalent is: " + binary);

// Output: The binary equivalent is: 1010
```

Program to Find ASCII Value of Character

```javascript
const char = 'A';

console.log("The ASCII value of " + char + " is: " + char.charCodeAt(0));

// Output: The ASCII value of A is: 65
```

[Back to Top⤴️](#table-of-contents)

Program to Check Whether a String is Palindrome or Not

```javascript
const str = "madam";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(str + " is a palindrome");
} else {
  console.log(str + " is not a palindrome");
}

// Output: madam is a palindrome
```

Program to Sort Words in Alphabetical Order

```javascript
const words = ["Apple", "Banana", "Orange", "Mango"];
words.sort();

console.log("Words in alphabetical order:");

for (const word of words) {
  console.log(word);
}

// Output: Words in alphabetical order: Apple Banana Mango Orange
```

[Back to Top⤴️](#table-of-contents)

Program to Replace Characters of a String

```javascript
const str = "Hello, World!";

const newStr = str.replace(/o/g, "x");

console.log("Original string: " + str);
console.log("New string: " + newStr);

// Output: Original string: Hello, World!
// Output: New string: Hellx, Wxrld!
```

Program to Reverse a String

```javascript
const str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("Original string: " + str);
console.log("Reversed string: " + reversedStr);

// Output: Original string: Hello, World!
// Output: Reversed string: !dlroW ,olleH
```

[Back to Top⤴️](#table-of-contents)

Program to Create Objects in Different Ways

```javascript
// Using Object Literal
const person1 = {
  name: "Alice",
  age: 30
};

// Using Object Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person2 = new Person("Bob", 25);

// Using Object.create()
const person3 = Object.create(person1);

console.log(person1);

console.log(person2);

console.log(person3);

// Output: { name: 'Alice', age: 30 }
// Output: Person { name: 'Bob', age: 25 }
// Output: {}
```

Program to Check the Number of Occurrences of a Character in the String

```javascript
const str = "Hello, World!";
const char = "o";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}

console.log("The number of occurrences of " + char + " in the string is: " + count);
// Output: The number of occurrences of o in the string is: 2
```

[Back to Top⤴️](#table-of-contents)

Program to Convert the First Letter of a String into UpperCase

```javascript
const str = "hello, world!";
const firstLetter = str[0].toUpperCase();

const newStr = firstLetter + str.slice(1);

console.log("Original string: " + str);
console.log("New string: " + newStr);

// Output: Original string: hello, world!
// Output: New string: Hello, world!
```

Program to Count the Number of Vowels in a String

```javascript
const str = "hello, world!";
const vowels = "aeiou";
let count = 0;

for (let char of str) {
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}

console.log("The number of vowels in the string is: " + count);
// Output: The number of vowels in the string is: 3
```

[Back to Top⤴️](#table-of-contents)

Program to Remove a Property from an Object

```javascript
const person = {
  name: "Alice",
  age: 30,
  profession: "Developer"
};

delete person.profession;

console.log(person);
// Output: { name: 'Alice', age: 30 }
```

Program to Check Whether a String Starts and Ends With Certain Characters

```javascript
const str = "hello, world!";
const startsWith = "he";
const endsWith = "ld";

if (str.startsWith(startsWith) && str.endsWith(endsWith)) {
  console.log("The string starts with " + startsWith + " and ends with " + endsWith);
} else {
  console.log("The string does not start with " + startsWith + " and end with " + endsWith);
}

// Output: The string starts with he and ends with ld
```

[Back to Top⤴️](#table-of-contents)

Program to Check if a Key Exists in an Object

```javascript
const person = {
  name: "Alice",
  age: 30
};

const key = "name";

if (key in person) {
  console.log("The key " + key + " exists in the object");
} else {
  console.log("The key " + key + " does not exist in the object");
}

// Output: The key name exists in the object
```

Program to Clone a JS Object

```javascript
const person = {
  name: "Alice",
  age: 30
};

const clone = { ...person };

console.log(clone);
// Output: { name: 'Alice', age: 30 }
```

[Back to Top⤴️](#table-of-contents)

Program to Loop Through an Object

```javascript
const person = {
  name: "Alice",
  age: 30
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

// Output: name: Alice
```

Program to Merge Property of Two Objects

```javascript
const obj1 = {
  name: "Alice"
};

const obj2 = {
  age: 30
};

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

// Output: { name: 'Alice', age: 30 }
```

[Back to Top⤴️](#table-of-contents)

Program to Count the Number of Keys/Properties in an Object

```javascript
const person = {
  name: "Alice",
  age: 30
};

const keys = Object.keys(person);
const count = keys.length;

console.log("The number of keys in the object is: " + count);

// Output: The number of keys in the object is: 2
```

Program to Add Key/Value Pair to an Object

```javascript
const person = {
  name: "Alice",
  age: 30
};

person.profession = "Developer";

console.log(person);

// Output: { name: 'Alice', age: 30, profession: 'Developer' }
```

Program to Replace All Occurrences of a String

```javascript
const str = "hello, world!";
const newStr = str.replace(/l/g, "x");

console.log("Original string: " + str);

console.log("New string: " + newStr);

// Output: Original string: hello, world!
// Output: New string: hexxo, worxd!
```

[Back to Top⤴️](#table-of-contents)

Program to Create Multiline Strings

```javascript
const multilineString = `This is a
multiline
string`;

console.log(multilineString);

// Output: This is a
// multiline
// string
```

Program to Format Numbers as Currency Strings

```javascript
const number = 12345.6789;

const currencyString = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

console.log(currencyString);

// Output: $12,345.68
```

Program to Generate Random String

```javascript
const randomString = Math.random().toString(36).substring(7);

console.log(randomString);

// Output: Random string of length 7 characters (e.g., "x8z2j9a")
```

[Back to Top⤴️](#table-of-contents)

Program to Check if a String Starts With Another String

```javascript
const str = "hello, world!";
const startsWith = "hello";

if (str.startsWith(startsWith)) {
  console.log("The string starts with " + startsWith);
} else {
  console.log("The string does not start with " + startsWith);
}

// Output: The string starts with hello
```

Program to Trim a String

```javascript
const str = "   hello, world!   ";
const trimmedStr = str.trim();

console.log("Original string: " + str);

console.log("Trimmed string: " + trimmedStr);

// Output: Original string:    hello, world!
// Output: Trimmed string: hello, world!
```

Program to Convert Objects to Strings

```javascript
const person = {
  name: "Alice",
  age: 30
};

const str = JSON.stringify(person);

console.log(str);

// Output: {"name":"Alice","age":30}
```

[Back to Top⤴️](#table-of-contents)

Program to Check Whether a String Contains a Substring

```javascript
const str = "hello, world!";
const subStr = "world";

if (str.includes(subStr)) {
  console.log("The string contains " + subStr);
} else {
  console.log("The string does not contain " + subStr);
}

// Output: The string contains world
```

Program to Compare Two Strings

```javascript
const str1 = "hello";
const str2 = "world";

if (str1 === str2) {
  console.log("The strings are equal");
} else {
  console.log("The strings are not equal");
}

// Output: The strings are not equal
```

Program to Encode a String to Base64

```javascript
const str = "hello, world!";
const encodedStr = btoa(str);

console.log("Encoded string: " + encodedStr);
// Output: Encoded string: aGVsbG8sIHdvcmxkIQ==
```

[Back to Top⤴️](#table-of-contents)

Program to Replace all Instances of a Character in a String

```javascript
const str = "hello, world!";
const newStr = str.replace(/l/g, "x");

console.log("Original string: " + str);
console.log("New string: " + newStr);

// Output: Original string: hello, world!
// Output: New string: hexxo, worxd!
```

Program to Replace All Line Breaks with

```javascript
const str = "hello\nworld!";
const newStr = str.replace(/\n/g, " ");

console.log("Original string: " + str);
console.log("New string: " + newStr);

// Output: Original string: hello
// world!
// Output: New string: hello world!
```

Program to Display Date and Time

```javascript
const date = new Date();

console.log("Current date and time: " + date);
// Output: Current date and time: Sun Oct 31 2021 12:00:00 GMT+0530 (India Standard Time)
```

[Back to Top⤴️](#table-of-contents)

Program to Check Leap Year

```javascript
const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// Output: 2024 is a leap year
```

Program to Format the Date

```javascript
const date = new Date();

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const formattedDate = date.toLocaleDateString('en-US', options);

console.log("Formatted date: " + formattedDate);
// Output: Formatted date: October 31, 2021
```

Program to Display Current Date

```javascript
const date = new Date();

const day = date.getDate();

const month = date.getMonth() + 1;

const year = date.getFullYear();

console.log("Current date: " + day + "/" + month + "/" + year);
// Output: Current date: 14/06/2024
```

[Back to Top⤴️](#table-of-contents)

Program to Compare The Value of Two Dates

```javascript
const date1 = new Date('2021-10-31');
const date2 = new Date('2021-11-01');

if (date1 > date2) {
  console.log("Date 1 is greater than Date 2");
} else if (date1 < date2) {
  console.log("Date 1 is less than Date 2");
} else {
  console.log("Date 1 is equal to Date 2");
}

// Output: Date 1 is less than Date 2
```

Program to Create Countdown Timer

```javascript
let count = 10;

const interval = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    console.log("Countdown is over");
  }
}, 1000);

// Output: 10 9 8 7 6 5 4 3 2 1 0 Countdown is over
```

[Back to Top⤴️](#table-of-contents)

Program to Remove Specific Item From an Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const index = fruits.indexOf("Banana");

if (index > -1) {
  fruits.splice(index, 1);
}

console.log(fruits);
// Output: ["Apple", "Orange", "Mango"]
```

Program to Check if An Array Contains a Specified Value

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const value = "Banana";

if (fruits.includes(value)) {
  console.log("The array contains " + value);
} else {
  console.log("The array does not contain " + value);
}

// Output: The array contains Banana
```

[Back to Top⤴️](#table-of-contents)

Program to Insert Item in an Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits.push("Grapes");

console.log(fruits);
// Output: ["Apple", "Banana", "Orange", "Mango", "Grapes"]
```

Program to Append an Object to an Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const obj = { name: "Grapes" };

fruits.push(obj);

console.log(fruits);
// Output: ["Apple", "Banana", "Orange", "Mango", { name: 'Grapes' }]
```

[Back to Top⤴️](#table-of-contents)

Program to Check if An Object is An Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

if (Array.isArray(fruits)) {
  console.log("fruits is an array");
} else {
  console.log("fruits is not an array");
}

// Output: fruits is an array
```

Program to Empty an Array

```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits = [];

console.log(fruits);

// Output: []
```

[Back to Top⤴️](#table-of-contents)

Program to Add Element to Start of an Array

```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits.unshift("Grapes");

console.log(fruits);
// Output: ["Grapes", "Apple", "Banana", "Orange", "Mango"]
```

Program to Remove Duplicates From Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango", "Apple", "Banana"];

const uniqueFruits = [...new Set(fruits)];

console.log(uniqueFruits);
// Output: ["Apple", "Banana", "Orange", "Mango"]
```

Program to Merge Two Arrays and Remove Duplicate Items

```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const mergedArray = [...new Set([...arr1, ...arr2])];

console.log(mergedArray);
// Output: [1, 2, 3, 4, 5]
```

[Back to Top⤴️](#table-of-contents)

Program to Sort Array of Objects by Property Values

```javascript
const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

persons.sort((a, b) => a.age - b.age);

console.log(persons);
// Output: [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]
```

Program to Create Two Dimensional Array

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix);
// Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
```

Program to Extract Given Property Values from Objects as Array

```javascript
const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

const names = persons.map(person => person.name);

console.log(names);
// Output: [ 'Alice', 'Bob', 'Charlie' ]
```

[Back to Top⤴️](#table-of-contents)

Program to Compare Elements of Two Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const isEqual = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

if (isEqual) {
  console.log("The arrays are equal");
} else {
  console.log("The arrays are not equal");
}

// Output: The arrays are equal
```

Program to Get Random Item From an Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log("Random fruit: " + randomFruit);
// Output: Random fruit: Banana
```

Program To Perform Intersection Between Two Arrays

```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersection = arr1.filter(value => arr2.includes(value));

console.log(intersection);
// Output: [3, 4, 5]
```

[Back to Top⤴️](#table-of-contents)

Program to Split Array into Smaller Chunks

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  chunks.push(arr.slice(i, i + chunkSize));
}

console.log(chunks);
// Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```

Program to Include a JS file in Another JS file

```javascript
// index.js
console.log("Hello, World!");

// script.js
document.write("This is a script file");

// index.html
<!DOCTYPE html>
<html>
<head>
  <title>Include JS File</title>
</head>
<body>
  <script src="index.js"></script>
  <script src="script.js"></script>
</body>
</html>

// Output: In console: Hello, World! In body: This is a script file
```

[Back to Top⤴️](#table-of-contents)

Program to Get File Extension

```javascript
const filename = "script.js";
const extension = filename.split('.').pop();

console.log("File extension: " + extension);

// Output: File extension: js
```

Program To Check If A Variable Is undefined or null

```javascript
let x;

if (x === undefined) {
  console.log("x is undefined");
} else {
  console.log("x is defined");
}

// Output: x is undefined
```

[Back to Top⤴️](#table-of-contents)

Program to Set a Default Parameter Value For a Function

```javascript
function greet(name = "World") {
  console.log("Hello, " + name + "!");
}

greet("Alice");

greet();

// Output: Hello, Alice! Hello, World!
```

Program to Illustrate Different Set Operations

```javascript
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

const union = new Set([...set1, ...set2]);
const intersection = new Set([...set1].filter(x => set2.has(x)));

console.log("Union: " + [...union]);
console.log("Intersection: " + [...intersection]);
// Output: Union: 1,2,3,4,5,6,7,8 Intersection: 4,5
```

[Back to Top⤴️](#table-of-contents)

Program to Generate a Random Number Between Two Numbers

```javascript
const min = 1;
const max = 10;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random number between " + min + " and " + max + ": " + randomNum);
// Output: Random number between 1 and 10: 7
```

Program To Get The Current URL

```javascript
const currentURL = window.location.href;

console.log("Current URL: " + currentURL);
// Output: Current URL: https://www.example.com/page
```

Program to Validate An Email Address

```javascript
const email = "manthan.ank46@gmail.com";
const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if (pattern.test(email)) {
  console.log(email + " is a valid email address");
} else {
  console.log(email + " is not a valid email address");
}

// Output: manthan.ank46@gmail.com is a valid email address
```

[Back to Top⤴️](#table-of-contents)

Program to Check If a Variable is of Function Type

```javascript
function greet() {
  console.log("Hello, World!");
}

const x = 10;

if (typeof greet === 'function') {
  console.log("greet is a function");
} else {
  console.log("greet is not a function");
}

if (typeof x === 'function') {
  console.log("x is a function");
} else {
  console.log("x is not a function");
}

// Output: greet is a function x is not a function
```

Program To Work With Constants

```javascript
const PI = 3.14159;

console.log("The value of PI is: " + PI);
// Output: The value of PI is: 3.14159
```

[Back to Top⤴️](#table-of-contents)

Program to Pass Parameter to a setTimeout() Function

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

setTimeout(greet, 1000, "Alice");
// Output: Hello, Alice! (after 1 second)
```

Program to Generate a Range of Numbers and Characters

```javascript
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const characters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

console.log("Numbers: " + numbers);
console.log("Characters: " + characters);
// Output: Numbers: 1,2,3,4,5,6,7,8,9,10 Characters: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
```

Program to Perform Function Overloading

```javascript
function add(x, y) {
  return x + y;
}

function add(x, y, z) {
  return x + y + z;
}

console.log(add(1, 2)); // Output: NaN
console.log(add(1, 2, 3)); // Output: 6

// Explanation: The second function definition overwrites the first one, resulting in the first function call returning NaN.
```

[Back to Top⤴️](#table-of-contents)

Program to Implement a Stack

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const stack = new Stack();

stack.push(1);

stack.push(2);

stack.push(3);

console.log(stack.printStack()); // Output: 1 2 3

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3

console.log(stack.printStack()); // Output: 1 2

console.log(stack.isEmpty()); // Output: false

stack.pop();

stack.pop();

console.log(stack.isEmpty()); // Output: true

console.log(stack.pop()); // Output: Underflow
```

[Back to Top⤴️](#table-of-contents)

Program to Implement a Queue

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const queue = new Queue();

queue.enqueue(1);

queue.enqueue(2);

queue.enqueue(3);

console.log(queue.printQueue()); // Output: 1 2 3

console.log(queue.front()); // Output: 1

console.log(queue.dequeue()); // Output: 1

console.log(queue.printQueue()); // Output: 2 3

console.log(queue.isEmpty()); // Output: false

queue.dequeue();

queue.dequeue();

console.log(queue.isEmpty()); // Output: true

console.log(queue.dequeue()); // Output: Underflow
```

[Back to Top⤴️](#table-of-contents)

Program to Check if a Number is Float or Integer

```javascript
function isFloat(num) {
  return Number(num) === num && num % 1 !== 0;
}

function isInteger(num) {
  return Number(num) === num && num % 1 === 0;
}

console.log(isFloat(3.14)); // Output: true

console.log(isFloat(5)); // Output: false

console.log(isInteger(5)); // Output: true

console.log(isInteger(3.14)); // Output: false

// Explanation: The isFloat function checks if the number is a float by comparing it with its integer value and checking if it has a non-zero decimal part. The isInteger function checks if the number is an integer by comparing it with its integer value and checking if it has a zero decimal part.
```

Program to Pass a Function as Parameter

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

function welcome(greetFunction, name) {
  return greetFunction(name);
}

console.log(welcome(greet, "Alice")); // Output: Hello, Alice!

// Explanation: The welcome function takes a function as a parameter and calls it with the provided name parameter.
```

[Back to Top⤴️](#table-of-contents)

Program to Get the Dimensions of an Image

```javascript
const img = new Image();

img.src = "image.jpg";

img.onload = function() {
  console.log("Image width: " + this.width);
  console.log("Image height: " + this.height);
};

// Output: Image width: 800 Image height: 600
```

Program to Remove All Whitespaces From a Text

```javascript
const text = "  Hello, World!  ";

const trimmedText = text.replace(/\s/g, "");

console.log("Original text: " + text);

console.log("Trimmed text: " + trimmedText);

// Output: Original text: Hello, World! Trimmed text: Hello,World!
```

Program to Write to Console

```javascript
console.log("Hello, World!");

// Output: Hello, World!
```

[Back to Top⤴️](#table-of-contents)

Program to Convert Date to Number

```javascript
const date = new Date();

const timestamp = date.getTime();

console.log("Timestamp: " + timestamp);

// Output: Timestamp: 1635648000000
```

Program to Get the Last Element of an Array

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const lastFruit = fruits[fruits.length - 1];

console.log("Last fruit: " + lastFruit);
// Output: Last fruit: Mango
```

Program to Get the Current Time

```javascript
const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log("Current time: " + hours + ":" + minutes + ":" + seconds);
// Output: Current time: 12:00:00
```

[Back to Top⤴️](#table-of-contents)

Program to Get the Current Day

```javascript
const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[date.getDay()];

console.log("Today is: " + day);
// Output: Today is: Friday
```

Program to Get the Current Month

```javascript
const date = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = months[date.getMonth()];

console.log("Current month: " + month);
// Output: Current month: June
```

Program to Get the Current Year

```javascript
const date = new Date();

const year = date.getFullYear();

console.log("Current year: " + year);
// Output: Current year: 2024
```

Count the character 'l' in the string "Hello, World!"

```javascript
const str = "Hello, World!";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'l') {
    count++;
  }
}

console.log("The number of occurrences of 'l' in the string is: " + count);
// Output: The number of occurrences of 'l' in the string is: 3
```

Count the number of words in the string "Hello, World!"

```javascript
const str = "Hello, World!";

const words = str.split(" ");

console.log("The number of words in the string is: " + words.length);
// Output: The number of words in the string is: 2
```

Find the largest element in an array.

```javascript
const numbers = [10, 5, 20, 15, 30];

const largest = Math.max(...numbers);

console.log("Largest number: " + largest);

// Output: Largest number: 30
```

Find the smallest element in an array.

```javascript
const numbers = [10, 5, 20, 15, 30];

const smallest = Math.min(...numbers);

console.log("Smallest number: " + smallest);

// Output: Smallest number: 5
```

Find the largest element in an array without using any built-in functions/methods.

```javascript
const numbers = [10, 5, 20, 15, 30];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number: " + largest);

// Output: Largest number: 30
```

Find the smallest element in an array without using any built-in functions/methods.

```javascript
const numbers = [10, 5, 20, 15, 30];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log("Smallest number: " + smallest);

// Output: Smallest number: 5
```

Reverse an array without using any built-in functions/methods.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < (numbers.length - 1) / 2; i++) {
  const temp = numbers[i];
  numbers[i] = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = temp;
}

console.log("Reversed array: " + numbers);

// Output: Reversed array: 5,4,3,2,1
```

Find the missing number in an array of size n containing numbers from 1 to n+1 without using any built-in functions/methods.

```javascript
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

const n = numbers.length + 1;

let sum = (n * (n + 1)) / 2;

for (let i = 0; i < numbers.length; i++) {
  sum -= numbers[i];
}

console.log("The missing number is: " + sum);

// Output: The missing number is: 5
```

Move all zeroes to the end of the array without using any built-in functions/methods.

```javascript
const numbers = [0, 2, 0, 4, 0, 6, 0, 8];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 0) {
    numbers[count] = numbers[i];
    count++;
  }
}

while (count < numbers.length) {
  numbers[count] = 0;
  count++;
}

console.log("Array with zeroes at the end: " + numbers);

// Output: Array with zeroes at the end: 2,4,6,8,0,0,0,0
```

Find the "Kth" largest element in an array without using any built-in functions/methods.

```javascript
const numbers = [10, 5, 20, 15, 30];

const k = 2;

for (let i = 0; i < k; i++) {
  let max = 0;
  let maxIndex = 0;

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > max) {
      max = numbers[j];
      maxIndex = j;
    }
  }

  numbers[maxIndex] = 0;
}

console.log("The " + k + "th largest element is: " + max);

// Output: The 2th largest element is: 20
```

Find the "Kth" smallest element in an array without using any built-in functions/methods.

```javascript
const numbers = [10, 5, 20, 15, 30];

const k = 2;

for (let i = 0; i < k; i++) {
  let min = numbers[i];
  let minIndex = i;

  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < min) {
      min = numbers[j];
      minIndex = j;
    }
  }

  // Swap the found minimum element with the element at index i
  [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
}

console.log("The " + k + "th smallest element is: " + numbers[k - 1]);

// Output: The 2th smallest element is: 10
```

Find the subarray with the given sum in a non-negative array without using any built-in functions/methods.

```javascript
const numbers = [1, 4, 20, 3, 10, 5];

const targetSum = 33;

let start = 0;

let sum = numbers[0];

for (let i = 1; i <= numbers.length; i++) {
  while (sum > targetSum && start < i - 1) {
    sum -= numbers[start];
    start++;
  }

  if (sum === targetSum) {
    console.log("Subarray with the given sum found between indexes " + start + " and " + (i - 1));
    break;
  }

  if (i < numbers.length) {
    sum += numbers[i];
  }
}

// Output: Subarray with the given sum found between indexes 2 and 4
```

Kadane’s Algorithm: Find the maximum sum subarray without using any built-in functions/methods.

```javascript
const numbers = [-2, -3, 4, -1, -2, 1, 5, -3];

let maxSum = numbers[0];

let currentSum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (currentSum + numbers[i] > numbers[i]) {
    currentSum = currentSum + numbers[i];
  } else {
    currentSum = numbers[i];
  }
  
  if (currentSum > maxSum) {
    maxSum = currentSum;
  }
}

console.log("Maximum sum subarray: " + maxSum);

// Output: Maximum sum subarray: 7
```

Two Sum Problem: Find pairs in an array that sum to a target value without using any built-in functions/methods.

```javascript
const numbers = [2, 7, 11, 15];

const target = 9;

const pairs = [];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === target) {
      pairs[pairs.length] = [numbers[i], numbers[j]];
    }
  }
}

console.log("Pairs that sum to " + target + ": " + pairs);

// Output: Pairs that sum to 9: 2,7
```

Merge two sorted arrays without using any built-in functions/methods.

```javascript
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = [];

let i = 0;

let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    mergedArray[mergedArray.length] = arr1[i];
    i++;
  } else {
    mergedArray[mergedArray.length] = arr2[j];
    j++;
  }
}

while (i < arr1.length) {
  mergedArray[mergedArray.length] = arr1[i];
  i++;
}

while (j < arr2.length) {
  mergedArray[mergedArray.length] = arr2[j];
  j++;
}

console.log("Merged array: " + mergedArray);

// Output: Merged array: 1,2,3,4,5,6,7,8
```

Find the longest increasing subsequence in an array without using any built-in functions/methods.

```javascript
const numbers = [10, 22, 9, 33, 21, 50, 41, 60, 80];

const lis = [];
for (let i = 0; i < numbers.length; i++) {
  lis[i] = 1;
}

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j] && lis[i] < lis[j] + 1) {
      lis[i] = lis[j] + 1;
    }
  }
}

let maxLis = 0;

for (let i = 0; i < lis.length; i++) {
  if (lis[i] > maxLis) {
    maxLis = lis[i];
  }
}

console.log("Length of the longest increasing subsequence: " + maxLis);

// Output: Length of the longest increasing subsequence: 6
```

Trapping Rain Water Problem without using any built-in functions/methods.

```javascript
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let totalWater = 0;

for (let i = 1; i < heights.length - 1; i++) {
  let leftMax = 0;
  for (let j = 0; j < i; j++) {
    if (heights[j] > leftMax) {
      leftMax = heights[j];
    }
  }

  let rightMax = 0;
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[j] > rightMax) {
      rightMax = heights[j];
    }
  }

  const minMax = leftMax < rightMax ? leftMax : rightMax;
  totalWater += minMax > heights[i] ? minMax - heights[i] : 0;

console.log("Total trapped rainwater: " + totalWater);

// Output: Total trapped rainwater: 6
}
```

Reverse a string.

```javascript

````

Check if a string is a palindrome.

```javascript

````

Find the first non-repeating character in a string.

```javascript

````

Find the longest palindrome in a string.

```javascript

````

Check if two strings are anagrams.

```javascript

````

Implement strstr() or indexOf().

```javascript

````

Longest Common Prefix.

```javascript

````

Count and say problem.

```javascript

````

Group anagrams together from a list of strings.

```javascript

````

Check if a string has balanced parentheses.

```javascript

````

Reverse a linked list (iterative and recursive).

```javascript

````

Detect a cycle in a linked list (Floyd’s Cycle Detection).

```javascript

````

Find the middle element of a linked list.

```javascript

````

Merge two sorted linked lists.

```javascript

````

Remove N-th node from the end of a linked list.

```javascript

````

Find the intersection point of two linked lists.

```javascript

````

Detect and remove a loop in a linked list.

```javascript

````

Flatten a linked list.

```javascript

````

Rotate a linked list.

```javascript

````

Clone a linked list with random pointers.

```javascript

````

Implement a stack using arrays or linked lists.

```javascript

````

Implement a queue using stacks.

```javascript

````

Implement a stack that supports getMin() in constant time.

```javascript

````

Next Greater Element in a stack.

```javascript

````

Design a circular queue.

```javascript

````

Evaluate postfix/prefix expressions.

```javascript

````

Implement a LRU (Least Recently Used) Cache.

```javascript

````

Check for balanced parentheses using a stack.

```javascript

````

Sort a stack.

```javascript

````

Find the largest rectangle in a histogram.

```javascript

````

Inorder/Preorder/Postorder traversal of a binary tree (recursive and iterative).

```javascript

````

Level order traversal of a binary tree.

```javascript

````

Find the height of a binary tree.

```javascript

````

Check if two trees are identical.

```javascript

````

Find the diameter of a binary tree.

```javascript

````

Check if a binary tree is a mirror of itself (symmetric).

```javascript

````

Find the lowest common ancestor (LCA) of two nodes in a binary tree.

```javascript

````

Convert a binary tree into its mirror tree.

```javascript

````

Print the boundary nodes of a binary tree.

```javascript

````

Find the path from the root to a given node in a binary tree.

```javascript

````

Insert a node in a binary search tree.

```javascript

````

Delete a node from a binary search tree.

```javascript

````

Find the inorder successor/predecessor of a node in a BST.

```javascript

````

Check if a binary tree is a binary search tree (BST).

```javascript

````

Find the k-th smallest/largest element in a BST.

```javascript

````

Convert a BST into a sorted doubly linked list.

```javascript

````

Merge two binary search trees.

```javascript

````

Check if there’s a pair with a given sum in a BST.

```javascript

````

Construct a BST from a sorted array.

```javascript

````

Find the range sum in a binary search tree.

```javascript

````

Implement a min/max heap.

```javascript

````

Find the k-th largest/smallest element in an array using a heap.

```javascript

````

Merge k sorted arrays using a heap.

```javascript

````

Find the median in a stream of integers.

```javascript

````

Check if a binary tree is a heap.

```javascript

````

Find the top K frequent elements in a stream of data.

```javascript

````

Sort an array using heap sort.

```javascript

````

Rearrange characters in a string such that no two adjacent characters are the same using a heap.

```javascript

````

Depth First Search (DFS) and Breadth First Search (BFS).

```javascript

````

Check if a graph is bipartite.

```javascript

````

Detect a cycle in a directed/undirected graph.

```javascript

````

Find the shortest path in an unweighted graph (BFS).

```javascript

````

Dijkstra's Algorithm for shortest path in a weighted graph.

```javascript

````

Topological Sorting of a directed graph.

```javascript

````

Find the strongly connected components in a graph (Kosaraju’s Algorithm).

```javascript

````

Prim’s and Kruskal’s Algorithm for Minimum Spanning Tree (MST).

```javascript

````

Flood Fill Algorithm.

```javascript

````

Find if there’s a path between two nodes in a graph.

```javascript

````

0/1 Knapsack problem.

```javascript

````

Longest Common Subsequence.

```javascript

````

Longest Increasing Subsequence.

```javascript

````

Coin Change Problem.

```javascript

````

Rod Cutting Problem.

```javascript

````

Subset Sum Problem.

```javascript

````

Edit Distance Problem.

```javascript

````

Egg Dropping Problem.

```javascript

````

Fibonacci number using dynamic programming.

```javascript

````

Word Break Problem.

```javascript

````

Find the majority element in an array (element that appears more than n/2 times).

```javascript

````

Find the median of two sorted arrays.

```javascript

````

Count inversions in an array.

```javascript

````

Best time to buy and sell stock.

```javascript

````

Reservoir sampling.

```javascript

````

Find the minimum number of platforms required for a railway station.

```javascript

````

K-th largest element in a stream.

```javascript

````

Median of a stream of integers.

```javascript

````

Find the longest consecutive sequence in an array.

```javascript

````

Sliding window maximum.

```javascript

````

[Back to Top⤴️](#table-of-contents)

## List of GitHub Repositories to learn JavaScript

- [30 Days of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)
- [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS)
- [Wtfjs](https://github.com/denysdovhan/wtfjs)
- [JavaScript30](https://github.com/wesbos/JavaScript30)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
- [ES6 For Humans](https://github.com/metagrover/ES6-for-humans)
- [Javascript Algorithms](https://github.com/trekhleb/javascript-algorithms)
- [Js Stack From Scratch](https://github.com/verekia/js-stack-from-scratch)
- [30 Seconds of Code](https://github.com/30-seconds/30-seconds-of-code)
- [Airbnb Js Style Guide](https://github.com/airbnb/javascript)
- [Js The Right Way](https://github.com/braziljs/js-the-right-way)
- [33 Js Concepts](https://github.com/leonardomso/33-js-concepts)
- [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)
- [Modern Js CheatSheet](https://github.com/mbeaudru/modern-js-cheatsheet)
- [Jstips](https://github.com/loverajoel/jstips)
- [Awesome JavaScript Projects](https://github.com/Vishal-raj-1/Awesome-JavaScript-Projects)
- [Project Guidelines](https://github.com/elsewhencode/project-guidelines)
- [Nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [JavaScript Interview Questions](https://github.com/sudheerj/javascript-interview-questions)
- [Must Watch JavaScript](https://github.com/AllThingsSmitty/must-watch-javascript)

## List of Websites to learn JavaScript

- [W3School](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [DevDocs](https://devdocs.io/)
- [Programiz](programiz.com)
- [Freecodecamp](https://www.freecodecamp.org/)
- [Javatpoint](https://www.javatpoint.com/)
- [Javascript.info](https://javascript.info/)
- [Tutorialspoint](https://www.tutorialspoint.com/index.htm)
- [Udemy](https://www.udemy.com/)
- [YouTube](https://www.youtube.com)
- [Stackoverflow](https://stackoverflow.com)

## List of Books to learn JavaScript

- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don’t Know JS](https://www.amazon.in/You-Dont-Know-Set-Volumes/dp/9352136268)
- [Effective JavaScript](https://www.amazon.in/Effective-JavaScript-Specific-Software-Development/dp/0321812182)
- [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)
- [JavaScript: The Definitive Guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/)
- [A Smarter Way to Learn JavaScript](https://asmarterwaytolearn.com/js/index-of-exercises.html)
- [Programming JavaScript Applications](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/)

## List of YouTube Channels to learn JavaScript

- [Freecodecamp](https://www.youtube.com/@freecodecamp)
- [Code With Harry](https://www.youtube.com/@CodeWithHarry)
- [Programming With Mosh](https://www.youtube.com/@programmingwithmosh)
- [Hitesh Choudhary](https://www.youtube.com/@HiteshChoudharydotcom)
- [Clever Programmer](https://www.youtube.com/@CleverProgrammer)
- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [Yahoo Baba](https://www.youtube.com/@YahooBaba)
- [The New Boston](https://www.youtube.com/@thenewboston)
- [LearnCode. academy](https://www.youtube.com/@learncodeacademy)
- [Academind](https://www.youtube.com/@academind)
- [LearnWebCode](https://www.youtube.com/@LearnWebCode)
- [Wes Bos](https://www.youtube.com/@WesBos)
- [WebDevMentors](https://www.youtube.com/@webdevmentors)
- [Codevolution](https://www.youtube.com/@Codevolution)
- [Codecademy](https://www.youtube.com/@codecademy)
- [Daily Tuition](https://www.youtube.com/@DailyTuition)
- [WebDevSimplified](https://www.youtube.com/WebDevSimplified)
- [Harshit Vashisth](https://www.youtube.com/@Harshitvashisth)
- [AniaKubow](https://www.youtube.com/@AniaKubow)

## List of Udemy Courses to learn JavaScript

- [The Complete JavaScript Course 2021: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)
- [JavaScript - The Complete Guide 2021 (Beginner + Advanced)](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)
- [Modern JavaScript From The Beginning](https://www.udemy.com/course/modern-javascript-from-the-beginning/)
- [JavaScript Web Projects: 20 Projects to Build Your Portfolio](https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/)

## List of Games to learn JavaScript by playing

- [JSRobot](https://lab.reaal.me/jsrobot/)
- [JSdares](https://jsdares.com/)
- [CodeCombat](https://codecombat.com/)
- [CodinGame](https://www.codingame.com/start)
- [Crunchzilla](https://www.crunchzilla.com/)
- [Screeps](https://screeps.com/)

## List of Blogs Sites to learn JavaScript

- [Freecodecamp](https://www.freecodecamp.org/news)
- [Medium](https://medium.com/)
- [Dev.to](https://dev.to/)
- [Hashnode](https://hashnode.com/)
- [Hacker Noon](https://hackernoon.com/)

## List of JavaScript Online Editors/Compilers

- [Programiz JavaScript Online Compiler](https://www.programiz.com/javascript/online-compiler/)
- [W3School JavaScript Online Editor](https://www.w3schools.com/js/js_editor.asp)
- [Playcode](https://playcode.io/javascript-online)
- [JSFiddle](https://jsfiddle.net/)
- [One Complier](https://onecompiler.com/javascript)
- [Tutorialspoint Online JavaScript Editor](https://www.tutorialspoint.com/online_javascript_editor.php)
- [myComplier](https://www.mycompiler.io/online-javascript-editor)
- [JS.do](https://js.do/)
- [Codingninjas Online JavaScript Compiler](https://www.codingninjas.com/codestudio/online-compiler/online-javascript-compiler)
- [Codepen](https://codepen.io/)
- [Replit](https://replit.com/~)

## List of Twitter Users

- [Csaba Kissi](https://twitter.com/csaba_kissi)
- [Codermarch](https://twitter.com/codemarch)
- [Swapna Kumar Panda](https://twitter.com/swapnakpanda)
- [Pratham](https://twitter.com/Prathkum)

## List of LinkedIn Users

- [Adrian Bogdan](https://www.linkedin.com/in/adrian-%F0%9F%9F%A3-b-b52348181/)
- [Jayesh Choudary](https://www.linkedin.com/in/jayesh-choudhary-72444518b/)
- [Pradeep Pandey](https://www.linkedin.com/in/pradeep-pandey-5a545a163/)

[Back to top⤴️](#table-of-contents)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/TheLearningHubOrg/learn-javascript/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Asabeneh](https://github.com/Asabeneh/30-Days-Of-JavaScript) - For his 30 Days of JavaScript challenge.
- [JavaScript.info](https://javascript.info/) - For their comprehensive JavaScript tutorials.
- [W3Schools](https://www.w3schools.com/) - For their interactive JavaScript tutorials.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - For their detailed JavaScript documentation.
- [FreeCodeCamp](https://www.freecodecamp.org/) - For their JavaScript tutorials and projects.
- [Programiz](https://www.programiz.com/) - For their simple and easy-to-understand JavaScript tutorials.
- [GeeksforGeeks](https://www.geeksforgeeks.org/) - For their JavaScript articles and tutorials.
- [DevDocs](https://devdocs.io/) - For their JavaScript documentation.
- [Codecademy](https://www.codecademy.com/) - For their interactive JavaScript courses.
- [Stack Overflow](https://stackoverflow.com/) - For their vast collection of JavaScript questions and answers.

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](/assets/bmc-button.svg)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green)]([https://](https://github.com/sponsors/manthanank))

---

Show your support by 🌟 the repository.
