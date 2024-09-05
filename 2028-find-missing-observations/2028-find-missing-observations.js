/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const totalAllRolls = mean * (rolls.length + n)
  const totalMRolls = rolls.reduce((tot, v) => tot + v, 0)
  const totalNRolls = totalAllRolls - totalMRolls
  
  if (totalNRolls > 6 * n || totalNRolls < 1 * n) {
    return []
  }
  
  const meanNRolls = Math.floor(totalNRolls / n)
  const modNRolls = totalNRolls % n
  const res = []
  for (let i = 0; i < n; i++) {
    if (i < modNRolls) {
      res.push(meanNRolls + 1)
    } else {
      res.push(meanNRolls)
    }
  }
  return res
};