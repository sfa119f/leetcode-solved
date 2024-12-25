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
 * @return {number[]}
 */
var largestValues = function(root) {
  const mapMax = new Map()
  
  function checkNode(node, lvl) {
    if (node == null || node == undefined) return
    
    mapMax.set(
      lvl, 
      Math.max(mapMax.has(lvl) ? mapMax.get(lvl) : node.val, node.val)
    )
    checkNode(node.left, lvl + 1)
    checkNode(node.right, lvl + 1)
  }
  
  checkNode(root, 0)
  
  let i = 0
  const res = []
  while(mapMax.has(i)) {
    res.push(mapMax.get(i))
    i++
  }
  
  return res
};