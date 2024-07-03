/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  const n = nums.length
  if (n < 5) return 0
  
  nums.sort((a, b) => a - b)
  const arr = []
  
  for (let i = 0; i <= 3; i++) {
    const diff =  (nums[3 - i] - nums[0]) + (nums[n - 1] - nums[n - 1 - i])
    arr.push([diff, 3 - i, n - i - 1])
  }
  
  const idx = arr.reduce((res, val, idx) => val[0] > arr[res][0]  ? idx : res, 0)
  
  return nums[arr[idx][2]] - nums[arr[idx][1]]
};