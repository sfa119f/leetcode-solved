/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const setData = new Set()
  
  let checkVal
  for (let i = 0; i < arr.length; i++) {
    if (setData.has(arr[i])) return true
    
    setData.add(arr[i] / 2)
    setData.add(arr[i] * 2)
  }
  
  return false
};