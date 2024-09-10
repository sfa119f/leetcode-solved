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
var insertGreatestCommonDivisors = function(head) {
  const GCD = (a, b) => {
    if (b === 0) return a
    return GCD(b, a % b)
  }
  
  let node = head
  while(node) {
    const nextNode = node.next
    if (nextNode) {
      node.next = new ListNode(GCD(node.val, node.next.val), node.next)
    }
    node = nextNode
  }
  
  return head
};