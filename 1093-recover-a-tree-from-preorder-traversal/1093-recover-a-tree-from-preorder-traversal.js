/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
  const n = traversal.length
  if (n == 0) return new TreeNode()

  traversal += '-'
  const resMap = new Map()
  let longestDash = 0
  let tempDash = 0
  let tempNum = ''
  for (let i = 0; i < n + 1; i++) {
    if (traversal[i] == '-') {
      tempDash += 1
    } else {
      tempNum += traversal[i]
      if (traversal[i + 1] == '-') {
        if (tempDash == 0) resMap.set(0, new TreeNode(Number(tempNum)))
        else {
          let tempNode = new TreeNode(Number(tempNum))
          if (!resMap.has(tempDash)) {
            resMap.get(tempDash - 1).left = tempNode
          } else {
            resMap.get(tempDash - 1).right = tempNode
            for (let j = tempDash + 1; j <= longestDash; j++) {
              resMap.delete(j)
            }
          }
          resMap.set(tempDash, tempNode)
          longestDash = tempDash
        }
        tempDash = 0
        tempNum = ''
      }
    }
  }
  return resMap.get(0)
};