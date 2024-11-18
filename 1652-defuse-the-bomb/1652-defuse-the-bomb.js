/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const n = code.length
  const absK = Math.abs(k)
  const res = Array(n).fill(0)
  
  if (k == 0) return res
  
  for (let i = 0; i < absK; i++) {
    res[0] += code[i + 1]
  }
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] - code[i] + code[(absK + i) % n]
  }
  
  if (k > 0) return res
  return res.concat(res).slice((k - 1 + n) % n, n + ((k - 1 + n) % n))
};