/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
  const n = nums.length
  let xorr = nums[0]
  const maxXor = (1 << maximumBit) - 1

  for (let i = 1; i < n; i++) xorr ^= nums[i]

  const ans = []
  for (let i = 0; i < n; i++) {
    ans.push(xorr ^ maxXor)
    xorr ^= nums[n - 1 - i]
  }

  return ans
};