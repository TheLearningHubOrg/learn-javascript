import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { graphemeLength, truncate, words, slugify, textStats, html } from '../src/lib/strings.js';
import { pipe, compose, once, memoize, partial } from '../src/lib/functions.js';
import { chunk, uniqueBy, countBy } from '../src/lib/collections.js';

describe('strings', () => {
  it('counts graphemes, not UTF-16 code units', () => {
    const family = '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}';
    assert.equal(family.length, 8);
    assert.equal(graphemeLength(family), 1);
    assert.equal(graphemeLength('cafe\u0301'), 4);
  });

  it('truncates without breaking an emoji', () => {
    assert.equal(truncate('hi \u{1F44B}\u{1F3FD} there', 4), 'hi \u{1F44B}\u{1F3FD}\u2026');
    assert.equal(truncate('short', 10), 'short');
  });

  it('splits words and builds slugs', () => {
    assert.deepEqual(words('Hello, world! Hello.'), ['hello', 'world', 'hello']);
    assert.equal(slugify('  Crème Brûlée: 2 Ways! '), 'creme-brulee-2-ways');
  });

  it('reports text statistics sorted by count then word', () => {
    const stats = textStats('b a b c a b', 2);
    assert.deepEqual(stats.topWords, [
      { word: 'b', count: 3 },
      { word: 'a', count: 2 },
    ]);
    assert.equal(stats.words, 6);
    assert.equal(stats.uniqueWords, 3);
  });

  it('escapes interpolated values in the html tag', () => {
    const name = '<img src=x onerror=alert(1)>';
    assert.equal(html`<p>${name}</p>`, '<p>&lt;img src=x onerror=alert(1)&gt;</p>');
  });
});

describe('functions', () => {
  it('composes in both directions', () => {
    const inc = (n) => n + 1;
    const double = (n) => n * 2;
    assert.equal(pipe(inc, double)(3), 8);
    assert.equal(compose(inc, double)(3), 7);
  });

  it('runs once and keeps the first result', () => {
    let calls = 0;
    const init = once(() => ++calls);
    assert.equal(init(), 1);
    assert.equal(init(), 1);
    assert.equal(calls, 1);
  });

  it('memoizes and evicts the oldest entry', () => {
    let calls = 0;
    const square = memoize(
      (n) => {
        calls += 1;
        return n * n;
      },
      { maxSize: 2 },
    );
    square(2);
    square(2);
    square(3);
    square(4);
    assert.equal(calls, 3);
    assert.deepEqual([...square.cache.keys()], ['[3]', '[4]']);
  });

  it('applies arguments partially', () => {
    const greet = (greeting, name) => `${greeting}, ${name}`;
    assert.equal(partial(greet, 'Hi')('Ada'), 'Hi, Ada');
  });
});

describe('arrays', () => {
  it('chunks and dedupes', () => {
    assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    assert.throws(() => chunk([1], 0), RangeError);
    const users = [
      { id: 1, n: 'a' },
      { id: 1, n: 'b' },
      { id: 2, n: 'c' },
    ];
    assert.deepEqual(
      uniqueBy(users, (u) => u.id).map((u) => u.n),
      ['a', 'c'],
    );
  });
});

describe('countBy (Stage 2 exercise)', () => {
  it('counts per key, highest first, ties in first-seen order', () => {
    const files = ['a.js', 'b.md', 'c.js', 'd.json', 'e.md', 'f.js', 'g.css'];
    const byExt = countBy(files, (f) => f.slice(f.lastIndexOf('.') + 1));
    assert.deepEqual(
      [...byExt],
      [
        ['js', 3],
        ['md', 2],
        ['json', 1],
        ['css', 1],
      ],
    );
    assert.equal(countBy([], (x) => x).size, 0);
  });
});
