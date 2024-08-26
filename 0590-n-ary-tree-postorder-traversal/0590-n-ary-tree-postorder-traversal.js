/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const res = []
  
  const traverse = (node) => {
    if (!node) return
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i])
    }
    res.push(node.val)
  }
  
  traverse(root)
  return res
};