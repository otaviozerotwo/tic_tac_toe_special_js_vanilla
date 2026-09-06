export function initSplash(dialog) {
  const btnOpenSettings = document.querySelector('#btn-open-settings');

  btnOpenSettings.addEventListener('click', () => {
    dialog.showModal();
  });
}