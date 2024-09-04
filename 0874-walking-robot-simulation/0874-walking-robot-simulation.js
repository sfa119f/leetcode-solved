/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // directions: North, East, South, West
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let currentDirection = 0
  let x = 0, y = 0
  let maxDistanceSquared = 0

  const obstacleSet = new Set(obstacles.map(obstacle => obstacle.toString()))

  // Process each command
  for (let command of commands) {
    if (command === -2) {
      currentDirection = (currentDirection + 3) % 4;
    } else if (command === -1) {
      currentDirection = (currentDirection + 1) % 4;
    } else {
      for (let step = 0; step < command; step++) {
        const nextX = x + directions[currentDirection][0]
        const nextY = y + directions[currentDirection][1]

        if (obstacleSet.has([nextX, nextY].toString())) {
          break
        }
        
        x = nextX
        y = nextY

        maxDistanceSquared = Math.max(maxDistanceSquared, x * x + y * y)
      }
    }
  }

  return maxDistanceSquared
};