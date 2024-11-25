/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  let result = Number.MAX_SAFE_INTEGER
  const directions = [[0,1], [0,-1], [1,0], [-1,0]]

  var isPuzzleSolved = function(board) {
    let puzzleValue = 1;

    for(let row = 0; row < 2; row++) {
      for(let col = 0; col < 3; col++) {
        if(row == 1 && col == 2) continue
        if(board[row][col] != puzzleValue++) return false
      }
    }

    return true
  }

  var swapPuzzlePiece = function(board, first, second) {
    let temp = board[first[0]][first[1]]

    board[first[0]][first[1]] = board[second[0]][second[1]]
    board[second[0]][second[1]] = temp
  }

  var helper_backtrack = function(board, moves, previous, current) {
    if(moves >= 20) return

    if(isPuzzleSolved(board)) {
      result = Math.min(result, moves)
      return
    }

    for(let dir of directions) {
      let row = current[0] + dir[0]
      let col = current[1] + dir[1]

      if(
        row < 0 || 
        row >= 2 || 
        col < 0 || 
        col >= 3 || 
        (previous[0] == row && previous[1] == col)
      ) {
        continue
      }

      let newMove = [row, col]

      swapPuzzlePiece(board, current, newMove)
      helper_backtrack(board, moves + 1, current, newMove)
      swapPuzzlePiece(board, current, newMove)
    }
  }

  let zero = [-1,-1]

  for(let row = 0; row < 2; row++) {
    for(let col = 0; col < 3; col++) {
      if(board[row][col] == 0) {
        zero = [row,col]
        break
      }
    }
  }

  helper_backtrack(board, 0, [-1,-1], zero)

  return (result == Number.MAX_SAFE_INTEGER) ? -1 : result
};