/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  const sumMap = new Map()
  
  const sumData = (tree, lvl) => {
    if (!tree) return
    sumMap.set(lvl, (sumMap.get(lvl) || 0) + tree.val)
    
    sumData(tree.left, lvl + 1)
    sumData(tree.right, lvl + 1)
  }
  
  sumData(root, 1)
  
  if (!sumMap.has(k)) return -1
  
  const arrSort = [...sumMap.entries()].sort((m1, m2) => m2[1] - m1[1])
  
  return arrSort[k - 1][1]
};