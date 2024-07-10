/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let res = 0
  for (const log of logs) {
    if (log == "../") {
      res = res ? res - 1 : 0
    } else if (log == "./") {
      continue
    } else {
      res++
    }
  }
  return res
};