/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const sumNums = []
  
  for (let i = 0; i < n; i++) {
    let temp = 0
    for (let j = i; j < n; j++) {
      temp += nums[j]
      sumNums.push(temp)
    }
  }
  
  sumNums.sort((a, b) => a - b)
  
  let res = 0
  for (let i = left - 1; i < right; i++) {
    res = (res + sumNums[i]) % 1000000007
  }
  return res
};