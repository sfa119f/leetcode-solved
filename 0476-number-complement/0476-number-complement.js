/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  if (num === 0) return 1;

  const mask = (1 << num.toString(2).length) - 1;

  return num ^ mask;

};