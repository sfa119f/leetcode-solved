/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  let min = Math.min(x, y)
  let countA = 0, countB = 0, total = 0
  
  for (const c of s) {
    if (c == 'a') {
      if (x < y && countB > 0) {
        countB--;
        total += y;
      } else {
        countA++;
      }
    } else if (c == 'b') {
      if (x > y && countA > 0) {
        countA--;
        total += x;
      } else {
        countB++;
      }
    } else {
      total += Math.min(countA, countB) * min
      countA = 0
      countB = 0
    }
  }
  
  total += Math.min(countA, countB) * min
  return total
};