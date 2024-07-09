/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let timeNow = 0
  let timeWaiting = 0
  for (const customer of customers) {
    if (timeNow < customer[0]) {
      timeNow = customer[0]
    }
    timeNow += customer[1]
    timeWaiting += timeNow - customer[0]
  }
  return timeWaiting / customers.length
};