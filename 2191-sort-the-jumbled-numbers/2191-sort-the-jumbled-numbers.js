/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
  const numsMapped = []
  for (let num of nums) {
    if (num == 0) {
      numsMapped.push(mapping[0])
      continue
    }
    let temp = 0
    let i = 0
    while (num > 0) {
      temp += mapping[num % 10] * Math.pow(10, i)
      num = Math.floor(num / 10)
      i++
    }
    numsMapped.push(temp)
  }
  
  const idxSorted = Array.from(Array(nums.length).keys())
  idxSorted.sort((a, b) => numsMapped[a] - numsMapped[b])
  
  return idxSorted.map(idx => nums[idx])
};