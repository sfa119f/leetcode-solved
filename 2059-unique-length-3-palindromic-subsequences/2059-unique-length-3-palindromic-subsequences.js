/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  let rightCount = Array(26).fill(0)
  let leftCount = Array(26).fill(0)
  let subsequences = new Set()
  
  for (let char of s) {
    rightCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  
  for (let char of s) {
    let t = char.charCodeAt(0) - 'a'.charCodeAt(0)
    rightCount[t]--
    
    for (let j = 0; j < 26; j++) {
      if (leftCount[j] > 0 && rightCount[j] > 0) {
        subsequences.add(26 * t + j);
      }
    }
    
    leftCount[t]++;
  }
  
  return subsequences.size;
};