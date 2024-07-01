/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let countOdd = 0
  let i = 0
  while (i < arr.length && countOdd < 3) {
    if (arr[i] % 2 == 1) countOdd++
    else countOdd = 0
    i++
  }
  return countOdd == 3
};