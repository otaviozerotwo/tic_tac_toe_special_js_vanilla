import { initSplash } from './ui/splash';
import { initDialog } from './ui/dialog';
import { showGameScreen } from './ui/screenManager';
import { renderBoard } from './ui/board';

const dialog = document.querySelector('#settings-dialog');

initSplash(dialog);
initDialog(dialog, startGame);

function startGame(settings) {
  console.log(settings);

  showGameScreen();
  renderBoard(board, handleClick);
}