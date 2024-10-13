/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const minPQ = new MinPriorityQueue({
    priority: a => a[2] 
  })

  let minRange = Number.MAX_VALUE

  for (let i=0;i<nums.length;i++) {
    minPQ.enqueue([i, 0, nums[i][0]])
  }

  let ans = []

  while (!minPQ.isEmpty()) {
    const range =  minPQ.back().element[2] - minPQ.front().element[2]
    if (minRange > range) {
      minRange = range
      ans = [minPQ.front().element[2], minPQ.back().element[2]]
    }

    const [listIndex, listIterator, currentValue] = minPQ.front().element

    if (listIterator + 1 < nums[listIndex].length) {
      minPQ.dequeue()
      minPQ.enqueue([
        listIndex,listIterator + 1, 
        nums[listIndex][listIterator + 1]
      ])
    } else {
      break;
    }
  }
  return ans
};