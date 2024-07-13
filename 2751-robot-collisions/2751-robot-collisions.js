/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
  const idxPosSorted = Array.from(Array(positions.length).keys())
  idxPosSorted.sort((a, b) => positions[a] - positions[b])
  
  const temp = []
  for (const idx of idxPosSorted) {
    if (directions[idx] == "R") {
      temp.push(idx)
    } else {
      while (temp.length != 0 && healths[idx] > 0) {
        if (healths[idx] > healths[temp[temp.length - 1]]) {
          healths[idx]--
          healths[temp.pop()] = 0
        } else if (healths[idx] < healths[temp[temp.length - 1]]) {
          healths[idx] = 0
          healths[temp[temp.length - 1]]--
        } else {
          healths[idx] = 0
          healths[temp.pop()] = 0
        }
      }
    }
  }
  return healths.filter(val => val > 0)
};