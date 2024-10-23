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
var replaceValueInTree = function(root) {
  const dfs = arr => {
    if (arr.length == 0) return

    let sum = 0
    for (let node of arr) {
      if (!node) continue
      if (node.left) sum += node.left.val
      if (node.right) sum += node.right.val
    }

    let childArr = []
    for (let node of arr) {
      let curSum = 0

      if (node.left) curSum += node.left.val
      if (node.right) curSum += node.right.val

      if (node.left) {
        node.left.val = sum - curSum
        childArr.push(node.left)
      }
      if (node.right) {
        node.right.val = sum - curSum
        childArr.push(node.right)
      }
    }

    dfs(childArr)
  }

  root.val = 0
  dfs([root])

  return root
};