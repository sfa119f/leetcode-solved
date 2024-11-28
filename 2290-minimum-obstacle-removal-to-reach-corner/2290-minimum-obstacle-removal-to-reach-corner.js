/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], ];

  const deque = new Deque([[0, 0, 0]])
  const visited = new Set(["0,0"])

  while (!deque.isEmpty()) {
    const [x, y, obstaclesRemoved] = deque.popFront()

    if (x === m - 1 && y === n - 1) {
      return obstaclesRemoved
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited.has(`${nx},${ny}`)) {
        visited.add(`${nx},${ny}`)
        if (grid[nx][ny] === 0) {
          deque.pushFront([nx, ny, obstaclesRemoved])
        } else {
          deque.pushBack([nx, ny, obstaclesRemoved + 1])
        }
      }
    }
  }

  return -1
};