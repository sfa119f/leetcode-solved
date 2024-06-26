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
var balanceBST = function(root) {
  const A = []  
  let go = root => {
    if (root.left) go(root.left);
    A.push(root.val);
    if (root.right) go(root.right);
  };
  go(root);
  let bal = (root = null, i = 0, j = A.length - 1) => {
      let k = Math.floor((i + j) / 2);
      root = new TreeNode(A[k]);
      root.left  = i < k ? bal(root, i, k - 1) : null;
      root.right = k < j ? bal(root, k + 1, j) : null;
      return root;
  };
  return bal();
};