/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  const sqr = Math.sqrt(c)
  if (sqr % 1 === 0) return true
  
  let i = 1
  while (i < sqr) {
    if (Math.sqrt(c - (i * i)) % 1 === 0) return true
    i++
  }
  return false
};