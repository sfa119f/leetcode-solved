/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
  const temp = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in temp) temp[s[i]] += i
    else temp[s[i]] = i
    
    if (t[i] in temp) temp[t[i]] -= i
    else temp[t[i]] = i * -1
  }
  
  let total = 0
  for (const key in temp) {
    total += Math.abs(temp[key])
  }
  return total
};