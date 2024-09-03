/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let res = 0
  
  for (let i = 0; i < s.length; i++) {
    let temp = s[i].charCodeAt(0) - 96
    if (temp >= 10) {
      res += (Math.floor(temp / 10) % 10) + (temp % 10)
    } else {
      res += temp
    }
  }
  
  while (k > 1) {
    let temp = 0
    while (res >= 1) {
      temp += (res % 10)
      res = Math.floor(res / 10)
    }
    res = temp
    k--
  }
  
  return res
};