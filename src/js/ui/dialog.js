export function initDialog(dialog, onStartGame) {
  const btnStartGame = document.querySelector('#btn-start-game');

  btnStartGame.addEventListener('click', () => {
    const settings = {
      symbol: document.querySelector('input[name="symbol"]:checked').value,
      algorithm: document.querySelector('input[name="algorithm"]:checked').value,
      depth: Number(document.querySelector('#depth').value)
    };

    dialog.close();

    onStartGame(settings);
  });
}