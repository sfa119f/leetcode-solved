/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  const len = nums.length
  let temp = 1
  let added = 0
  let idx = 0
  while (temp <= n) {
    if (idx < len && nums[idx] <= temp) {
      temp += nums[idx++]
    } else {
      temp *= 2
      added++
    }
  }
  return added
};