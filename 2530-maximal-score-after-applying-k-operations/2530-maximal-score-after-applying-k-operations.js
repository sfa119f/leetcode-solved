/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  const pq = new MaxPriorityQueue({ compare: (a, b) => b - a })
  for (const num of nums) {
    pq.enqueue(num)
  }
  let score = 0
  while (k) {
    const ele = pq.dequeue()
    score += ele
    pq.enqueue(Math.ceil(ele / 3))
    k--
  }
  return score
};