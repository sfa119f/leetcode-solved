/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let res = 0
  let maxCusInGrumpy = 0
  let countCusInGrumpy = 0

  for (let i = 0; i < minutes; i++) {
    if (!grumpy[i]) {
      res += customers[i]
    } else {
      countCusInGrumpy += customers[i]
    }
  }
  maxCusInGrumpy = countCusInGrumpy
  
  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i - minutes]) {
      countCusInGrumpy -= customers[i - minutes]
    }
    if (!grumpy[i]) {
      res += customers[i]
    } else {
      countCusInGrumpy += customers[i]
    }
    if (countCusInGrumpy > maxCusInGrumpy) {
      maxCusInGrumpy = countCusInGrumpy
    }
  }
  
  return res + maxCusInGrumpy
};