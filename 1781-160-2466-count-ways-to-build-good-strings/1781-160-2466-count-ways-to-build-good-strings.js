/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const mod = 1e9 + 7
  const dp = new Int32Array(high + 1)
  dp[0] = 1
  
  let res = 0
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod
    if (i >= low) res = (res + dp[i]) % mod
  }
  return res
};