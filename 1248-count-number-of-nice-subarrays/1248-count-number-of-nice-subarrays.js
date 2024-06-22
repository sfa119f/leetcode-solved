/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let res = 0
  let initialGap = 0
  let qSize = 0
  let start = 0
  
  for (let num of nums) {
    if (num % 2 == 1) {
      qSize++
    }
    if (qSize === k) {
      initialGap = 0
      while (qSize === k) {
        qSize -= nums[start] % 2
        initialGap++
        start++
      }
    }
    res += initialGap
  }
  
  return res
};