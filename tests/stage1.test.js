import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { typeTag, conversions, toSafeInteger, parseBoolean } from '../src/lib/types.js';
import { toCents, formatCents, nearlyEqual, clamp, sumBig } from '../src/lib/numbers.js';

describe('typeTag', () => {
  it('fixes the typeof null and array cases', () => {
    assert.equal(typeof null, 'object');
    assert.equal(typeTag(null), 'null');
    assert.equal(typeTag([]), 'array');
    assert.equal(typeTag(new Date(0)), 'date');
    assert.equal(typeTag(new Map()), 'map');
    assert.equal(
      typeTag(() => {}),
      'function',
    );
    assert.equal(typeTag(10n), 'bigint');
    assert.equal(typeTag(Symbol('x')), 'symbol');
  });
});

describe('conversions', () => {
  it('shows that Number("") is 0 while parseInt("") is NaN', () => {
    const r = conversions('');
    assert.equal(r.number, 0);
    assert.equal(r.parseInt, 'NaN');
    assert.equal(r.boolean, false);
    assert.equal(r.looseEqualsZero, true);
  });

  it('shows that the string "false" is truthy', () => {
    assert.equal(conversions('false').boolean, true);
  });

  it('shows parseInt stopping at the first non-digit', () => {
    const r = conversions('42px');
    assert.equal(r.number, 'NaN');
    assert.equal(r.parseInt, 42);
  });
});

describe('toSafeInteger', () => {
  it('accepts plain integers only', () => {
    assert.equal(toSafeInteger(' 17 '), 17);
    assert.equal(toSafeInteger('-3'), -3);
    assert.equal(toSafeInteger('1e3'), null);
    assert.equal(toSafeInteger('0x10'), null);
    assert.equal(toSafeInteger(''), null);
    assert.equal(toSafeInteger('9007199254740993'), null);
    assert.equal(toSafeInteger(2.5), null);
  });
});

describe('numbers', () => {
  it('demonstrates floating point error and the cents fix', () => {
    assert.notEqual(0.1 + 0.2, 0.3);
    assert.ok(nearlyEqual(0.1 + 0.2, 0.3));
    assert.equal(toCents(19.99), 1999);
    assert.equal(toCents(0.1) + toCents(0.2), toCents(0.3));
    assert.throws(() => toCents(Number.NaN), RangeError);
  });

  it('formats cents with Intl.NumberFormat', () => {
    assert.equal(formatCents(123456), '$1,234.56');
  });

  it('clamps and sums beyond the safe integer range', () => {
    assert.equal(clamp(15, 0, 10), 10);
    assert.equal(clamp(-1, 0, 10), 0);
    assert.equal(sumBig([Number.MAX_SAFE_INTEGER, 2]), 9007199254740993n);
  });
});

describe('parseBoolean (Stage 1 exercise)', () => {
  it('accepts common spellings and rejects the rest', () => {
    assert.equal(Boolean('false'), true);
    assert.equal(parseBoolean(' YES '), true);
    assert.equal(parseBoolean('on'), true);
    assert.equal(parseBoolean('0'), false);
    assert.equal(parseBoolean(''), false);
    assert.equal(parseBoolean(undefined), false);
    assert.throws(() => parseBoolean('maybe'), /maybe/);
  });
});
