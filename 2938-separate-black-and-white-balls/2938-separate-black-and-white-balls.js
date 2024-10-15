/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let count = 0, steps = 0
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == 0) count++
    else steps += count
  }
  
  return steps
};