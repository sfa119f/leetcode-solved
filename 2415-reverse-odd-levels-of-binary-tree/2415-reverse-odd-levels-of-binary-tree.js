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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  function doReverse(nodeL, nodeR, idx) {
    if (!nodeL || !nodeR) return
    if (idx % 2 !== 0) {
      let tmp = nodeL.val
      nodeL.val = nodeR.val
      nodeR.val = tmp
    }
    doReverse(nodeL.left, nodeR.right, idx + 1)
    doReverse(nodeL.right, nodeR.left, idx + 1)
  }

  if (root) doReverse(root.left, root.right, 1)
  return root
};