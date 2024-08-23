/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const GCD = (a ,b) => b ? GCD(b, a % b) : a
  
  let numerator = 0, denominator = 1;

  const regex = /([+-]?\d+)\/(\d+)/g
  let match

  while ((match = regex.exec(expression)) !== null) {
    let num = parseInt(match[1])
    let den = parseInt(match[2])

    numerator = numerator * den + num * denominator
    denominator *= den

    let gcdVal = GCD(Math.abs(numerator), denominator)
    numerator /= gcdVal
    denominator /= gcdVal
  }

  return numerator + "/" + denominator
};