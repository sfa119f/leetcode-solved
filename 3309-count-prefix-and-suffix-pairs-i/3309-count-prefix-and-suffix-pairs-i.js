/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  const n = words.length

  function isPrefixAndSuffix(str1, str2) {
    const n1 = str1.length, n2 = str2.length
    if (n1 > n2) return false
    return str2.substring(0, n1) === str1 && str2.substring(n2 - n1) === str1
  }

  let count = 0
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++
      }
    }
  }
  return count
};