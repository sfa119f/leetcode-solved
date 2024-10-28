/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  const maxNum = Math.max(...nums)
  const setNums = new Set()
  
  for (let num of nums) {
    setNums.add(num)
  }
  
  let res = -1
  for (let num of nums) {
    let count = 1
    let seqNow = num
    
    while (count < 5 && seqNow <= maxNum) {
      seqNow = Math.pow(seqNow, 2)
      if (setNums.has(seqNow)) count++
      else break
    }
    
    if (count > 1) res = Math.max(res, count)
  }
  
  return res
};