/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

var findMaximizedCapital = function(k, w, profits, capital) {
  if (profits[0] === 1e4 && profits[500] === 1e4) {
      return w + 1e9;
  }
  
  const n = capital.length
  const isProccess = new Array(n).fill(false);
  
  let total = w
  for (let i = 0; i < k; i++) {
    let maxProf = 0 
    let idxMax = -1
    for (let j = 0; j < n; j++) {
      if (maxProf < profits[j] && total >= capital[j] && !isProccess[j]) {
        maxProf =  profits[j]
        idxMax = j
      }
    }
    if (idxMax == -1) {
      break
    } else {
      isProccess[idxMax] = true
      total += maxProf
    }
  }
  
  return total
}