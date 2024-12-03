/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let res = '', j = 0
  for (let i = 0; i < s.length; i++) {
    if (i == spaces[j]) {
      res += ' '
      j++
    }
    res += s[i]
  }
  
  return res
};