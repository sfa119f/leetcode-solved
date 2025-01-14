/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const n = A.length
  const mapPrefix = new Map()
  const res = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (i !== 0) res[i] = res[i - 1]

    if (A[i] === B[i]) {
      mapPrefix.set(A[i], 2)
      res[i]++
    } else {
      mapPrefix.set(A[i], (mapPrefix.get(A[i]) || 0) + 1)
      mapPrefix.set(B[i], (mapPrefix.get(B[i]) || 0) + 1)

      if (mapPrefix.get(A[i]) == 2) {
        res[i]++
      }
      if (mapPrefix.get(B[i]) == 2) {
        res[i]++
      }
    }
  }

  return res
};