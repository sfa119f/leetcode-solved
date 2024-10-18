/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const n = nums.length
  let maxValue = 0
  for (let num of nums) {
    maxValue |= num
  }
  
  let count = 0
  const backtrack = (idx, currentOR) => {
    if (currentOR == maxValue) count++

    for (let i = idx; i < nums.length; i++) {
      backtrack(i + 1, currentOR | nums[i])
    }
  }
  backtrack(0, 0)

  return count;
};