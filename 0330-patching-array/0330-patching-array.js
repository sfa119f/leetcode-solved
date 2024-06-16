/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let temp = 1
  let added = 0
  let idx = 0
  while (temp <= n) {
    if (idx < nums.length && nums[idx] <= temp) {
      temp += nums[idx]
      idx++
    } else {
      temp *= 2
      added++
    }
  }
  return added
};