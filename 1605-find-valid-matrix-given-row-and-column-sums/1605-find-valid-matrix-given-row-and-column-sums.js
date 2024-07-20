/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const result = []
  for (let i = 0; i < rowSum.length; i++) {
    const temp = []
    for (let j = 0; j < colSum.length; j++) {
      const minVal = Math.min(rowSum[i], colSum[j])
      temp.push(minVal)
      rowSum[i] -= minVal
      colSum[j] -= minVal
    }
    result.push(temp)
  }
  return result
};