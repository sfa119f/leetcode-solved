/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const memo = {}

  const OPERATIONS = {
    '-': (x, y) => x - y,
    '+': (x, y) => x + y,
    '*': (x, y) => x * y
  }

  function isNumber(str) {
    return /^\d+$/.test(str)
  }

  function dfs(exp) {
    if (memo[exp]) return memo[exp]

    const results = []

    if (isNumber(exp)) {
      results.push(parseInt(exp))
      return results
    }

    for (let i = 0; i < exp.length; i++) {
      const c = exp[i]

      if (OPERATIONS[c]) {
        const leftResults = dfs(exp.substring(0, i))
        const rightResults = dfs(exp.substring(i + 1))
        
        for (let a of leftResults) {
          for (let b of rightResults) {
            results.push(OPERATIONS[c](a, b))
          }
        }
      }
    }

    memo[exp] = results
    return results
  }
  
  return dfs(expression)
};