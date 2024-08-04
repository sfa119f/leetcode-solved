/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const MODULUS = 1000000007

  function countAndSumSubarrays(array, threshold) {
    let count = 0
    let totalSum = 0n
    let currentWindowSum = 0n
    let runningSum = 0n
    let start = 0

    for (let end = 0; end < array.length; end++) {
      runningSum += BigInt(array[end]) * BigInt(end - start + 1)
      currentWindowSum += BigInt(array[end])
      while (currentWindowSum > threshold) {
        runningSum -= currentWindowSum
        currentWindowSum -= BigInt(array[start])
        start++
      }
      count += end - start + 1
      totalSum += runningSum
    }
    return [count, totalSum]
  }

  function calculateSumOfFirstKSubarrays(array, k) {
    let low = BigInt(Math.min(...array))
    let high = BigInt(array.reduce((a, b) => a + b, 0))

    while (low < high) {
      let mid = low + (high - low) / 2n
      if (countAndSumSubarrays(array, mid)[0] < k) {
        low = mid + 1n
      } else {
        high = mid
      }
    }
    const [count, sum] = countAndSumSubarrays(array, low)
    return sum - low * BigInt(count - k)
  }

  const result = (
    calculateSumOfFirstKSubarrays(nums, right) -
    calculateSumOfFirstKSubarrays(nums, left - 1) +
    BigInt(MODULUS)
  ) % BigInt(MODULUS)
  return Number(result)
};