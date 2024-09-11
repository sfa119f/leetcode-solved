/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  const bin = (start ^ goal).toString(2)
  return bin.split(1).length - 1
};