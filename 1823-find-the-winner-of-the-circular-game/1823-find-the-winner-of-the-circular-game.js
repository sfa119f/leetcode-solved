/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  let res = 0
  for (let i = 2; i < n + 1; i++) {
    res = (res + k) % i
  }
  return res + 1
};