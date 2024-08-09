/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const magicSquares = new Set()

  function init() {
    let base = [[4,9,2], [3,5,7], [8,1,6]]
    for (let i = 0; i < 8; i++) {
      let rotated = rotate(base)
      magicSquares.add(hash(rotated))
      base = rotated
      if (i === 3) {
        base = reflect(base)
      }
    }
  }

  function rotate(grid) {
    let rotated = Array(3).fill().map(() => Array(3).fill(0))
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rotated[j][2-i] = grid[i][j]
      }
    }
    return rotated
  }

  function reflect(grid) {
    let reflected = Array(3).fill().map(() => Array(3).fill(0))
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        reflected[i][2-j] = grid[i][j]
      }
    }
    return reflected
  }

  function hash(grid) {
    return grid.flat().join('')
  }

  function isValid(grid, row, col) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let num = grid[row + i][col + j]
        if (num < 1 || num > 9) return false
      }
    }
    return true
  }

  function extractSubgrid(grid, row, col) {
    let subgrid = Array(3).fill().map(() => Array(3).fill(0))
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        subgrid[i][j] = grid[row + i][col + j]
      }
    }
    return subgrid
  }

  init()

  let count = 0
  let rows = grid.length, cols = grid[0].length

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      if (isValid(grid, i, j) && magicSquares.has(hash(extractSubgrid(grid, i, j)))) {
        count++
      }
    }
  }

  return count
};