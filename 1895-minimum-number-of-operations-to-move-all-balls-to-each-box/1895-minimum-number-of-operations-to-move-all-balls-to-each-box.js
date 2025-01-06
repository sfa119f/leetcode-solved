/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const n = boxes.length
  const res = new Array(n).fill(0)

  for (let i = 0, count = 0; i < n - 1; i++) {
    if (boxes[i] == '1') count++
    res[i + 1] = res[i] + count
  }

  for (let i = n - 1, count = 0, temp = 0; i > 0; i--) {
    if (boxes[i] == '1') count++
    temp += count
    res[i - 1] += temp
  }

  return res
};