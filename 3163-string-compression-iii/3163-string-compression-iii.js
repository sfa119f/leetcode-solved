/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let comp = "", c = word[0], count = 1
  
  for (let i = 1; i < word.length; i++) {
    if (word[i] == c && count < 9) count++ 
    else {
      comp += count + c
      c = word[i]
      count = 1
    }
  }
  return comp + count + c
};