/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  const dataSet = new Set()
  for (let i = 0; i < n; i++) {
    dataSet.add(i)
  }
  
  for (let [u, v] of edges) {
    dataSet.delete(v)
  }
  
  if (dataSet.size != 1) return -1
  return dataSet.values().next().value
};