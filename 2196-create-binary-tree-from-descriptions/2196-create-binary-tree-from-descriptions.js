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
  const headNodes = []
  const childNodes = []
  for (const desc of descriptions) {
    if (desc[2]) {
      map[desc[0]] = [desc[1], map[desc[0]] ? map[desc[0]][1] : null]
    } else {
      map[desc[0]] = [map[desc[0]] ? map[desc[0]][0] : null, desc[1]] 
    }
    if (headNodes.indexOf(desc[0]) == -1 && childNodes.indexOf(desc[0]) == -1) {
      headNodes.push(desc[0])
    }
    if (childNodes.indexOf(desc[1]) == -1) {
      childNodes.push(desc[1])
    }
    if (headNodes.indexOf(desc[1]) > -1) {
      headNodes.splice(headNodes.indexOf(desc[1]), 1)
    }
  }
  
  const createNode = (val) => {
    if (!val) return null
    if (val in map) {
      const left = createNode(map[val][0])
      const right = createNode(map[val][1])
      return new TreeNode(val, left, right)
    }
    return new TreeNode(val, null, null)
  }

  return createNode(headNodes[0])
};