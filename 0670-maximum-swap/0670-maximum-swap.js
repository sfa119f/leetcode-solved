/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let numStr = num.toString().split("")
  
  let swapIdx = [-1, -1], maxDigitIdx = -1 
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (maxDigitIdx == -1 || numStr[i] > numStr[maxDigitIdx]) {
      maxDigitIdx = i
    } else if (numStr[i] < numStr[maxDigitIdx]) {
      swapIdx = [i, maxDigitIdx]
    }
  }
  
  if (swapIdx[0] != -1 && swapIdx[1] != -1) {
    const temp = numStr[swapIdx[0]]
    numStr[swapIdx[0]] = numStr[swapIdx[1]] 
    numStr[swapIdx[1]] = temp
  }
  
  return Number(numStr.join(""))
};