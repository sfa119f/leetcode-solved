/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  const parts = new Array(k).fill(null);

  let len = 0
  let node = head
  while (node) {
    len++
    node = node.next
  }

  const n = Math.floor(len / k)
  let r = len % k

  node = head
  let prev = null

  for (let i = 0; node && i < k; i++, r--) {
    parts[i] = node
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
      prev = node
      node = node.next
    }
    if (prev) {
      prev.next = null
    }
  }

  return parts
};