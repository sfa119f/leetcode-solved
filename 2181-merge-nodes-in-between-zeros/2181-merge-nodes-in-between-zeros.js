/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
  const sum = (node) => {
    if (node.next.val == 0) {
      node.next = node.next.next
      if (node.next) {
        sum(node.next)
      }
    } else {
      node.val += node.next.val
      node.next = node.next.next
      sum(node)
    }
  }
  sum(head.next)
  
  return head.next
};