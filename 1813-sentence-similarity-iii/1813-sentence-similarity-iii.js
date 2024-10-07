/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  let words1 = sentence1.split(" ")
  let words2 = sentence2.split(" ")

  if (words1.length < words2.length) [words1, words2] = [words2, words1]

  let start = 0, end = 0
  let n1 = words1.length, n2 = words2.length

  while (start < n2 && words1[start] === words2[start]) start++

  while (end < n2 && words1[n1 - end - 1] === words2[n2 - end - 1]) end++

  return start + end >= n2
};