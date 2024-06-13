/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

var minMovesToSeat = function(seats, students) {
  seats = mergeSort(seats)
  students = mergeSort(students)

  const total = seats.reduce((total, val, idx) =>
    total + Math.abs(val - students[idx])
  , 0)
  
  return total
};

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}