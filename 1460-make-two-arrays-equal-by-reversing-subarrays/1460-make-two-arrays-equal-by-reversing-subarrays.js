/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  const maxValue = Math.max(...arr)
  
  const tempArr = Array(maxValue).fill(0)
  for (let i = 0; i < arr.length; i++) {
    tempArr[arr[i] - 1]++
  }
  for (let i = 0; i < target.length; i++) {
    if (target[i] > maxValue || !tempArr[target[i] - 1]) {
      return false
    } else {
      tempArr[target[i] - 1]--
    }
  }
  return true
};