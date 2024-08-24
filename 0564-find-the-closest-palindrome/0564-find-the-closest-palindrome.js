/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const getDistance = (n) => {
    const s = n + ''
    let i = 0
    let j = s.length - 1
    while (i < j) {
      if (s[i++] !== s[j--]) return 10 ** (i - 1)
    }
    return 0
  }
  
  const bit = BigInt(n)
  const num = [bit - 1n, bit + 1n]
  while (true) {
    const d1 = getDistance(num[0])
    if (d1 === 0) break
    num[0] -= BigInt(d1)
  }
  while (true) {
    const d2 = getDistance(num[1])
    if (d2 === 0) break
    num[1] += BigInt(d2)
  }
  
  return bit - num[0] <= num[1] - bit ? String(num[0]) : String(num[1])
};