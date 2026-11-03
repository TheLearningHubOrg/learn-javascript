/**
 * Stage 1: number pitfalls. JavaScript numbers are IEEE 754 doubles,
 * so money is stored as integer cents and very large integers as BigInt.
 */

/** Convert a decimal amount such as 19.99 to integer cents (1999). */
export function toCents(amount) {
  if (!Number.isFinite(amount)) throw new RangeError(`not a finite amount: ${amount}`);
  // Math.round absorbs representation error: 19.99 * 100 is 1998.9999999999998.
  return Math.round(amount * 100);
}

/** Format integer cents for display with the runtime's Intl data. */
export function formatCents(cents, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(cents / 100);
}

/** Compare two floats with a relative tolerance instead of ===. */
export function nearlyEqual(a, b, epsilon = Number.EPSILON * 8) {
  return Math.abs(a - b) <= epsilon * Math.max(1, Math.abs(a), Math.abs(b));
}

export function clamp(value, min, max) {
  if (min > max) throw new RangeError('min must be <= max');
  return Math.min(Math.max(value, min), max);
}

/** Sum with BigInt so totals past Number.MAX_SAFE_INTEGER stay exact. */
export function sumBig(values) {
  return values.reduce((total, v) => total + BigInt(v), 0n);
}
