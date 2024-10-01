/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  const freq = new Map()
  
  for (let i = 0; i < k; i++) {
    freq.set(i, 0)
  }
  
  for (let i = 0; i < arr.length; i++) {
    const val = (arr[i] % k + k) % k
    freq.set(val, freq.get(val) + 1)
  }
  
  for (let i = 0; i < k / 2; i++) {
    if (i == 0 || i == k - i) {
      if (freq.get(i) % 2 != 0) return false
    } else {
      if (freq.get(i) != freq.get(k - i)) return false
    }
  }
  
  return true
};