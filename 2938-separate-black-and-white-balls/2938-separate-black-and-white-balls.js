/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  const n = s.length
  const blackIdx = []
  let blackCount = 0
  
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] == '1') {
      blackIdx.push(i)
      blackCount += 1
    }
  }
  
  if (blackCount == 0) return 0
  if (blackCount == 1) return n - 1 - blackIdx[0]
  if (
    blackIdx[0] - blackIdx[blackCount - 1] == blackCount - 1 && 
    blackIdx[0] == n - 1
  ) {
    return 0
  }
  
  let steps = 0
  for (let i = 0; i < blackCount; i++) {
    steps += (n - 1 - i - blackIdx[i])
  }
  
  return steps
};