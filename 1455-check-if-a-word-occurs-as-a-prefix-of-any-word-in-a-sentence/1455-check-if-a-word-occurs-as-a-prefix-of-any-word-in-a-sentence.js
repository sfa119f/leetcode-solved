/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const ns = sentence.length, nw = searchWord.length
  
  let i = 0, countWord = 1
  while (i < ns) {
    let j = 0
    while (j < nw && sentence[i + j] == searchWord[j]) {
      j++
    }
    if (j == nw) return countWord
    
    while (i < ns - 1 && sentence[i] != ' ') {
      i++
    }
    countWord++
    i++
  }
  
  return -1
};