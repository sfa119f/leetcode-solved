/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function(heights, queries) {
  function buildTree(l, r) {
    let mid = Math.floor((l+r)/2)
    let root = {max: heights[l]}

    if(l < mid) {
      root.left = buildTree(l, mid)
      root.max = Math.max(root.max, root.left.max)
    }
    if(r > mid && mid != l) {
      root.right = buildTree(mid, r)
      root.max = Math.max(root.max, root.right.max)
    }

    return root
  }

  function dfs(tree, l, r, min, minIdx) {
      if(tree.max < min) return -1
      if(r - l == 1) return l

      let mid = Math.floor((l+r)/2)
      if(mid > minIdx) {
        let result = dfs(tree.left, l, mid, min, minIdx)
        if(result > -1) {
          return result
        }
      }

      return dfs(tree.right, mid, r, min, minIdx)
  }

  let tree = buildTree(0, heights.length)

  for(let i = 0; i < queries.length; ++i) {
    let a = Math.min(queries[i][0], queries[i][1])
    let b = Math.max(queries[i][0], queries[i][1])

    if(a == b || heights[b] > heights[a]) {
      queries[i] = b
      continue
    }

    let min = Math.max(heights[a], heights[b])+1
    let minIdx = b

    queries[i] = dfs(tree, 0, heights.length, min, minIdx)
  }

  return queries
};