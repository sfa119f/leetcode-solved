/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  const countCity = []
  for (let i = 0; i < n; i++) {
    countCity.push(0)
  }
  
  for (const road of roads) {
    countCity[road[0]]++
    countCity[road[1]]++
  }
  
  const cityOrder = [0]
  for (let i = 1; i < n; i++) {
    let j = 0
    while (j < cityOrder.length && countCity[i] > countCity[cityOrder[j]]) {
      j++
    }
    cityOrder.splice(j, 0, i)
  }
  
  let res = 0
  for (let i = 0; i < n; i++) {
    res += (i + 1) * countCity[cityOrder[i]]
  }
  
  return res
};