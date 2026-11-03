/**
 * Stage 1: types, typeof quirks and explicit conversion.
 */

/**
 * A precise type name. `typeof` reports "object" for null and arrays,
 * so objects fall back to the built-in tag from Object.prototype.toString.
 * @param {unknown} value
 * @returns {string}
 */
export function typeTag(value) {
  if (value === null) return 'null';
  const t = typeof value;
  if (t !== 'object' && t !== 'function') return t;
  if (Array.isArray(value)) return 'array';
  if (t === 'function') return 'function';
  // Object.prototype.toString gives "[object Date]", "[object Map]", ...
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * Show what the conversion operations do to one raw input string.
 * The server's /api/types endpoint returns this object as JSON.
 * @param {string} raw
 */
export function conversions(raw) {
  const asNumber = Number(raw);
  const asInt = Number.parseInt(raw, 10);
  return {
    input: raw,
    typeofInput: typeof raw,
    // Number() converts the whole string; '' and whitespace become 0.
    number: Number.isNaN(asNumber) ? 'NaN' : asNumber,
    // parseInt reads digits until the first non-digit; radix 10 is explicit.
    parseInt: Number.isNaN(asInt) ? 'NaN' : asInt,
    // Boolean() is false only for '', so "false" and "0" are true.
    boolean: Boolean(raw),
    // == converts the string to a number before comparing.
    looseEqualsZero: raw == 0, // eslint-disable-line eqeqeq
    strictEqualsZero: raw === 0,
    isSafeInteger: Number.isSafeInteger(asNumber),
  };
}

/**
 * Parse a user-supplied integer without the surprises of Number() and parseInt().
 * Accepts an optional sign plus digits, and only values inside the safe range.
 * @param {unknown} raw
 * @returns {number | null}
 */
export function toSafeInteger(raw) {
  if (typeof raw === 'number') return Number.isSafeInteger(raw) ? raw : null;
  if (typeof raw !== 'string' || !/^[+-]?\d+$/.test(raw.trim())) return null;
  const n = Number(raw.trim());
  return Number.isSafeInteger(n) ? n : null;
}

const TRUE_WORDS = new Set(['true', '1', 'yes', 'on']);
const FALSE_WORDS = new Set(['false', '0', 'no', 'off', '']);

/**
 * Stage 1 exercise solution: parse a boolean flag from an environment variable.
 * Boolean('false') is true, which is the bug this function exists to prevent.
 * @param {string} raw
 * @returns {boolean}
 */
export function parseBoolean(raw) {
  const normalised = String(raw ?? '')
    .trim()
    .toLowerCase();
  if (TRUE_WORDS.has(normalised)) return true;
  if (FALSE_WORDS.has(normalised)) return false;
  throw new TypeError(`Cannot parse ${JSON.stringify(raw)} as a boolean`);
}
