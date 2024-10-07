/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const st = []
  for (const c of s) {
    if (
      st.length && 
      (
        c === 'B' && st[st.length - 1] === 'A' || 
        c === 'D' && st[st.length - 1] === 'C'
      )
    ) {
      st.pop()
    } else {
      st.push(c)
    }
  }
  return st.length
};