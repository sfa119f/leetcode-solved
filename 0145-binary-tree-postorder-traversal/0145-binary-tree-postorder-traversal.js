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
var postorderTraversal = function(root) {
  if (root == null) return []
  if (root.left == null && root.right == null) return [root.val]
  
  let resLeft = []
  if (root.left) resLeft = postorderTraversal(root.left)
  
  let resRight = []
  if (root.right) resRight = postorderTraversal(root.right)
  
  resRight.push(root.val)
  return resLeft.concat(resRight)
};