/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const totalChalk = chalk.reduce((tot, v) => tot + v, 0)
  let modProblem = k % totalChalk
  
  let i = 0
  while (i < chalk.length - 1 && modProblem >= chalk[i]) {
    modProblem -= chalk[i++]
  }
  return i
};