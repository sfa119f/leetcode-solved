/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let maxBitwiseAnd = Math.max(...nums)
  let maxi = 1
  let count = 0
  let i = 0

  while (i < nums.length) {
    if (nums[i] === maxBitwiseAnd) {
      while (i < nums.length && nums[i] === maxBitwiseAnd) {
        count++
        i++
      }
      maxi = Math.max(maxi, count)
      count = 0
    } else {
      i++
    }
  }

  return maxi
};