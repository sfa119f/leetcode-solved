/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i.toString())
  }
  arr.sort()
  return arr.map(v => Number(v))
};