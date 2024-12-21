/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
  const adjList = edges.reduce((adjList, [a, b]) => {
    adjList[a].push(b)
    adjList[b].push(a)
    return adjList
  }, values.map(() => []))

  let total = 0
  const countComponents = (node, parent) => {
    const remainder = (
      values[node] + adjList[node]
        .reduce((sum, child) => sum + (child == parent ? 0 : countComponents(child, node)), 0)
    ) % k;

    if (remainder == 0) total += 1
    return remainder
  }

  countComponents(0, -1)
  return total
};