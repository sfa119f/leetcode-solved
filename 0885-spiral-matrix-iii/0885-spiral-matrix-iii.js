/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const totalCell = rows * cols
  let cellVisited = 0
  const result = []
  
  const toUp = (x, y, n) => {
    if (cellVisited >= totalCell) {
      return 
    }
    for (let i = 0; i < n; i++) {
      x--
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        result.push([x, y])    
        cellVisited++
      }
    }
    toRight(x, y, n + 1)
  }
  
  const toLeft = (x, y, n) => {
    if (cellVisited >= totalCell) {
      return 
    }
    for (let i = 0; i < n; i++) {
      y--
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        result.push([x, y])    
        cellVisited++
      }
    }
    toUp(x, y, n)
  }
  
  const toDown = (x, y, n) => {
    if (cellVisited >= totalCell) {
      return 
    }
    for (let i = 0; i < n; i++) {
      x++
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        result.push([x, y])    
        cellVisited++
      }
    }
    toLeft(x, y, n + 1)
  }
  
  const toRight = (x, y, n) => {
    if (cellVisited >= totalCell) {
      return 
    }
    for (let i = 0; i < n; i++) {
      y++
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        result.push([x, y])    
        cellVisited++
      }
    }
    toDown(x, y, n)
  }
  
  result.push([rStart, cStart])
  cellVisited++
  toRight(rStart, cStart, 1)
  
  return result
};