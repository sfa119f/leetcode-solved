/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  let n = nums.length
  let bitCount = new Array(32).fill(0)
  let currentOR = 0
  let left = 0
  let minLength = Infinity

  for (let right = 0; right < n; right++) {
    currentOR |= nums[right]

    for (let bit = 0; bit < 32; bit++) {
      if (nums[right] & (1 << bit)) {
        bitCount[bit]++
      }
    }

    while (left <= right && currentOR >= k) {
      minLength = Math.min(minLength, right - left + 1)

      let updatedOR = 0
      for (let bit = 0; bit < 32; bit++) {
        if (nums[left] & (1 << bit)) {
          bitCount[bit]--
        }
        if (bitCount[bit] > 0) {
          updatedOR |= (1 << bit);
        }
      }
      currentOR = updatedOR
      left++
    }
  }

  return minLength === Infinity ? -1 : minLength
};