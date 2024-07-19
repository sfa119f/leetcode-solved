/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const arrMinRow = matrix.map(row => Math.min(...row))
  
  const arrMaxCol = matrix.reduce((res, row) => {
    for (let i = 0; i < row.length; i++) {
      res[i] = Math.max(res[i], row[i])
    }
    return res
  }, Array(matrix[0].length).fill(0))
  
  const result = []
  for (const val of arrMinRow) {
    if (arrMaxCol.includes(val)) {
      result.push(val)
    }
  }
  return result
};