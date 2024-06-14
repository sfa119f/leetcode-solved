/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  const maxVal = Math.max(...nums)
  
  const arr = []
  for (let i = 0; i < maxVal + 1; i++) {
    arr.push(0)
  }
  
  for (let num of nums) {
    arr[num] += 1
  }
  
  let count = 0
  for (let i = 0; i < maxVal; i++) {
    if (arr[i] == 1 || arr[i] == 0) continue
    
    arr[i + 1] += arr[i] - 1
    count += arr[i] - 1
  }
  
  while (arr[maxVal] > 1) {
    arr[maxVal]--
    count += arr[maxVal]
  } 
  
  
  return count
};