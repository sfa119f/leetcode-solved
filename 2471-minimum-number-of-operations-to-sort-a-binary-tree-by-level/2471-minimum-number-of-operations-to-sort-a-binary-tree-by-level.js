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
 * @return {number}
 */
var minimumOperations = function(root) {
  let ans = 0
  let queue = [root]

  while (queue.length) {
    const next = []
    const cur = []

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i]
      cur.push(node.val)

      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    }

    const asc = [...cur].sort((a, b) => a - b)

    const map = {}
    for (let i = 0; i < asc.length; i++) {
      map[asc[i]] = i
    }

    let i = 0
    while (i < cur.length) {
      if (map[cur[i]] !== i) {
        ans++
        const j = map[cur[i]]
        const temp = cur[i]
        cur[i] = cur[j]
        cur[j] = temp
      } else {
        i++
      }
    }

    queue = next
  }

  return ans
};