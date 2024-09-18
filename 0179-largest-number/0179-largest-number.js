/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const res = nums.map(v => v.toString())
      .sort((a, b) => a + b < b + a ? 1 : -1)
      .join('')
  if (res[0] == '0') return '0'
  return res
};