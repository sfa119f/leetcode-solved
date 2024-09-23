/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
  const dp = new Array(s.length + 1).fill(-1)

  function minExtraCharHelper(i) {
    if (i === 0) return 0

    if (dp[i] !== -1) return dp[i]

    dp[i] = 1 + minExtraCharHelper(i - 1)

    for (const w of dictionary) {
      if (i >= w.length && s.slice(i - w.length, i) === w) {
        dp[i] = Math.min(dp[i], minExtraCharHelper(i - w.length))
      }
    }

    return dp[i]
  }

  return minExtraCharHelper(s.length)
};