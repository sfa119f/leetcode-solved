/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  // east, south, west, north movements
  const movement = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const result = Array.from(Array(m), () => Array(n).fill(-1))
  
  let i = 0, j = 0, currDirection = 0
  while (head) {
    result[i][j] = head.val
    let newI = i + movement[currDirection][0]
    let newJ = j + movement[currDirection][1]
    
    if (Math.min(newI, newJ) < 0 || newI >= m || newJ >= n || result[newI][newJ] != -1) {
      currDirection = (currDirection + 1) % 4
    }
    
    i += movement[currDirection][0]
    j += movement[currDirection][1]
    
    head = head.next
  }
  
  return result
};