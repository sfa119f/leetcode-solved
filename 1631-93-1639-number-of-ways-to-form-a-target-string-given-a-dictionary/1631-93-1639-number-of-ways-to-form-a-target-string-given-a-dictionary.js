/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const MOD = 1e9 + 7;
  const n = words[0].length
  const m = target.length

  const freq = Array.from({ length: n }, () => Array(26).fill(0))

  for (let word of words) {
    for (let i = 0; i < n; i++) {
      freq[i][word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
  }

  const memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1))

  function traverse(level, index) {
    if (index == m) return 1
    if (level == n) return 0

    if (memo[level][index] != -1) return memo[level][index]

    let ways = traverse(level + 1, index);

    if (freq[level][target[index].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
      ways = (ways + freq[level][target[index].charCodeAt(0) - 'a'.charCodeAt(0)] * traverse(level + 1, index + 1)) % MOD
    }

    return memo[level][index] = ways
  }

  return traverse(0, 0)
};