/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity))
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0
  }
  for (const [node1, node2, weight] of edges) {
    dist[node1][node2] = weight
    dist[node2][node1] = weight
  }

  for (let mid = 0; mid < n; mid++) {
    for (let src = 0; src < n; src++) {
      for (let dest = 0; dest < n; dest++) {
          dist[src][dest] = Math.min(
          dist[src][dest], 
          dist[src][mid] + dist[mid][dest]
        )
      }
    }
  }

  let minNum = n
  let res = -1
  for (let src = 0; src < n; src++) {
    let srcCount = 0
    for (let dest = 0; dest < n; dest++) {
      if (dist[src][dest] <= distanceThreshold) {
        srcCount++
      }
    }
    if (srcCount <= minNum) { 
      minNum = srcCount
      res = src
    }
  }

  return res
};