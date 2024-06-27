/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let obj = {}
  for (const edge of edges) {
    for (const val of edge) {
      if (val in obj) {
        obj[val]++
      } else {
        obj[val] = 0
      }
    }
  }
  let res = -1
  let maxCount = 0
  for (const val in obj) {
    if (obj[val] > maxCount) {
      res = val
      maxCount = obj[val]
    }
  }
  return res
};