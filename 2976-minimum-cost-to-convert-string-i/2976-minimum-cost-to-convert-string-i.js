/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  const characters = "abcdefghijklmnopqrstuvwxyz"
  const obj = {}
  for (const char1 of characters) {
    obj[char1] = {}
    for (const char2 of characters) {
      if (char1 == char2) {
        obj[char1][char2] = 0
      } else {
        obj[char1][char2] = -1
      }
    }
  }
  
  for (let i = 0; i < cost.length; i++) {
    if (obj[original[i]][changed[i]] == -1) {
      obj[original[i]][changed[i]] = cost[i]
    } else {
      obj[original[i]][changed[i]] = Math.min(
        cost[i],
        obj[original[i]][changed[i]]
      )
    }
  }
  
  for (const mid of characters) {
    for (const src of characters) {
      for (const dest of characters) {
        if (obj[src][mid] == -1 || obj[mid][dest] == -1) continue
        if (obj[src][dest] == -1) {
          obj[src][dest] = obj[src][mid] + obj[mid][dest]
        } else {
          obj[src][dest] = Math.min(
            obj[src][dest],
            obj[src][mid] + obj[mid][dest]
          )
        }
      }
    }
  }
  
  let result = 0
  for (let i = 0; i < source.length; i++) {
    if (obj[source[i]][target[i]] == -1) {
      return -1
    }
    result += obj[source[i]][target[i]]
  }
  return result
};