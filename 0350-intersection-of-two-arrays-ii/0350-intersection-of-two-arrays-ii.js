/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const max = Math.max(Math.max(...nums1), Math.max(...nums2)) + 1
  const temp1 = Array(max).fill(0)
  const temp2 = Array(max).fill(0)
  
  for (const num of nums1) {
    temp1[num] += 1  
  }
  
  for (const num of nums2) {
    temp2[num] += 1  
  }
  
  const res = []
  for (let i = 0; i < max; i++) {
    let j = Math.min(temp1[i], temp2[i])
    while (j-- > 0) {
      res.push(i)
    }
  }
  
  return res
};