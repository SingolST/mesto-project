/* https://qna.habr.com/q/240670 */

function openModal(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  modal.addEventListener('click', closeByOverlay);
}

function closeModal(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  modal.removeEventListener('click', closeByOverlay);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
}

function closeByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal(evt.target);
  }
}

export { openModal, closeModal } 