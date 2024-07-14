/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let map = {};
  const stack = [];
  const n = formula.length;

  let i = 0;
  while (i < n) {
    const char = formula[i++];
    if (char === '(') {
      stack.push({ ...map });
      map = {};
    } else if (char === ')') {
      let val = 0;
      while (i < n && formula[i] >= '0' && formula[i] <= '9') {
        val = val * 10 + +formula[i++];
      }
      if (val === 0) val = 1;

      const prevMap = stack.pop();
      for (const key of Object.keys(map)) {
        map[key] = map[key] * val;
        prevMap[key] = (prevMap[key] || 0) + map[key];
      }
      map = prevMap;
    } else {
      const start = i - 1;
      while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
        i++;
      }
      const name = formula.slice(start, i);

      let val = 0;
      while (i < n && formula[i] >= '0' && formula[i] <= '9') {
        val = val * 10 + +formula[i++];
      }
      if (val === 0) val = 1;
      map[name] = (map[name] || 0) + val;
    }
  }

  let ans = '';
  const keys = Object.keys(map).sort();
  for (const key of keys) {
    ans += `${key}${map[key] === 1 ? '' : map[key]}`;
  }
  return ans;
};