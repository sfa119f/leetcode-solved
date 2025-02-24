/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
  const n = amount.length

  const graph = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  
  let bobTime = Array(n).fill(Infinity)
  let bobPath = new Map()
  function findBobPath(node, parent, depth) {
    bobPath.set(node, depth)
    if (node === 0) return true
    for (const neighbor of graph[node]) {
      if (neighbor !== parent && findBobPath(neighbor, node, depth + 1)) {
        return true
      }
    }
    bobPath.delete(node)
    return false
  }

  findBobPath(bob, -1, 0)

  bobTime = Array(n).fill(Infinity)
  let time = 0
  for (const [node, t] of bobPath.entries()) {
    bobTime[node] = t
  }

  let maxIncome = -Infinity
  function dfsAlice(node, parent, currTime, income) {
    if (currTime < bobTime[node]) {
      income += amount[node]
    }
    else if (currTime === bobTime[node]) {
      income += amount[node] / 2
    }
    let isLeaf = true
    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
        isLeaf = false
        dfsAlice(neighbor, node, currTime + 1, income)
      }
    }
    if (isLeaf) {
      maxIncome = Math.max(maxIncome, income)
    }
  }

  dfsAlice(0, -1, 0, 0)
  return maxIncome
};