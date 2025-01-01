/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let count1 = 0
  for (let c of s) {
    if (c == '1') count1++
  }

  if (count1 == 0 || count1 == s.length) {
    return s.length - 1
  }

  let maxVal = 0, leftScore = 0, rightScore = count1
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == '0') leftScore++
    else rightScore--

    maxVal = Math.max(maxVal, leftScore + rightScore)
  }
  return maxVal
};