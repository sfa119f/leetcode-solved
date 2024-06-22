/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let res = 0
  let oddIdx = []
  let lastPop = -1
  let initialGap = -1
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      oddIdx.push(i)
    }
    
    if (oddIdx.length > k) {
      lastPop = oddIdx.shift()
    }
    if (oddIdx.length === k) {
      initialGap = oddIdx[0] - lastPop
      res += initialGap
    } 
  }
  
  return res
};