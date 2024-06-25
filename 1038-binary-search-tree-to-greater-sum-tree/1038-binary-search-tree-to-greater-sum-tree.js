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
var bstToGst = function(root) { 
  let sum = 0;

  const traverse = (node) => {
      if (node) {
          traverse(node.right);  // Traverse the right subtree
          sum += node.val;  // Update the sum
          node.val = sum;  // Update the current node's value
          traverse(node.left);  // Traverse the left subtree
      }
  };

  traverse(root);
  return root;
};

