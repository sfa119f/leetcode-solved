/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
  let count = 0
  let temp = 0

  for (let i = 0; i < nums.length; i++) {
    if (i >= k && nums[i - k] == 2) {
      temp--
    }
    
    if (temp % 2 == nums[i]) {
      if (i + k > nums.length) {
        return - 1
      }
      nums[i] = 2
      temp++
      count++
    }
  }
  return count
};