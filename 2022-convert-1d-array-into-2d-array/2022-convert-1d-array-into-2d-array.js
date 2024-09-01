/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (m * n != original.length) return []
  
  const res = []
  let i = 0
  while (m > 0) {
    res.push(original.slice(i * n, (i + 1) * n))
    i++
    m--
  }
  return res
};