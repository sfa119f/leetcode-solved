/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  const resIdx = []
  
  const findIdxMaxMin = (node, idx) => {
    if (node.next.next) {
      if (
        (node.next.val > node.val && node.next.val > node.next.next.val) ||
        (node.next.val < node.val && node.next.val < node.next.next.val)
      ) {
        resIdx.push(idx)
      }
      findIdxMaxMin(node.next, idx + 1)
    }
  }
  findIdxMaxMin(head, 1)
  
  if (resIdx.length > 1) {
    let min = resIdx[1] - resIdx[0]
    let max = resIdx[resIdx.length - 1] - resIdx[0]
    
    for (let i = 2; i < resIdx.length; i++) {
      const temp = resIdx[i] - resIdx[i - 1]
      min = temp < min ? temp : min
    }
    
    return [min, max]
    
    return [min, max]
  }
  
  return [-1, -1]
};