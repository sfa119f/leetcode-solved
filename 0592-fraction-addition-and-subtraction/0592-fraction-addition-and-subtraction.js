/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const GCD = (a ,b) => b ? GCD(b, a % b) : a
  const LCM = (a, b) => (a * b) / GCD(a, b)
  
  const numerator = []
  const denomintor = []
  
  let numStr = ""
  let isNumerator = true
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == '+' && !isNaN(numStr) && numStr.length != 0) {
      if (isNumerator) numerator.push(Number(numStr))
      else denomintor.push(Number(numStr))
      numStr = ""
      isNumerator = !isNumerator
    } else if (expression[i] == '-' && !isNaN(numStr) && numStr.length != 0) {
      if (isNumerator) numerator.push(Number(numStr))
      else denomintor.push(Number(numStr))
      numStr = "-"
      isNumerator = !isNumerator
    } else if (expression[i] == '/' && !isNaN(numStr) && numStr.length != 0) {
      if (isNumerator) numerator.push(Number(numStr))
      else denomintor.push(Number(numStr))
      numStr = ""
      isNumerator = !isNumerator
    } else {
      numStr += expression[i]
    }
  }
  if (!isNaN(numStr) && numStr.length != 0) {
    if (isNumerator) numerator.push(Number(numStr))
    else denomintor.push(Number(numStr))
    numStr = ""
  }
  
  const resDenomintor = denomintor.reduce((res, v) => LCM(res, v), 1)
  const resNumerator = numerator.reduce((res, v, idx) => 
    res + (v * (resDenomintor / denomintor[idx]))
  , 0)
  const factor = Math.abs(GCD(resNumerator, resDenomintor))
  
  return (resNumerator / factor) + '/' + (resDenomintor / factor) 
};