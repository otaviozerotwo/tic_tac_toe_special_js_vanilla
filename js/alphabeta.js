function alphabeta(board, depth, alpha, beta, isMaximizing, aiSymbol, humanPlayerSymbol) {
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

          let score = alphabeta(board, depth - 1, alpha, beta, false, aiSymbol, humanPlayerSymbol);
          board[i][j] = '';
          bestScore = Math.max(score, bestScore);
          alpha = Math.max(alpha, score);

          if (beta <= alpha) {
            break;
          }
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
          
          let score = alphabeta(board, depth - 1, alpha, beta, true, aiSymbol, humanPlayerSymbol);
          board[i][j] = '';
          bestScore = Math.min(score, bestScore);
          beta = Math.min(beta, score);

          if (beta <= alpha) {
            break;
          }
        }
      }
    }

    return bestScore;
  }
}