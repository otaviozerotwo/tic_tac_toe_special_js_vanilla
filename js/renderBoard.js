function renderBoard(board, handleClick) {
  const table = document.getElementById('board');
  table.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement('td');
      cell.classList.add('cell');

      cell.addEventListener('click', () => handleClick(i, j));
      cell.innerHTML = board[i][j];
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}