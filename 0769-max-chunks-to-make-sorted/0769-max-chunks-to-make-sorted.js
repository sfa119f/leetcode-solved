/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let chunk = 0
  let max = new Array(arr.length)
  max[0] = arr[0]

  for (let i = 1; i < arr.length; i++) {
    max[i] = Math.max(max[i - 1], arr[i])
  }

  for (let i = 0; i < arr.length; i++) {
    if (max[i] == i) {
      chunk++
    }
  }

  return chunk
};