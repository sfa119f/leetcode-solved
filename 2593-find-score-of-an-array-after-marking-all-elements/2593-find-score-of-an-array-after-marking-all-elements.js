/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
  let arr = nums.map((n, i) => ({val: n, index: i}))
  const marked = new Set()

  arr.sort((a, b) => {
    if (a.val === b.val){
      return a.index - b.index
    }
    return a.val - b.val
  });

  let res = 0
  for(let n of arr) {
    if(!marked.has(n.index)){
      marked.add(n.index)
      marked.add(n.index-1)
      marked.add(n.index+1)
      res += n.val
    }
  }

  return res
};