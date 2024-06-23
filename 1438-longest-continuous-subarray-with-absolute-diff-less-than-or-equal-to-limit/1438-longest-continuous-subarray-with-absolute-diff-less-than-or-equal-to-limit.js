/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let min = []
  let max = []
  let initialIdx = 0
  let res = 0
  
  for (let i = 0; i < nums.length; i++) {
    while (max.length > 0 && max[max.length - 1] < nums[i]) {
      max.pop()
    }
    max.push(nums[i])
    
    while (min.length > 0 && min[min.length - 1] > nums[i]) {
      min.pop()
    }
    min.push(nums[i])
    
    while (max[0] - min[0] > limit) {
      if (max[0] === nums[initialIdx]) {
        max.shift()
      }
      if (min[0] === nums[initialIdx]) {
        min.shift()
      }
      initialIdx++
    }
    
    res = Math.max(res, i - initialIdx + 1)
  }
  
  return res
};