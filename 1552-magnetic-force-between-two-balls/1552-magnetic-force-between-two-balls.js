/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  position = mergeSort(position)
  
  const n = position.length
  let ans = 0, low = 1, high = Math.ceil(position[n - 1] / (m - 1))
  
  while (low <= high) {
    let mid = low + Math.ceil((high - low) / 2)
    if (canPlaceBalls(mid, position, m)) {
      ans = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return ans
};
  
function canPlaceBalls(x, position, m) {
  let prevPos = position[0], placed = 1
  
  for (let i = 1; i < position.length && placed < m; ++i) {
    if (position[i] - prevPos >= x) {
      placed++
      prevPos = position[i]
    }
  }
  
  return placed == m
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}