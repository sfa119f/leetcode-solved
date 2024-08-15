/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let state = 0

  for (let bill of bills) {
    if (bill === 5) {
      state++
    } else if (bill === 10) {
      if (!(state & 0xFFFF)) return false
      state--
      state += 0x10000
    } else { // bill === 20
      if ((state & 0xFFFF0000) && (state & 0xFFFF)) {
        state -= 0x10001
      } else if ((state & 0xFFFF) >= 3) {
        state -= 3
      } else {
        return false
      }
    }
  }

  return true
};