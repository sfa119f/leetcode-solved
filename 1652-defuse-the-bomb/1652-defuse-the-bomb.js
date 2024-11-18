/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const n = code.length
  const absK = Math.abs(k)
  
  if (k == 0) return Array(n).fill(0)
  
  const sum = [0]
  for (let i = 0; i < absK; i++) {
    sum[0] += code[i]
  }
  for (let i = 0; i < n - 1; i++) {
    sum.push(sum[i] - code[i] + code[(absK + i) % n] )
  }
  
  const res = []
  if (k > 0){
    for (let i = 0; i < n; i++) {
      res.push(sum[(i + 1) % n])
    }
  } else {
    for (let i = 0; i < n; i++) {
      res.push(sum[(i + k + n) % n])
    }
  }
  return res
};