/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
  let low = 1, high = Math.max(...quantities);
  let res = 0

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)
    let storesNeeded = quantities.reduce((sum, quantity) => sum + Math.ceil(quantity / mid), 0)

    if (storesNeeded <= n) {
      res = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return res
};