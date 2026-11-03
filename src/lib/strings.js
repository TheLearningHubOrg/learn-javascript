/**
 * Stage 2: strings are immutable sequences of UTF-16 code units. These helpers
 * use Intl.Segmenter so an emoji or an accented letter counts as one character.
 */

const wordSegmenter = new Intl.Segmenter('en', { granularity: 'word' });
const graphemeSegmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });

/** Number of user-perceived characters (grapheme clusters). */
export function graphemeLength(text) {
  let count = 0;
  for (const _segment of graphemeSegmenter.segment(text)) count += 1;
  return count;
}

/** Cut text to `max` graphemes without splitting an emoji in half. */
export function truncate(text, max, ellipsis = '\u2026') {
  const parts = Array.from(graphemeSegmenter.segment(text), (s) => s.segment);
  return parts.length <= max ? text : parts.slice(0, max).join('') + ellipsis;
}

/** Lower-case words; the segmenter's isWordLike flag skips spaces and punctuation. */
export function words(text) {
  return Array.from(wordSegmenter.segment(text))
    .filter((s) => s.isWordLike)
    .map((s) => s.segment.toLowerCase());
}

/** URL-friendly slug: strip accents, keep a-z and 0-9, join with dashes. */
export function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Word statistics returned by POST /api/text/stats. */
export function textStats(text, top = 3) {
  const list = words(text);
  const counts = new Map();
  for (const w of list) counts.set(w, (counts.get(w) ?? 0) + 1);
  const topWords = [...counts]
    .sort(([wa, ca], [wb, cb]) => cb - ca || wa.localeCompare(wb))
    .slice(0, top)
    .map(([word, count]) => ({ word, count }));
  return {
    characters: graphemeLength(text),
    codeUnits: text.length,
    words: list.length,
    uniqueWords: counts.size,
    topWords,
    slug: slugify(text.slice(0, 60)),
  };
}

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Tagged template that HTML-escapes every interpolated value. */
export function html(strings, ...values) {
  return strings.reduce((out, chunk, i) => {
    const escaped = String(values[i - 1]).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
    return out + escaped + chunk;
  });
}
