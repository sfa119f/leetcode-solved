/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  const freqMap = new Map()
  for (const c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1)
  }

  let singleCount = 0
  for (const freq of Array.from(freqMap.values())) {
    if (freq % 2 === 1) {
      singleCount++
    }
  }
  return singleCount <= k && k <= s.length
};