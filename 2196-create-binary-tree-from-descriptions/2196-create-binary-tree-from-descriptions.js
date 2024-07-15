/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const map = {}
  const childNodes = []
  for (const desc of descriptions) {
    if (!(desc[0] in map)) {
      map[desc[0]] = new TreeNode(desc[0])
    }
    
    if (!(desc[1] in map)) {
      map[desc[1]] = new TreeNode(desc[1])
    }
    
    if (desc[2]) {
      map[desc[0]].left = map[desc[1]]
    } else {
      map[desc[0]].right = map[desc[1]]
    }
    
    childNodes.push(desc[1])
  }
  
  for (const node in map) {
    if (!(childNodes.includes(Number(node)))) {
      return map[node]
    }
  }
  return null
};