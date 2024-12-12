/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  while (k--) {
    gifts.sort((a, b) => b - a)
    let pile = gifts[0]
    gifts.shift()
    gifts.push(Math.floor(Math.sqrt(pile)))
  }
  
  return gifts.reduce((acc, curr) => acc + curr, 0)
};