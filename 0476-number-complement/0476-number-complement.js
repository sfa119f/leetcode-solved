/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let res = 1
  while (res < num) {
    res *= 2
  }
  if (res == num) return res - 1
  return res - num - 1
};