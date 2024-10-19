/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let s = "0"
  let i = 1
  while (Math.pow(2, i) - 1 < k && n != i) {
    i++
    let temp = s
    s += "1"
    for (let j = Math.pow(2, i - 1) - 2; j >= 0; j--) {
      if (temp[j] == "0") s += "1"
      else s += "0"
    }
  }
  return s[k - 1]
};