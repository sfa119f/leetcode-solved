/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  const n = words.length
  const vowelLetter = new Set(['a', 'e', 'i', 'o', 'u'])

  const countVowel = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    if (
      vowelLetter.has(words[i].at(0)) && 
      vowelLetter.has(words[i].at(-1))
    ) {
      countVowel[i + 1] = countVowel[i] + 1
    } else {
      countVowel[i + 1] = countVowel[i]
    }
  }

  const result = []
  for (let [l, r] of queries) {
    result.push(countVowel[r + 1] - countVowel[l])
  }
  return result
};