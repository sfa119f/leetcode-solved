/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const setAllow = new Set()
  for (let i = 0; i < allowed.length; i++) {
    setAllow.add(allowed[i])
  }
  
  let countNotConsistent = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!setAllow.has(words[i][j])) {
        countNotConsistent++
        break
      }
    }
  }
  return words.length - countNotConsistent
};