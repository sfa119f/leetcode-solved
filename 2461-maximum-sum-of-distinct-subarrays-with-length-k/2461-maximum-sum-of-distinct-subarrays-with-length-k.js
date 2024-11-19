/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  let res = 0
  const prevIdx = new Map() // num -> prev index of num
  let curSum = 0
  let l = 0

  for (let r = 0; r < nums.length; r++) {
    curSum += nums[r]

    const i = prevIdx.has(nums[r]) ? prevIdx.get(nums[r]) : -1
    while (l <= i || r - l + 1 > k) {
      curSum -= nums[l]
      l++
    }

    if (r - l + 1 === k) {
      res = Math.max(res, curSum)
    }
    prevIdx.set(nums[r], r)
  }

  return res
};