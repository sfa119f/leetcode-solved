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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  const findValue = (node, value) => {
    if (node.val == value) {
      return [value]
    }
    const leftVal = node.left ? findValue(node.left, value) : []
    const rightVal = node.right ? findValue(node.right, value) : []
    if (leftVal.length) {
      leftVal.push(true)
      leftVal.push(node.val)
      return leftVal
    } else if (rightVal.length) {
      rightVal.push(false)
      rightVal.push(node.val)
      return rightVal
    }
    return []
  }
  const start = findValue(root, startValue)
  const dest = findValue(root, destValue)
  
  let result = ""
  let idxDest = -1
  for (let i = 0; i < start.length; i+=2) {
    idxDest = dest.findIndex(val => val === start[i])
    if (idxDest == -1) {
      result += "U"
    } else {
      break
    }
  }
  for (let i = idxDest - 1; i >= 0; i-=2) {
    if (dest[i]) { // isLeft
      result += "L"
    } else {
      result += "R"
    }
  }
  
  return result
};