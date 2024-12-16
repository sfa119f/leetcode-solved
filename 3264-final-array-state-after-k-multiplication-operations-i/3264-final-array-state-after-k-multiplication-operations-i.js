/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  while(k--) {
      let min = Math.min(...nums)
      let idx = nums.indexOf(min)
      nums[idx] *=  multiplier
  }
  return nums
};