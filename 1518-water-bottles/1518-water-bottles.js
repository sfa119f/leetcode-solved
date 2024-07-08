/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  const exchange = (bottleNum, exchangeNum) => {
    if (bottleNum / exchangeNum < 1) {
      return 0
    }
    return Math.floor(bottleNum / exchangeNum) + exchange(Math.floor(bottleNum / exchangeNum) + (bottleNum % exchangeNum), exchangeNum)
  }
  
  return numBottles + exchange(numBottles, numExchange)
};