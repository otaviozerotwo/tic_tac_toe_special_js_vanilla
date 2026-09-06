export function showGameScreen() {
  const splash = document.querySelector('#splash-screen');
  const game = document.querySelector('#game-screen');

  splash.hidden = true;
  game.hidden = false;
}