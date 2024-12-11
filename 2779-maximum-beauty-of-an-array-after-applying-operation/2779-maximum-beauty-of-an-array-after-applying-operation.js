/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  const n = nums.length
  if (n == 1) return 1
  
  const maxNum = Math.max(...nums)
  const trackRange = new Array(maxNum + 1).fill(0)
  
  for (let num of nums) {
    trackRange[Math.max(0, num - k)] += 1
    trackRange[Math.min(maxNum, num + k + 1)] -= 1
  }
  
  let res = 0, sum = 0
  for (let val of trackRange) {
    sum += val
    res = Math.max(res, sum)
  }
  return res
};