/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const n = nums.length
  const memo = new Map()

  function countWaysToSum(idx, remaining) {
    const key = `${idx}-${remaining}`;
      
    if (idx < 0) return remaining == 0 ? 1 : 0
    if (memo.has(key)) return memo.get(key)

    const plus = countWaysToSum(idx - 1, remaining + nums[idx]) 
    const minus = countWaysToSum(idx - 1, remaining - nums[idx])
    const count = plus + minus

    memo.set(key, count)

    return count
  }
  
  return countWaysToSum(n - 1, target);
};