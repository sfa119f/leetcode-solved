/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const visited = new Set()
	let valid = 0

	const traverse = (row, col) => {
		const key = `${row}-${col}`

		if (visited.has(key)) return

		visited.add(key)
		for (const [x, y] of stones) {
			if (row === x || col === y) traverse(x, y)
		}
	}

	for (const [x, y] of stones) {
		const key = `${x}-${y}`

		if (!visited.has(key)) {
      traverse(x, y)
      valid++
    }
	}

	return stones.length - valid
};