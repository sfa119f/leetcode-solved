/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    total += Math.abs(i - t.indexOf(s[i]))
  }
  return total
};