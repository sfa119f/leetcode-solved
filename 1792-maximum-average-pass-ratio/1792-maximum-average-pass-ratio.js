/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
  const heap = new MaxPriorityQueue({priority: x => x[2]})

  for(let [pass, total] of classes) {
    const before = pass/total
    const after = (pass+1)/(total+1)
    heap.enqueue([pass, total, after-before])
  }

  while(extraStudents--) {
    let [pass, total] = heap.dequeue().element
    pass++
    total++
    const before = pass/total
    const after = (pass+1)/(total+1)
    heap.enqueue([pass, total, after-before])
  }

  let sum = 0

  while(!heap.isEmpty()) {
    const [pass, total] = heap.dequeue().element
    sum += (pass/total)
  }
  return sum/classes.length
};