/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  const temp = time % ((n - 1) * 2)
  if (temp <= n - 1) {
    return 1 + temp
  }
  return n - (temp % (n - 1))
};