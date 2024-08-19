/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let res = 0
  let primeFactor = 2
  
  while (n > 1) {
    while (n % primeFactor == 0) {
      res += primeFactor
      n /= primeFactor
    }
    primeFactor++
  }
  
  return res
};