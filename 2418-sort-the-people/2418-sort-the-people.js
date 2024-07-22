/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const idxSorted = Array.from(Array(names.length).keys())
  idxSorted.sort((a, b) => heights[b] - heights[a])
  return idxSorted.map(idx => names[idx])
};