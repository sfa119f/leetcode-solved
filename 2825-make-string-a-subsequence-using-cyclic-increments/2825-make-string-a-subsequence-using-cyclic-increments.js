/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let targetIdx = 0
  const targetLen = str2.length

  for (let currChar of str1) {
    if (
      targetIdx < targetLen && 
      (str2.charCodeAt(targetIdx) - currChar.charCodeAt(0) + 26) % 26 <= 1
    ) {
        targetIdx++;
    }
  }

  return targetIdx === targetLen;
};