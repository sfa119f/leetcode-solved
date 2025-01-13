/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  const arrChar = Array(26).fill(0)
  const charCodeA = 'a'.charCodeAt(0)
  for (let c of s) {
    arrChar[c.charCodeAt(0) - charCodeA]++
  }

  let res = 0
  for (let i = 0; i < 26; i++) {
    if (arrChar[i] === 0) continue
    if (arrChar[i] % 2 == 1) res += 1
    else res += 2
  }
  return res
};