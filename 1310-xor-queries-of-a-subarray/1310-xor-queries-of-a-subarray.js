/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const res = []
  
  let ans
  for (let i = 0; i < queries.length; i++) {
    ans = arr[queries[i][0]]
    for (let j = queries[i][0] + 1; j <= queries[i][1]; j++) {
      ans = ans ^ arr[j]
    }
    res.push(ans)
  }
  
  return res
};