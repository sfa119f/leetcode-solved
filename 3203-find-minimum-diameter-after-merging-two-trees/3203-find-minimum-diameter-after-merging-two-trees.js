/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
  var getDiameter = (edges) => {
    let map = Array(edges.length + 1).fill().map(() => [])

    for (let [i, j] of edges) {
      map[i].push(j)
      map[j].push(i)
    }

    let res = 0

    var dfs = (node, parent) => {
      let maxDepth = 1
      for (let neighbor of map[node]) {
        if (neighbor === parent) continue
        let depth = dfs(neighbor, node)
        res = Math.max(res, maxDepth + depth)
        maxDepth = Math.max(maxDepth, 1 + depth)
      }
      return maxDepth
    };

    dfs(0, -1)

    return res
  };

  let d1 = getDiameter(edges1)
  let d2 = getDiameter(edges2)

  return Math.max(d1 - 1, d2 - 1, Math.floor(d1 / 2) + Math.floor(d2 / 2) + 1)
};