/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let countOpen = 0, countClose = 0
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      countOpen++
    } else {
      if (countOpen == 0) {
        countClose++
      } else {
        countOpen--
      }
    }
  }
  
  return countOpen + countClose
};