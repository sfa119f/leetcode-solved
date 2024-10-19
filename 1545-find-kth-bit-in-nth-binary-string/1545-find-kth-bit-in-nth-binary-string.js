/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let s='0'
  let noda = [1]
  for (let i = 1; i < n; i++){
    noda[i] = 2 * noda[i-1] + 1
  }
  function findDigit(i,n){
    if (n == 0) return '0'
    
    let mid = (noda[n] - 1) / 2
    if (i == mid) {
      return '1'
    } else if (i < mid) {
      return findDigit(i,n-1)
    } else if (findDigit(mid - (i - mid), n - 1) == '0') {
      return '1'
    }
    return '0'
  }
  
  return findDigit(k-1,n-1)
};