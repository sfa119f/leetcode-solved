/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  let result = 0, countB = 0
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'b') countB++
    else result = Math.min(++result, countB)
  }
  
  return result
};