/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let countChr = 1
  let chrNow = s[0]
  
  let res = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] == chrNow) {
      if (countChr == 2) continue
      countChr++
    } else {
      countChr = 1
      chrNow = s[i]
    }
    res += s[i]
  }
  
  return res
};