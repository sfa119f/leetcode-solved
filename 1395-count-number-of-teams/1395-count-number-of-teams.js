/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  const n = rating.length
  if (n < 3) return 0

  const soldiers = rating.map((r, i) => [r, i]).sort((a, b) => a[0] - b[0])
  const indexMap = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    indexMap[soldiers[i][1]] = i
  }

  const countTeams = (ascending) => {
    const bit = new Array(n + 1).fill(0)
    let teams = 0

    for (let i = 0; i < n; i++) {
      const rank = indexMap[i] + 1
      const left = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank)
      const right = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1)
      teams += left * right
      update(bit, rank, 1)
    }

    return teams
  }

  const update = (bit, index, val) => {
    while (index < bit.length) {
      bit[index] += val
      index += index & (-index)
    }
  }

  const getSum = (bit, index) => {
    let sum = 0;
    while (index > 0) {
      sum += bit[index]
      index -= index & (-index)
    }
    return sum
  }

  return countTeams(true) + countTeams(false)
};