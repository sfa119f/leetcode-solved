/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const temp = [0, 0, 0]
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]]++
    nums[i] = 0
  }
  for (let i = temp[0]; i < temp[0] + temp[1]; i++) {
    nums[i] = 1
  }
  for (let i = temp[0] + temp[1]; i < nums.length; i++) {
    nums[i] = 2
  }
};