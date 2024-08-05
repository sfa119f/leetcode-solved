/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const frequency = new Map();
  for (const str of arr) {
    frequency.set(str, (frequency.get(str) || 0) + 1);
  }

  for (const str of arr) {
    if (frequency.get(str) === 1 && --k === 0) {
      return str;
    }
  }
  return "";
};