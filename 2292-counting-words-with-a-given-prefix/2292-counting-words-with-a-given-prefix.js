/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.reduce((total, w) => total + (w.startsWith(pref) ? 1 : 0), 0)
};