/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const minValue = Math.min(...nums)
  const maxValue = Math.max(...nums)
  
  const arrCount = Array(maxValue - minValue + 1).fill(0)
  for (const num of nums) {
    arrCount[num - minValue]++
  }
  
  const idxSorted = Array.from(Array(maxValue - minValue + 1).keys()).reverse()
  idxSorted.sort((a, b) => arrCount[a] - arrCount[b])
  
  const result = []
  for (let i = 0; i < maxValue - minValue + 1; i++) {
    for (let j = 0; j < arrCount[idxSorted[i]]; j++) {
      result.push(idxSorted[i] + minValue)
    }
  }
  return result
};