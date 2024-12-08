/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  const n = events.length

  events.sort((a, b) => a[0] - b[0])

  let suffixMax = new Array(n)
  suffixMax[n - 1] = events[n - 1][2]

  for (let i = n - 2; i >= 0; i--) {
    suffixMax[i] = Math.max(events[i][2], suffixMax[i + 1])
  }

  let maxSum = 0
  for (let i = 0; i < n; i++) {
    let left = i + 1, right = n - 1
    let nextEventIndex = -1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (events[mid][0] > events[i][1]) {
        nextEventIndex = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    if (nextEventIndex !== -1) {
      maxSum = Math.max(maxSum, events[i][2] + suffixMax[nextEventIndex])
    }

    maxSum = Math.max(maxSum, events[i][2])
  }

  return maxSum
};