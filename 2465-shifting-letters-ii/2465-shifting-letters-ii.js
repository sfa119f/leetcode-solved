/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const n = s.length
  const shift = Array(n + 1).fill(0)

  for (let shiftOp of shifts) {
    const [start, end, direction] = shiftOp
    shift[start] += direction === 1 ? 1 : -1
    if (end + 1 < n) shift[end + 1] -= direction === 1 ? 1 : -1
  }

  let currentShift = 0;
  let result = s.split('')
  for (let i = 0; i < n; ++i) {
    currentShift += shift[i]
    shift[i] = currentShift
  }

  for (let i = 0; i < n; ++i) {
    let netShift = (shift[i] % 26 + 26) % 26
    result[i] = String.fromCharCode('a'.charCodeAt(0) + (s.charCodeAt(i) - 'a'.charCodeAt(0) + netShift) % 26)
  }

  return result.join('')
};
