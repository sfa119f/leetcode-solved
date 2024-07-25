/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const minValue = Math.min(...nums)
  const maxValue = Math.max(...nums)
  
  const arrCount = Array(maxValue - minValue + 1).fill(0)
  for (const num of nums) {
    arrCount[num - minValue]++
  }
  
  const result = []
  for (let i = 0; i < maxValue - minValue + 1; i++) {
    for (let j = 0; j < arrCount[i]; j++) {
      result.push(i + minValue)
    }
  }
  return result
};