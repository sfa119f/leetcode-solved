/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const setResult = new Set()
  const delWords = []
  const words = [ ...s1.split(" "), ...s2.split(" ")]
  
  for (let i = 0; i < words.length; i++) {
    if (setResult.has(words[i])) {
      delWords.push(words[i])
    } else {
      setResult.add(words[i])
    }
  }
  for (let i = 0; i < delWords.length; i++) {
    setResult.delete(delWords[i])
  }
  return [...setResult]
};