/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  let stk = [];

  for (let c of expression) {
    if (c !== ')' && c !== ',') {
      stk.push(c)
    } else if (c === ')') {
      let exp = []

      while (stk.length > 0 && stk[stk.length - 1] !== '(') {
        let t = stk.pop()
        exp.push(t === 't')
      }

      stk.pop()

      if (stk.length > 0) {
        let t = stk.pop()
        let v = exp[0]

        if (t === '&') {
          for (let b of exp) v = v && b
        } else if (t === '|') { 
          for (let b of exp) v = v || b
        } else { 
          v = !v
        }

        stk.push(v ? 't' : 'f')
      }
    }
  }

  return stk[stk.length - 1] === 't'
};