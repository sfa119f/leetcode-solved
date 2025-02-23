/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  let index = 0;
  
  function construct(l, h) {
    if (index >= preorder.length || l > h) return null;
    if (l === h) return new TreeNode(preorder[index++]);

    const root = new TreeNode(preorder[index++]);
    let i = l;
    while (i <= h && postorder[i] !== preorder[index]) i++;

    if (i <= h) {
      root.left = construct(l, i);
      root.right = construct(i + 1, h - 1);
    }
    return root;
  }

  return construct(0, preorder.length - 1);
};