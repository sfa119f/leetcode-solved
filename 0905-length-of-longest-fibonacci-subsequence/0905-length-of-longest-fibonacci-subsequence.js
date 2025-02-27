/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  const n = arr.length

  const indexMap = new Map()
  for (let i = 0; i < n; i++) {
    indexMap.set(arr[i], i)
  }

  const dp = new Map()
  let maxLength = 0
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const prev = arr[j] - arr[i]
      if (prev < arr[i] && indexMap.has(prev)) {
        const k = indexMap.get(prev)
        const key = (k << 16) | i
        const currentLength = (dp.get(key) || 2) + 1

        dp.set((i << 16) | j, currentLength)
        maxLength = Math.max(maxLength, currentLength)
      }
    }
  }

  return maxLength >= 3 ? maxLength : 0;
};