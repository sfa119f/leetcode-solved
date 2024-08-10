/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const n = grid.length
  const arrLength = n * 3
  const arr = Array(arrLength).fill().map(_ => Array(arrLength).fill(0))
  
  const dfs = (a , b) => {
    if (Math.min(a, b) < 0 || Math.max(a, b) >= arrLength || arr[a][b] != 0) {
      return 0
    }
    arr[a][b] = 1
    return 1 + dfs(a - 1, b) + dfs(a + 1, b) + dfs(a, b - 1) + dfs(a, b + 1)
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '/') {
        arr[i * 3][j * 3 + 2] = arr[i * 3 + 1][j * 3 + 1] = arr[i * 3 + 2][j * 3] = 1
      }
      else if (grid[i][j] == '\\') {
        arr[i * 3][j * 3] = arr[i * 3 + 1][j * 3 + 1] = arr[i * 3 + 2][j * 3 + 2] = 1
      }
    }
  }
  
  let result = 0
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (dfs(i, j) > 0) {
        result++
      }
    }
  }
  return result
  
};