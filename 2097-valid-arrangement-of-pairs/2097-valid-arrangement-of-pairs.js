/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
  const graph = new Map()
  const inDegree = new Map()

  for (const [from, to] of pairs) {
    if (!graph.has(from)) graph.set(from, [])
    graph.get(from).push(to)
    inDegree.set(to, (inDegree.get(to) || 0) + 1)
  }

  let start = pairs[0][0]
  for (const [vertex, edges] of graph) {
    if (edges.length - (inDegree.get(vertex) || 0) === 1) {
      start = vertex
      break
    }
  }

  const path = []
  const traverse = (vertex) => {
    while (graph.has(vertex) && graph.get(vertex).length) {
      const next = graph.get(vertex).pop()
      traverse(next)
      path.push([vertex, next])
    }
  };

  traverse(start)
  return path.reverse()
};