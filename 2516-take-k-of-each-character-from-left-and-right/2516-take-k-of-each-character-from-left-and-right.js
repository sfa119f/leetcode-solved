/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  const n = s.length
  if (n < k * 3) return -1
  
  const count = [0, 0, 0]
  for (let c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  if (Math.min(...count) < k) return -1

  let res = n
  let l = 0
  for (let r = 0; r < n; r++) {
    count[s.charCodeAt(r) - 'a'.charCodeAt(0)]--

    while (Math.min(...count) < k) {
      count[s.charCodeAt(l) - 'a'.charCodeAt(0)]++
      l++
    }

    res = Math.min(res, s.length - (r - l + 1))
  }
  return res
};