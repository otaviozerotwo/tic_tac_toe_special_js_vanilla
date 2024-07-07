const size = 7;
const winLength = 4;
let board = Array(size).fill().map(() => Array(size).fill(''));
let humanPlayerSymbol = 'X';
let aiSymbol = 'O';
let minimaxDepth = 3;
let algorithm = 'minimax';

document.querySelectorAll('input[name="symbol"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    humanPlayerSymbol = e.target.value;
    aiSymbol = humanPlayerSymbol === 'X' ? 'O' : 'X';
    resetBoard();
  });
});

document.querySelectorAll('input[name="algorithm"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    algorithm = e.target.value;
    resetBoard();
  });
});

document.getElementById('depth').addEventListener('change', (e) => {
  minimaxDepth = parseInt(e.target.value);
  resetBoard();
});

document.getElementById('btn-replay').addEventListener('click', resetBoard);

function resetBoard() {
  board = Array(size).fill().map(() => Array(size).fill(''));
  renderBoard(board, handleClick);
  document.getElementById('end-game-container').style.display = 'none';
}

function handleClick(row, col) {
  if (board[row][col] !== '') {
    return;
  }

  board[row][col] = humanPlayerSymbol;
  renderBoard(board, handleClick);
  const humanPlayerWin = checkWin(board, humanPlayerSymbol);
  
  if (humanPlayerWin) {
    highlightWinningCells(humanPlayerWin, 'rgb(0, 0, 255)');
    showEndGameMessage('You Win!');
    return;
  }

  if (isDraw(board)) {
    highlightDraw();
    showEndGameMessage('Draw!');
    return;
  }
  
  aiMove();
  renderBoard(board, handleClick);
  const aiWin = checkWin(board, aiSymbol);
  
  if (aiWin) {
    highlightWinningCells(aiWin, 'rgb(249, 41, 41)');
    showEndGameMessage('AI Wins!');
  } else if (isDraw(board)) {
    highlightDraw();
    showEndGameMessage('Draw!');
  }
}

function aiMove() {
  let bestScore = -Infinity;
  let move = null;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === '') {
        board[i][j] = aiSymbol;
        let score = (algorithm === 'minimax')
          ? minimax(board, minimaxDepth, false, aiSymbol, humanPlayerSymbol)
          : alphabeta(board, minimaxDepth, -Infinity, Infinity, false, aiSymbol, humanPlayerSymbol);
        board[i][j] = '';

        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }

  if (move) {
    board[move.i][move.j] = aiSymbol;
    renderBoard(board, handleClick);
  }
}

function checkWin(board, symbol) {
  // Verifica todas as direções possíveis para encontrar uma sequência de 4
  const directions = [
    { x: 1, y: 0 }, // Horizontal
    { x: 0, y: 1 }, // Vertical
    { x: 1, y: 1 }, // Diagonal direita
    { x: 1, y: -1 } // Diagonal esquerda
  ];
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === symbol) {
        for (let { x, y } of directions) {
          const winCells = [{ row: i, col: j }];
          let k = 1;
          
          while (k < winLength) {
            const newRow = i + k * y;
            const newCol = j + k * x;
            if (
              newRow >= 0 && newRow < size &&
              newCol >= 0 && newCol < size &&
              board[newRow][newCol] === symbol
            ) {
              winCells.push({ row: newRow, col: newCol });
            } else {
              break;
            }
            
            k++;
          }
          
          if (winCells.length === winLength) {
            return winCells;
          }
        }
      }
    }
  }
  return null;
}

function checkDiagonal(board, symbol, row, col, rowInc, colInc) {
  for (let i = 0; i < winLength; i++) {
    if (board[row + i * rowInc][col + i * colInc] !== symbol) return false;
  }
  return true;
}

function isDraw() {
  return board.flat().every(cell => cell !== '');
}

function showEndGameMessage(message) {
  const endGameContainer = document.getElementById('end-game-container');
  endGameContainer.innerHTML = message;
  endGameContainer.style.display = 'block'
  endGameContainer.style.backgroundColor = 'rgba(190, 190, 190, 0.6)';
}

function highlightWinningCells(cells, color) {
  for (const { row, col } of cells) {
    document.querySelector(`#board tr:nth-child(${row + 1}) td:nth-child(${col + 1})`).style.backgroundColor = color;
  }
}

function highlightDraw() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      document.querySelector(`#board tr:nth-child(${i + 1}) td:nth-child(${j + 1})`).style.backgroundColor = 'rgba(35, 142, 35, 0.6)';
    }
  }
}

resetBoard();