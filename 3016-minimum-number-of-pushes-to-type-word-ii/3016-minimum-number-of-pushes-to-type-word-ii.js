/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
  
  const freq = new Map()
  for (let i = 0; i < word.length; i++) {
    freq.set(word[i], (freq.get(word[i]) || 0) + 1)
  }
  
  const numbers = Array.from(freq.values())
  numbers.sort((a, b) => a - b)
  
  let res = 0
  let pushTime = 1
  let nthButton = 0
  while(numbers.length) {
    if (nthButton == 8) {
      pushTime++
      nthButton = 0
    }
    nthButton++
    res += pushTime * numbers.pop()
  }
  
  return res
};