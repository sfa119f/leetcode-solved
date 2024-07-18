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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  let result = 0
  
  const deepLeaf = (node) => {
    if (!node.left && !node.right) {
      return [0]
    }
    let resLeft = [] 
    if (node.left) {
      resLeft = deepLeaf(node.left).map(val => val + 1).filter(val => val < distance)
    }
    let resRight = [] 
    if (node.right) {
      resRight = deepLeaf(node.right).map(val => val + 1).filter(val => val < distance)
    }
    for (const left of resLeft) {
      result += resRight.filter(val => val <= distance - left).length
    }
    return resLeft.concat(resRight)
  }
  deepLeaf(root)
  
  return result
};