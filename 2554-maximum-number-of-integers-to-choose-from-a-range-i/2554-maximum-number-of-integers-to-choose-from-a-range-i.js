/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const bannedSet = new Set()
  for (let i = 0; i < banned.length; i++) {
    if (banned[i] <= n) bannedSet.add(banned[i])
  }
  
  let sum = 0, count = 0, i = 1
  while (i <= n && sum <= maxSum) {
    if (!bannedSet.has(i)) {
      sum += i
      count++
    }
    i++
  }
  
  return sum <= maxSum ? count : count - 1
};