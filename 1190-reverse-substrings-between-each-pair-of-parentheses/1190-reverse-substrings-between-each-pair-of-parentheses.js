/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const arr = []
  const pair = Array(s.length).fill(0)
  
  for (const i in s) {
    if (s[i] == "(") {
      arr.push(i)
    }
    if (s[i] == ")") {
      const j = arr.pop()
      pair[i] = Number(j)
      pair[j] = Number(i)
    }
  }
  
  let res = []
  let idx = 0, dir = 1
  
  while (idx < s.length) {
    if (s[idx] == "(" || s[idx] == ")") {
      idx = pair[idx]
      dir *= -1
    } else {
      res.push(s[idx])
    }
    idx += dir
  }
  return res.join("")
};