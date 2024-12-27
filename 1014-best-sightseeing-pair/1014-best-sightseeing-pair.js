/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let firstElementInPair = values[0] + 0

  let resultPairValue = 0
  let secondElementInPair, currentPairValue
  for(let i = 1; i < values.length; i++) {
    secondElementInPair = values[i] - i
    currentPairValue = firstElementInPair + secondElementInPair

    resultPairValue = Math.max(resultPairValue, currentPairValue);
    firstElementInPair = Math.max(firstElementInPair, values[i] + i);
  }
  return resultPairValue
};