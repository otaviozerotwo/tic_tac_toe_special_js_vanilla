function minimax(board, depth, isMaximizing, aiSymbol, humanPlayerSymbol) {
  if (checkWin(board, aiSymbol)) {
    return 1;
  }

  if (checkWin(board, humanPlayerSymbol)) {
    return -1;
  }

  if (isDraw(board)) {
    return 0;
  }

  if (depth === 0) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '') {
          board[i][j] = aiSymbol;

          let score = minimax(board, depth - 1, false, aiSymbol, humanPlayerSymbol);
          board[i][j] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '') {
          board[i][j] = humanPlayerSymbol;
          
          let score = minimax(board, depth - 1, true, aiSymbol, humanPlayerSymbol);
          board[i][j] = '';
          bestScore = Math.min(score, bestScore);
        }
      }
    }

    return bestScore;
  }
}